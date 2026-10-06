import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { tracePath, seedFrom } from "../../lib/seismo";
import type { SeismicEvent } from "../../lib/seismo";

type TraceProps = {
  /** Any stable string. The same seed always draws the same line. */
  seed: string;
  events?: SeismicEvent[];
  floor?: number;
  strokeWidth?: number;
  /** Sizing and colour live on the wrapper; the pen inherits currentColor. */
  className?: string;
  /** Drives the pen position when supplied (scroll-scrubbed traces). */
  progress?: MotionValue<number>;
  /** Draw once on mount instead of scrubbing. */
  draw?: boolean;
  delay?: number;
  duration?: number;
  /** Sample spacing in CSS pixels. Lower is denser chatter. */
  density?: number;
  title?: string;
};

/**
 * The pen. The SVG is sized in real pixels rather than a stretched viewBox, so
 * the stroke stays a true hairline in both axes and the noise keeps the same
 * grain at every width — a drum does not stretch its record to fit the sheet.
 */
const Trace: FC<TraceProps> = ({
  seed,
  events,
  floor = 0.05,
  strokeWidth = 1,
  className,
  progress,
  draw = false,
  delay = 0,
  duration = 2.4,
  density = 2.4,
  title,
}) => {
  const reduced = useReducedMotion();
  const host = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  // Measure before paint. A ResizeObserver callback is delivered with the
  // rendering steps, so a throttled or backgrounded tab can leave the first
  // one pending indefinitely — and the pen is the one element on this page
  // that must not wait on the frame loop to exist.
  useLayoutEffect(() => {
    const el = host.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const w = Math.round(box.width);
    const h = Math.round(box.height);
    if (w > 1 && h > 1) {
      setBox((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    }
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      // Round to whole pixels: sub-pixel jitter would otherwise retrigger the
      // draw on every layout tick.
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(entry.contentRect.height);
      setBox((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const samples = Math.max(
    40,
    Math.min(900, Math.round(box.w / Math.max(0.6, density))),
  );

  const d = useMemo(() => {
    if (box.w < 2 || box.h < 2) return "";
    return tracePath({
      width: box.w,
      height: box.h,
      seed: seedFrom(seed),
      samples,
      floor,
      events,
    });
  }, [box.w, box.h, seed, samples, floor, events]);

  // Reduced motion gets the finished record: the line is already written.
  const scrubbed = !reduced && progress ? progress : undefined;
  const animated = !reduced && draw && !progress;

  return (
    <div ref={host} className={className}>
      {d && (
        <svg
          width={box.w}
          height={box.h}
          viewBox={`0 0 ${box.w} ${box.h}`}
          className="block h-full w-full overflow-visible"
          role={title ? "img" : "presentation"}
          aria-label={title}
          aria-hidden={title ? undefined : true}
          focusable="false"
        >
          <motion.path
            // The pen only knows its run once the observer has measured the
            // sheet, which lands after mount. Keying on that geometry restarts
            // the draw with the real length instead of leaving it stranded at
            // the zero-length it mounted with.
            key={`${box.w}x${box.h}`}
            d={d}
            // Normalising the path to one user unit keeps the dash maths valid
            // when the geometry changes under an animation; without it a window
            // resize leaves the pen drawing a dashed line.
            pathLength={1}
            className={animated ? "pen-draw" : undefined}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              scrubbed
                ? { pathLength: scrubbed }
                : animated
                  ? ({
                      "--pen-duration": `${duration}s`,
                      "--pen-delay": `${delay}s`,
                    } as CSSProperties)
                  : undefined
            }
          />
        </svg>
      )}
    </div>
  );
};

export default Trace;

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Nothing stays withheld longer than this, whatever the observer does. */
const BACKSTOP_MS = 6000;

/**
 * Flips once, the first time the element reaches the reading band. The reveal
 * itself is a CSS animation, so a throttled frame loop cannot strand it.
 *
 * Three guarantees, because this gates real content:
 *  · an element already on screen at mount never hides at all;
 *  · no observer available means arrived immediately;
 *  · a backstop timer flips anything the observer never reports on.
 * A reveal that can fail closed is worse than no reveal.
 */
export function useArrived<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [arrived, setArrived] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  // Before paint: if it is already in view, there is nothing to reveal.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || arrived) return;
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) setArrived(true);
    // Checked once on mount; later arrivals belong to the observer below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || arrived) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setArrived(true);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    observer.observe(el);

    const backstop = window.setTimeout(() => setArrived(true), BACKSTOP_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(backstop);
    };
  }, [arrived]);

  return { ref, arrived };
}

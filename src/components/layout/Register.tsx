import { useRef } from "react";
import type { FC, ReactNode } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useLocale } from "../../i18n/context";
import Trace from "../seismo/Trace";
import { SHEET, regNo } from "../../lib/sheet";

type RegisterProps = {
  id: string;
  /** Zero-based position on the sheet. */
  index: number;
  heading: string;
  lead?: string;
  /** Amplitude of the arrival that announces this register, 0..1. */
  magnitude?: number;
  children: ReactNode;
  className?: string;
};

/**
 * One row of the drum sheet. The rule across the top is the baseline the pen
 * writes on: it is scrubbed by scroll, so the arrival is literally recorded as
 * the register comes into view rather than fading in on arrival.
 */
const Register: FC<RegisterProps> = ({
  id,
  index,
  heading,
  lead,
  magnitude = 0.7,
  children,
  className,
}) => {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 35%"],
  });
  const pen = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative scroll-mt-20 py-20 sm:py-28 lg:py-36 ${className ?? ""}`}
    >
      <div className={SHEET}>
        {/* The arrival: a rule with the pen writing across it. */}
        <div className="relative h-14 sm:h-16">
          <div className="absolute inset-x-0 top-1/2 h-px bg-rule" />
          <Trace
            seed={`register-${id}`}
            floor={0.045}
            density={3.2}
            events={[{ at: 0.3, magnitude, decay: 0.26 }]}
            progress={pen}
            className="absolute inset-0 h-full w-full text-bone"
          />
        </div>

        {/* The number sits on the heading's own line, as the sheet marks a row. */}
        <div className="mt-6 flex items-baseline gap-5 sm:gap-8">
          <span className="data-label shrink-0 text-bone-3">
            {t.station.sheet} {regNo(index)}
          </span>
          <h2 className="w-expanded text-[clamp(1.75rem,4.6vw,3rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-bone">
            {heading}
          </h2>
        </div>

        {lead && (
          <p className="mt-6 max-w-[62ch] text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.55] font-light text-bone-2">
            {lead}
          </p>
        )}

        <div className="mt-14 sm:mt-16">{children}</div>
      </div>
    </section>
  );
};

export default Register;

import { useRef } from "react";
import type { FC, ReactNode } from "react";
import { useInView } from "framer-motion";
import { CONTAINER } from "../../lib/layout";

/**
 * A section of the index: a hairline across the top that draws itself once
 * when the section arrives, the heading in the left column, the content in
 * the right. The line is the only thing that moves; it is a transform on one
 * element, triggered once, never tied to scroll position.
 */
const Section: FC<{
  id: string;
  heading: string;
  lead?: string;
  children: ReactNode;
}> = ({ id, heading, lead, children }) => {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <section ref={ref} id={id} className={`scroll-mt-16 pt-24 pb-6 lg:pt-32 ${CONTAINER}`}>
      <div className="relative h-px bg-line" aria-hidden="true">
        <div
          className={`absolute inset-0 origin-left bg-paper-3 transition-transform duration-[1200ms] ease-[var(--ease-out)] motion-reduce:scale-x-100 ${
            seen ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 className="text-[clamp(1.875rem,2.9vw,2.375rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
            {heading}
          </h2>
          {lead && (
            <p className="mt-4 max-w-[30ch] text-[0.9375rem] leading-[1.6] text-paper-2">
              {lead}
            </p>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
};

export default Section;

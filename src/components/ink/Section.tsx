import { useRef } from "react";
import type { FC, ReactNode } from "react";
import { useInView } from "framer-motion";

/**
 * A section of the index: a hairline across the top that draws itself once
 * when the section arrives, then the heading and its content. The left
 * column belongs to the page's sidebar, so a section lives entirely in the
 * content column. The line is the only thing that moves — one transform,
 * triggered once, never tied to scroll position.
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
    <section ref={ref} id={id} className="scroll-mt-16 pt-24 pb-6 lg:pt-32">
      <div className="relative h-px bg-line" aria-hidden="true">
        <div
          className={`absolute inset-0 origin-left bg-paper-3 transition-transform duration-[1200ms] ease-[var(--ease-out)] motion-reduce:scale-x-100 ${
            seen ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>

      <header className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
          {heading}
        </h2>
        {lead && (
          <p className="max-w-[36ch] text-[0.9375rem] leading-[1.6] text-paper-2 sm:pb-1 sm:text-right">
            {lead}
          </p>
        )}
      </header>

      <div className="mt-10">{children}</div>
    </section>
  );
};

export default Section;

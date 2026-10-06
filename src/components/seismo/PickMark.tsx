import type { FC } from "react";

type PickMarkProps = {
  /** Phase label, e.g. "P" or "S". */
  phase: string;
  /** Horizontal position as a percentage of the parent width. */
  at: number;
  className?: string;
};

/**
 * An arrival pick: the vertical line an analyst drops on the trace at the
 * moment a phase was detected, with a filled triangle at its head. Its state
 * reads from the geometry — weight and fill — never from colour.
 */
const PickMark: FC<PickMarkProps> = ({ phase, at, className }) => (
  <div
    className={`pick-in pointer-events-none absolute inset-y-0 ${className ?? ""}`}
    style={{ left: `${at}%` }}
    aria-hidden="true"
  >
    <div className="relative h-full w-px bg-bone-2/70">
      <svg
        viewBox="0 0 8 7"
        className="absolute -top-px -left-[3.5px] h-[7px] w-2 fill-bone"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M4 7 0 0h8Z" />
      </svg>
      <span className="data-label absolute top-2.5 left-2 text-bone-2">
        {phase}
      </span>
    </div>
  </div>
);

export default PickMark;

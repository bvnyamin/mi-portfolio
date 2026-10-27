import type { FC } from "react";
import { MARKS } from "../../content/marks";

/**
 * A technology's mark, drawn in the text colour around it.
 *
 * Filled with currentColor rather than its brand colour: the page's only
 * colour is the vermilion that marks links, and a wall of brand palettes
 * would compete with it. Terms with no
 * mark render as text alone — the component simply returns nothing, so the
 * label stays the anchor and the row never breaks.
 */
const TechMark: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const path = MARKS[name];
  // No mark for this term: hold its slot, so labels keep one rhythm.
  if (!path) {
    return (
      <span className={`inline-flex items-center justify-center ${className ?? ""}`} aria-hidden="true">
        <span className="block h-[3px] w-[3px] rounded-full bg-current opacity-60" />
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
};

export default TechMark;

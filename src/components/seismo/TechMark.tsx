import type { FC } from "react";
import { MARKS } from "../../content/marks";

/**
 * A technology's mark, drawn in the sheet's own ink.
 *
 * Filled with currentColor rather than its brand colour: the page has no hue,
 * and a wall of brand palettes would be the only colour on it. Terms with no
 * mark render as text alone — the component simply returns nothing, so the
 * label stays the anchor and the row never breaks.
 */
const TechMark: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const path = MARKS[name];
  if (!path) return null;

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

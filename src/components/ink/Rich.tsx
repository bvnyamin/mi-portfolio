import type { FC } from "react";
import type { RichText } from "../../content/types";
import InkLink from "./InkLink";

/** Prose with its links drawn in by hand, staggered in reading order. */
const Rich: FC<{ parts: RichText; wrap?: boolean }> = ({ parts, wrap = false }) => (
  <>
    {parts.map((part, i) =>
      typeof part === "string" ? (
        <span key={i}>{part}</span>
      ) : (
        <InkLink
          key={i}
          href={part.href}
          wrap={wrap}
          order={parts.slice(0, i).filter((p) => typeof p !== "string").length}
        >
          {part.text}
        </InkLink>
      ),
    )}
  </>
);

export default Rich;

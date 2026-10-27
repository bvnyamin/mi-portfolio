import { useRef } from "react";
import type { AnchorHTMLAttributes, FC, ReactNode } from "react";
import { useInView } from "framer-motion";

/**
 * A link underlined by hand: the page's one colour, on the one kind of thing
 * that colour is for. The stroke is a single wobbly path in the accent. It is
 * drawn the first time the link comes into view (staggered by `order` when
 * several arrive together) and redrawn from the left whenever the pointer
 * returns. Only the stroke animates; the words are there from first paint.
 */
const InkLink: FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    /** Position among scribbles that arrive together, for the stagger. */
    order?: number;
    /**
     * For links inside long prose: lets the phrase break across lines. The
     * drawn stroke needs one unbroken box, so a wrapping link takes the
     * browser's own wavy underline instead, which follows every line, and
     * inks it in when the link first comes into view.
     */
    wrap?: boolean;
  }
> = ({ children, order = 0, wrap = false, className, ...rest }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const external = typeof rest.href === "string" && /^https?:/.test(rest.href);

  if (wrap) {
    return (
      <a
        ref={ref}
        {...rest}
        target={external ? "_blank" : rest.target}
        rel={external ? "noreferrer" : rest.rel}
        className={`ink-wavy text-paper transition-colors duration-300 hover:text-accent ${
          seen ? "is-drawn" : ""
        } ${className ?? ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      ref={ref}
      {...rest}
      target={external ? "_blank" : rest.target}
      rel={external ? "noreferrer" : rest.rel}
      className={`relative inline-block whitespace-nowrap text-paper transition-colors duration-300 hover:text-accent ${
        seen ? "is-drawn" : ""
      } ${className ?? ""}`}
    >
      {children}
      <span
        className="scribble-wrap pointer-events-none absolute inset-x-0 -bottom-[0.32em] h-[0.42em]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
          focusable="false"
        >
          <path
            className="scribble"
            pathLength={1}
            d="M1 6.2 C 12 3.2, 21 8.4, 34 5.6 S 58 3.1, 71 5.9 S 90 7.6, 99 4.4"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ ["--scribble-delay" as string]: `${0.15 + order * 0.12}s` }}
          />
        </svg>
      </span>
    </a>
  );
};

export default InkLink;

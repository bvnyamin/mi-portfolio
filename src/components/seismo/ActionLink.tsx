import type { AnchorHTMLAttributes, FC, ReactNode } from "react";

type ActionLinkProps = {
  children: ReactNode;
  /** Primary actions get the full-weight rule and bone text. */
  weight?: "primary" | "secondary";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * An action written the way the instrument writes one: a label over a leader
 * line that extends under the cursor, with an arrowhead that travels along it.
 * No pills, no filled buttons — the sheet has no room for either.
 */
const ActionLink: FC<ActionLinkProps> = ({
  children,
  weight = "secondary",
  className,
  ...rest
}) => {
  const primary = weight === "primary";

  return (
    <a
      {...rest}
      className={`group relative inline-flex w-fit items-end gap-3 pt-3.5 pb-2.5 ${
        primary ? "text-bone" : "text-bone-2 hover:text-bone"
      } transition-colors duration-300 ${className ?? ""}`}
    >
      <span className="w-narrow text-[0.8125rem] font-medium tracking-[0.14em] uppercase">
        {children}
      </span>

      <svg
        viewBox="0 0 14 10"
        className="mb-[0.2em] h-[0.6em] w-[0.85em] shrink-0 fill-current transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 4.4h10.3L7.1 1.2 8.3 0 14 5l-5.7 5-1.2-1.2 3.2-3.2H0Z" />
      </svg>

      {/* The leader line: 1px at rest, drawn across on hover and focus. */}
      <span
        className={`absolute inset-x-0 bottom-0 h-px ${
          primary ? "bg-bone/40" : "bg-rule"
        }`}
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
        aria-hidden="true"
      />
    </a>
  );
};

export default ActionLink;

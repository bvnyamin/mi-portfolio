import type { FC } from "react";

type TimeGridProps = {
  /** Minor divisions across the full width. Every sixth is a major tick. */
  divisions?: number;
  className?: string;
  /** Draw the hour labels along the top edge. */
  labels?: boolean;
  /** Draw the vertical rules. Off when another layer already carries them. */
  lines?: boolean;
  /** Dim the rules where the grid runs behind dense content. */
  quiet?: boolean;
};

/**
 * The printed time grid on the drum sheet. This is the measuring surface the
 * trace is written on, not a decorative overlay — the hour ticks are what the
 * register counters and pick marks are read against.
 */
const TimeGrid: FC<TimeGridProps> = ({
  divisions = 24,
  className,
  labels = false,
  lines: drawLines = true,
  quiet = false,
}) => {
  const lines = Array.from({ length: divisions + 1 }, (_, i) => i);

  return (
    <div className={className} aria-hidden="true">
      {drawLines && (
      <div className="absolute inset-0 flex justify-between">
        {lines.map((i) => (
          <span
            key={i}
            className={`w-px ${
              i % 6 === 0
                ? quiet
                  ? "bg-grid"
                  : "bg-rule"
                : i % 3 === 0
                  ? quiet
                    ? "bg-grid-quiet"
                    : "bg-grid"
                  : quiet
                    ? "bg-transparent sm:bg-grid-quiet"
                    : "bg-transparent sm:bg-grid"
            }`}
          />
        ))}
      </div>
      )}

      {labels && (
        <div className="absolute inset-x-0 top-0 flex justify-between">
          {lines.map((i) =>
            i % 6 === 0 && i !== divisions ? (
              <span
                key={i}
                className="data-label translate-x-2 pt-2 text-bone-3"
              >
                {String(i).padStart(2, "0")}
              </span>
            ) : (
              <span key={i} className="w-px" />
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default TimeGrid;

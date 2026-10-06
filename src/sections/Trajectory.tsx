import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { timeline } from "../content/data";
import type { TimelineEntry } from "../content/data";
import { formatRange } from "../lib/dates";
import Register from "../components/layout/Register";
import { useArrived } from "../hooks/useArrived";

const Entry: FC<{ entry: TimelineEntry }> = ({ entry }) => {
  const { t, locale } = useLocale();
  const copy = t.path.entries[entry.id];
  const { ref, arrived } = useArrived<HTMLLIElement>();

  if (!copy) return null;

  const ongoing = entry.to === "present";

  return (
    <li
      ref={ref}
      data-band={arrived ? "arrived" : "pending"}
      className="relative border-t border-rule py-9 pl-7 first:border-t-0 sm:flex sm:gap-[clamp(40px,6vw,64px)] sm:pl-0"
    >
      <div className="relative shrink-0 sm:w-[clamp(132px,15vw,176px)]">
        <span className="data-label block text-bone-2">
          {formatRange(entry.from, entry.to, locale, t.path.present)}
        </span>
        {/* The mark on the time axis. An ongoing role is still being written,
            so its mark is open rather than filled. */}
        <span
          className={`absolute top-[0.45rem] -left-8 block h-px w-2 sm:-right-1 sm:left-auto ${
            ongoing ? "bg-bone-3" : "bg-bone"
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="mt-3 sm:mt-0">
        <h3 className="w-narrow text-[clamp(1.25rem,2.6vw,1.75rem)] leading-tight font-semibold tracking-[-0.015em] text-bone">
          {copy.title}
        </h3>
        <p className="field-label mt-2 text-bone-3">{copy.org}</p>
        <p className="mt-4 max-w-[62ch] text-[1rem] leading-[1.65] font-light text-bone-2">
          {copy.body}
        </p>

        {entry.tech && (
          <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="field-label text-bone-3">{t.path.techLabel}</span>
            {entry.tech.map((item) => (
              <span
                key={item}
                className="w-narrow text-[0.875rem] font-medium tracking-[0.03em] text-bone-2"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

/**
 * Register 03. The time axis of the record: roles and education in the order
 * they were written. The rail on the left is the drum's own edge.
 */
const Trajectory: FC = () => {
  const { t } = useLocale();
  const entries = timeline.filter((entry) => t.path.entries[entry.id]);
  if (entries.length === 0) return null;

  return (
    <Register
      id="trayectoria"
      index={2}
      heading={t.path.heading}
      lead={t.path.lead}
      magnitude={0.68}
    >
      <ol className="relative">
        <span
          className="absolute top-2 bottom-2 left-0 w-px bg-rule sm:left-[clamp(132px,15vw,176px)]"
          aria-hidden="true"
        />
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </ol>
    </Register>
  );
};

export default Trajectory;

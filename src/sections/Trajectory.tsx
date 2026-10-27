import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { timeline } from "../content/data";
import type { TimelineEntry } from "../content/data";
import { formatRange, monthsBetween } from "../lib/dates";
import Section from "../components/ink/Section";

const Row: FC<{ entry: TimelineEntry }> = ({ entry }) => {
  const { t, locale } = useLocale();
  const copy = t.path.entries[entry.id];
  if (!copy) return null;

  const ongoing = entry.to === "present";
  const months = monthsBetween(entry.from, entry.to);
  const duration =
    months === null ? null : `${months} ${months === 1 ? t.ui.month : t.ui.months}`;

  return (
    <li className="group relative border-b border-line transition-colors duration-200 before:pointer-events-none before:absolute before:inset-y-0 before:-inset-x-4 before:rounded-[10px] before:bg-paper before:opacity-0 before:transition-opacity before:duration-200 hover:text-night hover:before:opacity-100 sm:before:-inset-x-5">
      {/* The row inverts under the pointer: the entry being read becomes the
          brightest thing on the page. The paper is a layer that bleeds past
          the column, so the hairlines stay flush with every other list. */}
      <div className="relative grid gap-3 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
        <div>
          <p className="mono-label tabular-nums">
            {formatRange(entry.from, entry.to, locale, t.path.present)}
          </p>
          {duration && (
            <p className="mono-label mt-0.5 flex items-center gap-2 text-paper-3 transition-colors duration-200 group-hover:text-night/60">
              {ongoing && (
                <span className="h-1.5 w-1.5 rounded-full bg-paper transition-colors duration-200 group-hover:bg-night" aria-hidden="true" />
              )}
              {duration}
              {ongoing && ` · ${t.ui.ongoing}`}
            </p>
          )}
        </div>
        <div>
          <h3 className="text-[1.25rem] leading-snug font-semibold tracking-[-0.02em]">
            {copy.title}
          </h3>
          <p className="mt-1 text-[0.9375rem] text-paper-2 transition-colors duration-200 group-hover:text-night/70">{copy.org}</p>
          <p className="mt-3 max-w-[62ch] text-[1rem] leading-[1.65] text-paper-2 transition-colors duration-200 group-hover:text-night/80">
            {copy.body}
          </p>
          {entry.tech && (
            <p className="mono-label mt-4 text-paper-3 transition-colors duration-200 group-hover:text-night/60">
              {entry.tech.join(" / ")}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

/** Trayectoria. The work list: one row per stage, newest first. */
const Trajectory: FC = () => {
  const { t } = useLocale();
  const entries = timeline.filter((entry) => t.path.entries[entry.id]);
  if (entries.length === 0) return null;

  return (
    <Section id="trayectoria" heading={t.path.heading} lead={t.path.lead}>
      <ol className="border-t border-line">
        {entries.map((entry) => (
          <Row key={entry.id} entry={entry} />
        ))}
      </ol>
    </Section>
  );
};

export default Trajectory;

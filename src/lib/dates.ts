import type { Locale } from "../content/types";

const MONTHS: Record<Locale, string[]> = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/**
 * Formats "2026-07" as "jul 2026" and a bare "2021" as "2021". Short runs read
 * wrong without the month: three of these roles lasted under six months.
 */
export function formatPeriod(value: string, locale: Locale, present: string) {
  if (value === "present") return present;
  const [year, month] = value.split("-");
  if (!month) return year;
  const name = MONTHS[locale][Number(month) - 1];
  return name ? `${name} ${year}` : year;
}

/** "ene 2026 — feb 2026" collapses to "ene — feb 2026" within one year. */
export function formatRange(
  from: string,
  to: string,
  locale: Locale,
  present: string,
) {
  const a = formatPeriod(from, locale, present);
  const b = formatPeriod(to, locale, present);
  if (a === b) return a;

  const sameYear =
    to !== "present" &&
    from.includes("-") &&
    to.includes("-") &&
    from.split("-")[0] === to.split("-")[0];

  return sameYear ? `${a.split(" ")[0]} — ${b}` : `${a} — ${b}`;
}

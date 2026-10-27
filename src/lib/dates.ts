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

function toMonths(value: string, now: Date, edge: "start" | "end") {
  if (value === "present") return now.getFullYear() * 12 + now.getMonth() + 1;
  const [year, month] = value.split("-").map(Number);
  if (!month) return year * 12 + (edge === "start" ? 0 : 12);
  return year * 12 + (edge === "start" ? month - 1 : month);
}

/**
 * Inclusive month count, or null when either end is a bare year: a length
 * measured from an unknown month would be a number nobody can stand behind.
 */
export function monthsBetween(from: string, to: string, now = new Date()) {
  const known = (v: string) => v === "present" || v.includes("-");
  if (!known(from) || !known(to)) return null;
  return toMonths(to, now, "end") - toMonths(from, now, "start");
}

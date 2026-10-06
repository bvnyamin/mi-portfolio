/** The registers on the sheet, in order. Ids double as scroll anchors. */
export const REGISTER_IDS = [
  "portada",
  "perfil",
  "trayectoria",
  "proyectos",
  "stack",
  "certificaciones",
  "contacto",
];

/** Counters read against the sheet, so adding a register updates every one. */
export const SHEET_COUNT = String(REGISTER_IDS.length).padStart(2, "0");

/** Zero-padded register number for display. */
export const regNo = (index: number) => String(index + 1).padStart(2, "0");

/**
 * The sheet's own margins. The left inset on large screens is the gutter the
 * fixed register rail occupies.
 */
export const SHEET =
  "mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:pr-12 lg:pl-[216px]";

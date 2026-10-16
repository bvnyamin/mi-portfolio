/**
 * Structural, language-independent facts.
 *
 * Copy for each of these ids lives in `es.ts` and `en.ts`. Nothing here is
 * invented: every field comes from the CV at
 * `rendercv_output/Nicolás_Villagrán_CV.pdf` or from the LinkedIn profile at
 * linkedin.com/in/nvillagran-ti.
 *
 * TO FILL IN — see README:
 *   · `repoUrl` / `demoUrl` on each project. Omit the key entirely when there
 *     is no public link; a "#" renders a button that goes nowhere.
 *   · `image` on each project: drop the file in `src/assets/projects/` and
 *     import it. Landscape, ~16:10, at least 1200px wide. Without one the row
 *     is designed to stand on its own.
 */

import copilotoConsulta480 from "../assets/projects/copiloto-consulta-480.webp";
import copilotoConsulta960 from "../assets/projects/copiloto-consulta-960.webp";
import copilotoConsultaJpg from "../assets/projects/copiloto-consulta-960.jpg";
import copilotoSql480 from "../assets/projects/copiloto-sql-480.webp";
import copilotoSql960 from "../assets/projects/copiloto-sql-960.webp";
import copilotoSqlJpg from "../assets/projects/copiloto-sql-960.jpg";

/**
 * One screenshot, served at two widths.
 *
 * Project screenshots ship in their own colour by Nicolás's explicit decision,
 * taken after being told it makes them the only hue on an otherwise neutral
 * page. The portrait stays graded and monochrome; this exception is scoped to
 * evidence of the work, where showing the real interface won the argument.
 */
export type ProjectShot = {
  small: string;
  large: string;
  fallback: string;
};

/** A project can expose several repositories; each is named for what it is. */
export type ProjectLinkKind = "code" | "backend" | "frontend" | "demo";

export type ProjectLink = {
  kind: ProjectLinkKind;
  url: string;
};

export type Project = {
  id: string;
  /** Display year or range. Shown verbatim. */
  year: string;
  stack: string[];
  links?: ProjectLink[];
  /**
   * Corporate work whose repository cannot be published. Renders a note that
   * says so, rather than the "in preparation" line, which would be untrue.
   */
  access?: "private";
  /** Alt text lives per locale, in `projectCopy[id].imageAlts`, same order. */
  shots?: ProjectShot[];
};

export type TimelineEntry = {
  id: string;
  /** "YYYY-MM" or "YYYY". "present" marks an ongoing entry. */
  from: string;
  to: string;
  kind: "study" | "work";
  /** Measured facts for the row, not adjectives. */
  tech?: string[];
};

export type Certification = {
  id: string;
  /** "YYYY-MM" or "YYYY". */
  date: string;
};

/**
 * Every record is written at the same gain. Varying it would read as a ranking
 * of the work, which is a claim this page has no basis to make.
 */
export const RECORD_MAGNITUDE = 0.8;

export const projects: Project[] = [
  {
    id: "copiloto",
    year: "2026",
    stack: ["Python", "Streamlit", "RAG", "NL2SQL", "Chroma", "PostgreSQL"],
    links: [
      { kind: "code", url: "https://github.com/bvnyamin/tesis-rag-f1" },
    ],
    shots: [
      {
        small: copilotoConsulta480,
        large: copilotoConsulta960,
        fallback: copilotoConsultaJpg,
      },
      { small: copilotoSql480, large: copilotoSql960, fallback: copilotoSqlJpg },
    ],
  },
  {
    id: "luminarias",
    year: "2026",
    stack: [
      "Python",
      "Flask",
      "Jinja",
      "PostgreSQL/PostGIS",
      "QGIS Server",
      "Leaflet",
      "Linux",
    ],
    access: "private",
  },
  {
    id: "restaurantes",
    year: "2025",
    stack: [
      "Next.js",
      "TypeScript",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      {
        kind: "frontend",
        url: "https://github.com/Proyecto-SDS/front-RestoMap",
      },
      { kind: "backend", url: "https://github.com/Proyecto-SDS/back-RestoMap" },
    ],
  },
  {
    id: "erp-ansimaq",
    year: "2025",
    stack: ["Python", "Streamlit", "Pandas"],
  },
  {
    id: "pilates",
    year: "2024",
    stack: ["PHP", "MySQL", "JavaScript", "Twilio API"],
  },
];

/** Newest first. */
export const timeline: TimelineEntry[] = [
  {
    id: "blue",
    from: "2026-07",
    to: "present",
    kind: "work",
    tech: ["Python", "APIs REST", "PostgreSQL"],
  },
  {
    id: "enel-fullstack",
    from: "2026-03",
    to: "2026-07",
    kind: "work",
    tech: [
      "Python",
      "Flask",
      "Jinja",
      "PostgreSQL/PostGIS",
      "Leaflet",
      "QGIS",
      "Linux",
    ],
  },
  {
    id: "enel-practica",
    from: "2026-01",
    to: "2026-02",
    kind: "work",
    tech: ["Flask", "PostgreSQL/PostGIS", "QGIS", "Leaflet"],
  },
  {
    id: "utem",
    from: "2021",
    to: "2026-10",
    kind: "study",
  },
];

/** Channel order on the sheet. The terms themselves are copy, per locale. */
export const skillChannelIds = [
  "languages",
  "backend",
  "frontend",
  "data",
  "platform",
];

/**
 * Newest first. `ia-generativa` carries a bare year because the month is not
 * recorded anywhere; set it to "2025-MM" to place it precisely.
 */
export const certifications: Certification[] = [
  { id: "anci", date: "2026-08" },
  { id: "redhat", date: "2026-07" },
  { id: "cisco", date: "2025-12" },
  { id: "ia-generativa", date: "2025" },
  { id: "aws", date: "2024-09" },
];

export const contact = {
  email: "nvillagran.vp@gmail.com",
  /** Display form; `phoneHref` is the dialable one. */
  phone: "+56 9 5314 5901",
  phoneHref: "tel:+56953145901",
  github: "https://github.com/bvnyamin",
  linkedin: "https://www.linkedin.com/in/nvillagran-ti/",
  cv: "/cv-nicolas-villagran.pdf",
} as const;

/** Santiago de Chile — the station this record was written at. */
export const station = {
  code: "SCL",
  lat: "-33.4489",
  lon: "-70.6693",
} as const;

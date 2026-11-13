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
import copilotoSql480 from "../assets/projects/copiloto-sql-480.webp";
import copilotoSql960 from "../assets/projects/copiloto-sql-960.webp";
import luminariasPoster480 from "../assets/projects/luminarias-poster-480.webp";
import luminariasPoster960 from "../assets/projects/luminarias-poster-960.webp";
import restomapMapa480 from "../assets/projects/restomap-mapa-480.webp";
import restomapMapa960 from "../assets/projects/restomap-mapa-960.webp";
import restomapGerente480 from "../assets/projects/restomap-gerente-480.webp";
import restomapGerente960 from "../assets/projects/restomap-gerente-960.webp";

/**
 * One screenshot, served at two widths.
 *
 * Project screenshots ship in their own colour by Nicolás's explicit decision,
 * taken after being told it makes them the only hue on an otherwise neutral
 * page. The exception is scoped to
 * evidence of the work, where showing the real interface won the argument.
 */
export type ProjectShot = {
  small: string;
  large: string;
  /** Intrinsic size of `large`: the frame keeps the screenshot's own shape. */
  width: number;
  height: number;
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

export const projects: Project[] = [
  {
    id: "copiloto",
    year: "2026",
    stack: ["Python", "Streamlit", "RAG", "NL2SQL", "Chroma", "PostgreSQL"],
    links: [
      { kind: "code", url: "https://github.com/bvnyamin/tesis-rag-f1" },
    ],
    shots: [
      { small: copilotoConsulta480, large: copilotoConsulta960, width: 960, height: 570 },
      { small: copilotoSql480, large: copilotoSql960, width: 960, height: 589 },
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
      "Docker",
    ],
    access: "private",
    // Stand-in until there are plain screenshots: a summary poster of the
    // platform that Nicolás supplied in Nov 2026.
    shots: [
      { small: luminariasPoster480, large: luminariasPoster960, width: 960, height: 640 },
    ],
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
    shots: [
      { small: restomapMapa480, large: restomapMapa960, width: 960, height: 427 },
      { small: restomapGerente480, large: restomapGerente960, width: 960, height: 430 },
    ],
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


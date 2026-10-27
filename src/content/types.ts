export type Locale = "es" | "en";

export type WorkLine = {
  id: string;
  name: string;
  body: string;
};

export type TimelineCopy = {
  title: string;
  org: string;
  body: string;
};

export type ChannelCopy = {
  name: string;
  items: string[];
};

export type CertCopy = {
  title: string;
  issuer: string;
};

export type ProjectCopy = {
  title: string;
  role: string;
  summary: string;
  /** Alt text per screenshot, in the same order as `shots` in data.ts. */
  imageAlts?: string[];
};

/** Prose with inline links: plain strings, and linked runs of text. */
export type RichText = Array<string | { text: string; href: string }>;

export type Dict = {
  htmlLang: string;

  meta: {
    title: string;
    description: string;
  };

  /** Interface words that belong to no single section. */
  ui: {
    role: string;
    open: string;
    menu: string;
    close: string;
    month: string;
    months: string;
    ongoing: string;
    fig: string;
  };

  /** Section names, in page order. */
  registers: string[];

  hero: {
    role: string;
    lead: string;
    record: string;
    cv: string;
    /** Two short mono lines under the name: what, and where. */
    tags: [string, string];
    /** The cover paragraph, with its inline links. */
    intro: RichText;
    /** Heading of the cover's short project list. */
    selected: string;
  };

  profile: {
    heading: string;
    lead: string;
    /** One idea per paragraph. A single slab does not survive a 30s scan. */
    body: RichText[];
    /** Short facts set beside the portrait. */
    facts: { label: string; value: string }[];
    linesHeading: string;
    lines: WorkLine[];
  };

  path: {
    heading: string;
    lead: string;
    present: string;
    /** Label for the stack line on a role row. */
    techLabel: string;
    entries: Record<string, TimelineCopy>;
  };

  projects: {
    heading: string;
    lead: string;
    /** Label per link kind, keyed by `ProjectLinkKind` in data.ts. */
    links: Record<string, string>;
    stackLabel: string;
    noLinks: string;
    /** Shown instead of `noLinks` when a project's code is not publishable. */
    privateCode: string;
  };

  instrument: {
    heading: string;
    lead: string;
    channels: Record<string, ChannelCopy>;
  };

  certifications: {
    heading: string;
    lead: string;
    items: Record<string, CertCopy>;
  };

  contact: {
    heading: string;
    lead: string;
    /** Margin-width labels for the persistent title block. */
    shortEmail: string;
    shortCv: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cv: string;
  };

  footer: {
    rights: string;
    built: string;
  };

  a11y: {
    skip: string;
    nav: string;
    locale: string;
    localeEs: string;
    localeEn: string;
    portrait: string;
  };
};

/** Project copy is keyed by the ids in `data.ts`. */
export type ProjectCopyMap = Record<string, ProjectCopy>;

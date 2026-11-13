import type { Dict, ProjectCopyMap } from "./types";

export const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Nicolás Villagrán — Full-Stack Developer",
    description:
      "Computer Engineer, UTEM Chile, graduated with highest distinction. Full-Stack developer: web platforms, backend services, geospatial data and applied AI on Linux.",
  },

  ui: {
    role: "Full-Stack Developer",
    open: "Open to opportunities",
    menu: "Menu",
    close: "Close",
    month: "month",
    months: "months",
    ongoing: "ongoing",
    fig: "Fig.",
  },

  registers: [
    "Cover",
    "Profile",
    "Experience",
    "Projects",
    "Stack",
    "Certifications",
    "Contact",
  ],

  hero: {
    role: "Computer Engineering · UTEM, Chile",
    lead: "Full-Stack developer. I build enterprise web platforms, with geospatial data and applied AI on Linux.",
    record: "See projects",
    cv: "Download CV",
    tags: [
      "Full-Stack Developer · Computer Engineer",
      "Full Stack @ BLUE Empresa · Santiago, Chile",
    ],
    intro: [
      "I build enterprise web platforms with ",
      { text: "geospatial data", href: "#proyectos" },
      " and ",
      { text: "applied AI", href: "https://github.com/bvnyamin/tesis-rag-f1" },
      " on Linux. I took ",
      { text: "Enel X's street-lighting system", href: "#trayectoria" },
      " from proof of concept to pre-production, and graduated from UTEM ",
      { text: "with highest distinction", href: "#trayectoria" },
      ".",
    ],
    selected: "Projects",
  },

  profile: {
    heading: "Profile",
    lead: "Computer Engineer from Universidad Tecnológica Metropolitana, Santiago, graduated with highest distinction. I work as a Full-Stack developer.",
    body: [
      ["I work the whole cycle: gather the requirement, model the data, build the application and hand it over tested."],
      [
        "My experience is in systems that actually operate. ",
        { text: "Georeferenced incident management", href: "#proyecto-luminarias" },
        " used by field crews, dispatch and contractors: I carried it from a proof of concept through to pre-production and handed it to an internal team.",
      ],
      [
        "Alongside that I work with applied AI. My final-year project was a ",
        { text: "copilot", href: "#proyecto-copiloto" },
        " that turns natural language into controlled database queries, with the emphasis on safe access.",
      ],
    ],
    facts: [
      { label: "Based in", value: "Santiago, Chile" },
      { label: "Education", value: "Computer Engineering, UTEM · Graduate" },
      { label: "Focus", value: "Backend · Full-Stack · Cloud · Applied AI" },
    ],
    linesHeading: "Lines of work",
    lines: [
      {
        id: "fullstack",
        name: "Full-Stack development",
        body: "Backend services in Python and Flask, interfaces in React and Next.js, REST APIs and modelling on PostgreSQL.",
      },
      {
        id: "geo",
        name: "Geospatial data",
        body: "Georeferenced systems in enterprise production with PostGIS, QGIS Server and Leaflet.",
      },
      {
        id: "ia",
        name: "Applied AI and platform",
        body: "RAG and NL2SQL for safe natural-language queries, deployed on Linux and Docker.",
      },
    ],
  },

  path: {
    heading: "Experience",
    lead: "Experience and education, and how long each stage lasted.",
    present: "Present",
    techLabel: "Stack",
    entries: {
      blue: {
        title: "Full Stack Developer",
        org: "BLUE EMPRESA consultoría y desarrollo · Remote",
        body: "Building modules for a due-diligence and supplier-evaluation platform: integrating public data sources, validating companies and their representatives, match analysis, and query traceability.",
      },
      "enel-fullstack": {
        title: "Full Stack Developer",
        org: "Enel X · Remote",
        body: "Took the street-lighting management system through to pre-production and handed it over to an internal team at the company.",
      },
      "enel-practica": {
        title: "Internship · ICT Computer Engineering",
        org: "Enel X · Las Condes, hybrid",
        body: "The proof of concept that system grew out of: multi-role workflow design, data modelling and validation with the business unit.",
      },
      utem: {
        title: "Computer Engineering",
        org: "Universidad Tecnológica Metropolitana (UTEM)",
        body: "Graduated with highest distinction. Final-year project: a conversational copilot built on RAG and NL2SQL, graded 7.0 out of 7.0.",
      },
    },
  },

  projects: {
    heading: "Projects",
    lead: "Systems I built end to end.",
    links: {
      code: "Code",
      backend: "Backend",
      frontend: "Frontend",
      demo: "Live",
    },
    stackLabel: "Stack",
    noLinks: "Repository in preparation",
    privateCode: "Private repository · internal system",
  },

  instrument: {
    heading: "Stack",
    lead: "Languages, tools and platforms I work with.",
    channels: {
      languages: {
        name: "Languages",
        items: ["Python", "JavaScript", "PHP", "C++"],
      },
      backend: {
        name: "Backend",
        items: ["Flask", "Node.js", "REST APIs", "Jinja"],
      },
      frontend: {
        name: "Frontend",
        items: ["React", "Next.js", "HTML", "CSS"],
      },
      data: {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "PostGIS", "Data modelling and SQL"],
      },
      platform: {
        name: "Platforms and tooling",
        items: [
          "Linux",
          "Docker",
          "Git",
          "QGIS",
          "QGIS Server",
          "Leaflet",
          "Streamlit",
          "AWS fundamentals",
        ],
      },
    },
  },

  certifications: {
    heading: "Certifications",
    lead: "Accredited training, most recent first.",
    items: {
      anci: {
        title: "Incident Response and Cybersecurity Taxonomy",
        issuer: "Agencia Nacional de Ciberseguridad (ANCI), Chile",
      },
      redhat: {
        title: "Red Hat System Administration I — RH124, RHEL 9.3",
        issuer: "Red Hat",
      },
      cisco: {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
      },
      "ia-generativa": {
        title: "Generative Artificial Intelligence",
        issuer: "BiblioRedes",
      },
      aws: {
        title: "AWS Academy Introduction to Cloud, semesters 1 and 2",
        issuer: "Amazon Web Services",
      },
    },
  },

  contact: {
    heading: "Contact",
    lead: "Open to roles in Backend, Full-Stack, Cloud and applied AI for enterprise systems. Write to me — I answer every email.",
    shortEmail: "Email",
    shortCv: "CV",
    email: "Send an email",
    phone: "Call by phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Download CV",
  },

  footer: {
    rights: "Personal portfolio",
    built: "Built with React, TypeScript and Vite",
  },

  a11y: {
    skip: "Skip to content",
    nav: "Sections",
    locale: "Language",
    localeEs: "Cambiar a español",
    localeEn: "Switch to English",
    portrait: "Portrait of Nicolás Villagrán.",
  },
};

/** Copy per project, keyed by the ids in `data.ts`. */
export const enProjects: ProjectCopyMap = {
  copiloto: {
    title: "Conversational copilot",
    role: "Final-year project · UTEM · Graded 7.0 / 7.0",
    summary:
      "A study of Retrieval-Augmented Generation for natural-language queries over structured data, applied to a Formula 1 dataset. It combines semantic retrieval in Chroma, SQL generation and a query against PostgreSQL, returning the answer together with the SQL that produced it and the rows that back it. Three comparable modes — full hybrid, SQL without RAG, and the model alone — measure what each component contributes.",
    imageAlts: [
      "The prototype's interface: a natural-language question field, an execution-mode selector between full hybrid, SQL without RAG and the model alone, and a control for the number of RAG fragments.",
      "The prototype's output: the generated SQL, joining results, races, drivers and constructors, with the table of rows returned by PostgreSQL below it.",
    ],
  },
  luminarias: {
    title: "Street-lighting management",
    role: "Enel X · internal platform",
    summary:
      "A georeferenced web system for managing faults in public street lighting, used across support, dispatch, contractor and field-crew workflows. Python and Flask backend with Jinja templates over PostgreSQL/PostGIS, and a cartographic layer built with QGIS Server and Leaflet, deployed on Linux. I carried it from a proof of concept replacing an internal platform through to pre-production, and handed it to a team at the company.",
  },
  restaurantes: {
    title: "RestoMap",
    role: "Team project · Software Systems Workshop, UTEM",
    summary:
      "An application for finding restaurants and bars on a map and managing venues and bookings. Flask backend with SQLAlchemy and Alembic migrations over PostgreSQL, Pydantic validation and Docker containers set up for a Cloud Run deployment; Next.js and TypeScript on the front.",
    imageAlts: [
      "RestoMap's public view: a map of Santiago with venue markers, filters by type (restaurant, restobar, bar) and a side list of venues with their rating and opening hours.",
      "RestoMap's manager panel: venue information, read-only details such as tax ID, type and address, and opening hours, with a side menu for staff, metrics, inventory, bookings and waiter, kitchen and bar panels.",
    ],
  },
  pilates: {
    title: "Pilates studio",
    role: "Frontend, backend and integration",
    summary:
      "Site with its own backend for managing clients and bookings, with automatic email and SMS notices through the Twilio API.",
  },
};

import type { Dict, ProjectCopyMap } from "./types";

export const es: Dict = {
  htmlLang: "es",
  meta: {
    title: "Nicolás Villagrán — Desarrollador Full-Stack",
    description:
      "Ingeniero en Informática UTEM, titulado con distinción máxima. Desarrollador Full-Stack: aplicaciones web, servicios backend, datos geoespaciales e IA aplicada sobre Linux.",
  },

  station: {
    component: "COMP. N-S",
    sheet: "REG.",
  },

  registers: [
    "Portada",
    "Perfil",
    "Trayectoria",
    "Proyectos",
    "Stack",
    "Certificaciones",
    "Contacto",
  ],

  hero: {
    role: "Ingeniería en Informática · UTEM",
    lead: "Desarrollador Full-Stack. Construyo plataformas web empresariales, con datos geoespaciales e IA aplicada sobre Linux.",
    record: "Ver el registro",
    cv: "Descargar CV",
    scroll: "Desplaza para avanzar el tambor",
  },

  profile: {
    heading: "Perfil",
    lead: "Ingeniero en Informática de la Universidad Tecnológica Metropolitana, titulado con distinción máxima. Trabajo como desarrollador Full-Stack.",
    body: [
      "Trabajo el ciclo completo: levanto el requerimiento, modelo los datos, construyo la aplicación y la entrego probada.",
      "Mi experiencia está en sistemas que operan de verdad. Gestión de incidencias georreferenciadas usada por equipos de terreno, despacho y contratistas: la llevé desde una prueba de concepto hasta preproducción y la transferí a un equipo interno.",
      "En paralelo trabajo con IA aplicada. Mi proyecto de título fue un copiloto que traduce lenguaje natural en consultas controladas sobre bases de datos, con el foco puesto en el acceso seguro.",
    ],
    facts: [
      { label: "Base", value: "Santiago, Chile" },
      { label: "Formación", value: "Ing. en Informática, UTEM · Titulado" },
      { label: "Enfoque", value: "Backend · Full-Stack · Cloud · IA aplicada" },
    ],
    linesHeading: "Líneas de trabajo",
    lines: [
      {
        id: "fullstack",
        name: "Desarrollo Full-Stack",
        body: "Servicios backend en Python y Flask, interfaces en React y Next.js, APIs REST y modelado sobre PostgreSQL.",
      },
      {
        id: "geo",
        name: "Datos geoespaciales",
        body: "Sistemas georreferenciados en producción empresarial con PostGIS, QGIS Server y Leaflet.",
      },
      {
        id: "ia",
        name: "IA aplicada y plataforma",
        body: "RAG y NL2SQL para consultas seguras en lenguaje natural, desplegado sobre Linux y Docker.",
      },
    ],
  },

  path: {
    heading: "Trayectoria",
    lead: "Experiencia y formación, en orden de registro.",
    present: "Actualidad",
    techLabel: "Stack",
    entries: {
      blue: {
        title: "Full Stack Developer",
        org: "BLUE EMPRESA consultoría y desarrollo · Remoto",
        body: "Desarrollo de módulos para una plataforma de Due Diligence y evaluación de proveedores: integración de fuentes públicas, validación de empresas y representantes, análisis de coincidencias y trazabilidad de consultas.",
      },
      "enel-fullstack": {
        title: "Full Stack Developer",
        org: "Enel X · Remoto",
        body: "Desarrollo del sistema de gestión de luminarias hasta preproducción, y su transferencia a un equipo interno de la compañía.",
      },
      "enel-practica": {
        title: "Práctica profesional · Ingeniería Informática ICT",
        org: "Enel X · Las Condes, híbrido",
        body: "Prueba de concepto que dio origen a ese sistema: diseño de flujos para múltiples roles, modelado de datos y validación con el área de negocio.",
      },
      utem: {
        title: "Ingeniería en Informática",
        org: "Universidad Tecnológica Metropolitana (UTEM)",
        body: "Titulado con distinción máxima. Proyecto de título: copiloto conversacional con RAG y NL2SQL, aprobado con nota 7,0.",
      },
    },
  },

  projects: {
    heading: "Proyectos",
    lead: "Sistemas que construí de principio a fin.",
    links: {
      code: "Código",
      backend: "Backend",
      frontend: "Frontend",
      demo: "Ver en vivo",
    },
    stackLabel: "Stack",
    noLinks: "Repositorio en preparación",
    privateCode: "Código privado · sistema interno",
  },

  instrument: {
    heading: "Stack",
    lead: "Lenguajes, herramientas y plataformas con las que trabajo.",
    channels: {
      languages: {
        name: "Lenguajes",
        items: ["Python", "JavaScript", "PHP", "C++"],
      },
      backend: {
        name: "Backend",
        items: ["Flask", "Node.js", "APIs REST", "Jinja"],
      },
      frontend: {
        name: "Frontend",
        items: ["React", "Next.js", "HTML", "CSS"],
      },
      data: {
        name: "Bases de datos",
        items: ["PostgreSQL", "MySQL", "PostGIS", "Modelado y consultas SQL"],
      },
      platform: {
        name: "Plataformas y herramientas",
        items: [
          "Linux",
          "Docker",
          "Git",
          "QGIS",
          "QGIS Server",
          "Leaflet",
          "Streamlit",
          "Fundamentos de AWS",
        ],
      },
    },
  },

  certifications: {
    heading: "Certificaciones",
    lead: "Formación acreditada, de la más reciente a la más antigua.",
    items: {
      anci: {
        title: "Respuesta a Incidentes y Taxonomía en Ciberseguridad",
        issuer: "Agencia Nacional de Ciberseguridad (ANCI)",
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
        title: "Inteligencia Artificial Generativa",
        issuer: "BiblioRedes",
      },
      aws: {
        title: "AWS Academy Introduction to Cloud, semestres 1 y 2",
        issuer: "Amazon Web Services",
      },
    },
  },

  contact: {
    heading: "Contacto",
    lead: "Abierto a oportunidades en desarrollo Backend, Full-Stack, Cloud e IA aplicada a sistemas empresariales. Escríbeme — respondo todos los correos.",
    shortEmail: "Correo",
    shortCv: "CV",
    email: "Escribir un correo",
    phone: "Llamar por teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Descargar CV",
  },

  footer: {
    rights: "Portafolio personal",
    built: "Construido con React, TypeScript y Vite",
  },

  a11y: {
    skip: "Saltar al contenido",
    nav: "Índice de registros",
    locale: "Idioma",
    localeEs: "Cambiar a español",
    localeEn: "Switch to English",
    trace: "Traza sísmica decorativa",
    heroTrace:
      "Registro sísmico: línea plana que entra en un evento de alta amplitud y decae en coda.",
  },
};

/** Copy per project, keyed by the ids in `data.ts`. */
export const esProjects: ProjectCopyMap = {
  copiloto: {
    title: "Copiloto conversacional",
    role: "Proyecto de título · UTEM · Nota 7,0",
    summary:
      "Estudio de Retrieval-Augmented Generation para consultas en lenguaje natural sobre datos estructurados, aplicado a un dataset de Fórmula 1. Combina recuperación semántica en Chroma, generación de SQL y consulta sobre PostgreSQL, devolviendo la respuesta junto con la SQL que la produjo y las filas que la sustentan. Incluye tres modos comparables — híbrido completo, SQL sin RAG y LLM puro — para medir qué aporta cada componente.",
    imageAlts: [
      "Interfaz del prototipo: campo de pregunta en lenguaje natural, selector de modo de ejecución entre híbrido completo, SQL sin RAG y LLM puro, y control de cantidad de fragmentos RAG.",
      "Salida del prototipo: la consulta SQL generada, con joins sobre resultados, carreras, pilotos y constructores, y debajo la tabla de resultados devuelta por PostgreSQL.",
    ],
  },
  luminarias: {
    title: "Gestión de luminarias",
    role: "Enel X · plataforma interna",
    summary:
      "Sistema web georreferenciado para la gestión de incidencias en luminarias de alumbrado público, usado en los flujos de atención, despacho, contratistas y equipos de terreno. Backend en Python y Flask con plantillas Jinja sobre PostgreSQL/PostGIS, y capa cartográfica con QGIS Server y Leaflet desplegada sobre Linux. Lo llevé desde una prueba de concepto que reemplazaba una plataforma interna hasta preproducción, y lo transferí a un equipo de la compañía.",
  },
  restaurantes: {
    title: "RestoMap",
    role: "Proyecto en equipo · Talleres de Sistemas de Software, UTEM",
    summary:
      "Aplicación para buscar restobares sobre un mapa y gestionar locales y reservas. Backend en Flask con SQLAlchemy y migraciones Alembic sobre PostgreSQL, validación con Pydantic y contenedores Docker preparados para desplegar en Cloud Run; frontend en Next.js con TypeScript.",
  },
  "erp-ansimaq": {
    title: "ERP Ansimaq",
    role: "Diseño y desarrollo completo",
    summary:
      "Módulos de inventario y proveedores para una empresa de maquinaria, con automatización de procesos y paneles interactivos para seguir el estado del negocio sin pasar por planillas sueltas.",
  },
  pilates: {
    title: "Gimnasio de Pilates",
    role: "Frontend, backend e integración",
    summary:
      "Sitio con backend propio para administrar clientes y reservas, con avisos automáticos por correo y mensaje de texto a través de la API de Twilio.",
  },
};

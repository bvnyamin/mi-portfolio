export type Project = {
  id: string;
  title: string;
  stack: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "toma-horario",
    title: "Sistema de Toma de Horario Universitario",
    stack: "Matlab · MySQL",
    description:
      "Sistema basado en datos estadísticos para optimizar la asignación de horarios universitarios, integrando análisis y conexión a base de datos.",
    tags: ["Optimización", "Análisis de datos"],
    demoUrl: "#", // TODO: link demo si existe
    codeUrl: "#", // TODO: link repo si existe
  },
  {
    id: "pilates",
    title: "Página Web para Gimnasio de Pilates",
    stack: "HTML · CSS · JS · PHP · MySQL",
    description:
      "Sitio web con backend en PHP y base de datos para gestión de clientes, incluyendo notificaciones vía número y correo utilizando API de Twilio.",
    tags: ["Desarrollo web", "Integración API", "Backend"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "erp-ansimaq",
    title: "ERP para Empresa Ansimaq",
    stack: "Python · Streamlit",
    description:
      "Sistema ERP con paneles de visualización y módulos de gestión de datos para apoyar procesos operativos de la empresa.",
    tags: ["ERP", "Dashboard", "Python"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

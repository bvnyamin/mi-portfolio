import type { FC } from "react";
import { motion } from "framer-motion";
import { Globe, Shield, FileCheck } from "lucide-react";

const Focus: FC = () => {
  const cards = [
    {
      title: "Desarrollo Web",
      icon: <Globe className="w-8 h-8 text-sky-400" />,
      description:
        "Experiencia en frontend y backend para aplicaciones web, creando interfaces limpias y funcionales conectadas a bases de datos.",
      bullets: [
        "React, Vite, Tailwind CSS",
        "PHP, C++, Python (en formación)",
        "Integración con APIs y bases de datos",
      ],
    },
    {
      title: "Ciberseguridad",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      description:
        "Formación en seguridad informática, con interés en fortalecer sistemas desde la perspectiva de desarrollo seguro.",
      bullets: [
        "Fundamentos de seguridad de la información",
        "Buenas prácticas de desarrollo seguro",
        "Interés en hardening, análisis de riesgos y respuesta a incidentes",
      ],
    },
    {
      title: "Auditoría TI",
      icon: <FileCheck className="w-8 h-8 text-purple-400" />,
      description:
        "Enfoque en evaluación de controles, riesgos y cumplimiento, aplicando marcos y estándares de la industria.",
      bullets: [
        "Conocimiento de marcos e ISO relacionados a TI",
        "Orientación a documentación y trazabilidad",
        "Visión analítica para identificar mejoras",
      ],
    },
  ];

  return (
    <section
      id="focus"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-800/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 inline-block">
          Enfoque profesional
        </h2>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
          Busco desarrollar mi carrera en un punto intermedio entre desarrollo
          de software, ciberseguridad y auditoría TI, aportando tanto en la
          construcción de soluciones como en su revisión y mejora continua.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="mb-4 p-3 rounded-xl bg-slate-800/50 w-fit group-hover:bg-slate-800 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                {card.description}
              </p>

              <ul className="space-y-2">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-xs text-slate-500"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-sky-500/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Focus;

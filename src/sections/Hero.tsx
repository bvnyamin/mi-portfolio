import type { FC } from "react";
import profileImage from "../assets/profile.jpg";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-5"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
          Desarrollo web · Ciberseguridad · Auditoría TI
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hola, soy <span className="text-sky-400">Nicolás Villagrán</span>.{" "}
          <br />
          Construyo soluciones seguras y bien diseñadas.
        </h1>
        <p className="text-slate-300 max-w-xl">
          Estudiante de Ingeniería en Informática enfocado en desarrollo web
          (frontend y backend), con interés profesional en ciberseguridad y
          auditoría de sistemas. Me gusta combinar código limpio, buenas
          prácticas y enfoque en seguridad.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Ver proyectos
          </a>

          {/* Botón que DESCARGA el CV */}
          <a
            href="/cv-nicolas-villagran.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 hover:border-sky-500 text-slate-200 hover:text-sky-400 transition"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/50">
            React
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/50">
            TypeScript
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/50">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/50">
            Vite
          </span>
        </div>
      </motion.div>

      {/* Foto + card “glass” */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-64 h-72 rounded-3xl bg-gradient-to-br from-sky-500/30 via-slate-900 to-purple-500/30 border border-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.4)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(168,85,247,0.3),transparent_55%)]" />
          <div className="relative h-full flex flex-col justify-between p-4">
            <div className="flex justify-center">
              <img
                src={profileImage}
                alt="Foto de Nicolás Villagrán"
                className="w-24 h-24 rounded-full border-2 border-slate-100/80 object-cover shadow-lg"
              />
            </div>
            <div className="space-y-1 mt-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200/80">
                Disponible para práctica profesional
              </p>
              <p className="text-xl font-semibold">Ingeniería en Informática</p>
              <p className="text-sm text-slate-200/80">
                Desarrollo web · Seguridad informática · Auditoría TI.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

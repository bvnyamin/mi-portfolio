import type { FC } from "react";

const About: FC = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800/70"
    >
      <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Sobre mí</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-500 via-emerald-400 to-purple-500 rounded-full mb-6" />

        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Soy estudiante de Ingeniería en Informática en la Universidad
          Tecnológica Metropolitana (UTEM), en proceso de titulación. Tengo
          experiencia en desarrollo de aplicaciones web, sistemas ERP y
          proyectos académicos de análisis y optimización. Me interesa trabajar
          en equipos donde pueda aportar en desarrollo, automatización y
          seguridad de los sistemas.
        </p>
      </div>
    </section>
  );
};

export default About;

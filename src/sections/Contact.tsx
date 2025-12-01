import type { FC } from "react";

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.3 8.1h4.4V23H.3V8.1zM8.34 8.1h4.22v2.03h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.96 5.32 6.8V23h-4.4v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.34V8.1z"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.99 3.24 9.22 7.73 10.71.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.14.68-3.8-1.35-3.8-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.51-.29-5.15-1.25-5.15-5.56 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.16a10.77 10.77 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.59.23 2.76.11 3.05.73.79 1.17 1.8 1.17 3.03 0 4.32-2.64 5.26-5.16 5.54.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.79.55 4.48-1.49 7.72-5.72 7.72-10.71C23.25 5.48 18.27.5 12 .5Z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l9-6.99V6H3zm0 12h18V9l-9 7L3 9v9z"
    />
  </svg>
);

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800/70"
    >
      <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contacto</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 via-sky-500 to-purple-500 rounded-full mb-6" />

        <p className="text-slate-300 mb-6 max-w-xl">
          Si te interesa mi perfil para una práctica profesional, un puesto
          junior o colaboración en proyectos, puedes escribirme directamente por
          correo o a través de mis redes.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/nicolas-villagran-pe%C3%B1a-339103332"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-900 text-sm font-medium hover:bg-sky-100 hover:text-sky-700 transition"
          >
            <LinkedinIcon />
            LinkedIn
          </a>

          <a
            href="https://github.com/bvnyamin" // cambia por tu user real
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-900 text-sm font-medium hover:bg-slate-200 transition"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href="mailto:nvillagran.vp@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-900 text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition"
          >
            <MailIcon />
            nvillagran.vp@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

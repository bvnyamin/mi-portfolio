import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#hero"
          className="font-semibold tracking-tight text-lg hover:opacity-80 transition"
        >
          &lt;Nicolas.dev /&gt;
        </a>
        <ul className="hidden sm:flex gap-6 text-sm text-slate-300">
          <li>
            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#focus" className="hover:text-white transition">
              Enfoque
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-white transition">
              Certificaciones
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-sky-500 hover:text-sky-400 transition"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

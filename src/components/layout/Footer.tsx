import type { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 flex justify-between gap-3 flex-col sm:flex-row">
        <p>© {year} Nicolás Villagrán — Portfolio.</p>
        <p>Desarrollo web · Ciberseguridad · Auditoría TI</p>
      </div>
    </footer>
  );
};

export default Footer;

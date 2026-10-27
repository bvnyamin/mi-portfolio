import type { FC } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "../../i18n/context";
import { useActiveSection } from "../../hooks/useActiveSection";

/** Sections listed in the index, in page order, with their name's index. */
const INDEX = [
  { id: "perfil", name: 1 },
  { id: "trayectoria", name: 2 },
  { id: "proyectos", name: 3 },
  { id: "stack", name: 4 },
  { id: "certificaciones", name: 5 },
  { id: "contacto", name: 6 },
];
const IDS = INDEX.map((item) => item.id);

/**
 * The page index, stuck to the left column once the cover has scrolled away.
 * The section being read is set in full ink with a dash that draws out to
 * mark it; the rest sit a step quieter. Sticky positioning and one observer:
 * nothing here runs on scroll.
 */
const Sidebar: FC = () => {
  const { t } = useLocale();
  const active = useActiveSection(IDS);

  return (
    <aside className="hidden lg:block">
      <nav aria-label={t.a11y.nav} className="sticky top-24">
        <ul className="space-y-1">
          {INDEX.map((item) => {
            const current = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "true" : undefined}
                  className={`group mono-label flex items-center gap-3 py-1.5 transition-colors duration-300 ${
                    current ? "text-paper" : "text-paper-3 hover:text-paper"
                  }`}
                >
                  <span
                    className={`block h-px origin-left bg-current transition-[width] duration-500 ease-[var(--ease-out)] ${
                      current ? "w-6" : "w-2 group-hover:w-4"
                    }`}
                    aria-hidden="true"
                  />
                  {t.registers[item.name]}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#portada"
          className="group mono-label mt-8 inline-flex items-center gap-2 text-paper-3 transition-colors duration-300 hover:text-paper"
        >
          <ArrowUp
            className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
          {t.registers[0]}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

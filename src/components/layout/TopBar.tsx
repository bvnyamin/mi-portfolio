import { useEffect, useState } from "react";
import type { FC } from "react";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "framer-motion";
import { useLocale } from "../../i18n/context";
import { useActiveSection } from "../../hooks/useActiveSection";
import { contact } from "../../content/data";
import { REGISTER_IDS, SHEET_COUNT, regNo } from "../../lib/sheet";
import LocaleSwitch from "./LocaleSwitch";

/**
 * Narrow-screen chrome. The rail does not fit beside the sheet on a phone, so
 * the index moves into a drawer and the drum position stays legible as the
 * counter plus the hairline running under the bar.
 */
const TopBar: FC = () => {
  const { t } = useLocale();
  const active = useActiveSection(REGISTER_IDS);
  const activeIndex = Math.max(0, REGISTER_IDS.indexOf(active));
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
      <div className="flex items-stretch justify-between bg-ink">
        <a
          href="#portada"
          className="flex items-center px-4 py-3.5 text-[0.8125rem] font-semibold tracking-[0.02em] text-bone"
        >
          N. Villagrán
        </a>

        <div className="flex items-stretch">
          <LocaleSwitch className="px-1" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="register-drawer"
            className="flex items-center gap-2 px-4 py-3.5"
          >
            <span className="data-label text-bone-2">
              {regNo(activeIndex)}
              <span className="text-bone-3"> / {SHEET_COUNT}</span>
            </span>
            <svg
              viewBox="0 0 12 8"
              className={`h-2 w-3 fill-bone-2 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 8 0 0h12z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Drum position. */}
      <div className="relative h-px bg-rule">
        <motion.div
          className="absolute inset-y-0 left-0 origin-left bg-bone"
          style={{ width: "100%", scaleX: reduced ? 1 : scrollYProgress }}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="register-drawer"
            aria-label={t.a11y.nav}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }
            }
            className="overflow-hidden border-b border-rule bg-ink"
          >
            <ul>
              {REGISTER_IDS.map((id, index) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className="flex items-center gap-4 px-4 py-3.5"
                    >
                      {/* Same weight story as the rail: the active mark is
                          three times the rule's thickness. */}
                      <span className="relative block h-[3px] w-6 shrink-0">
                        <span className="absolute inset-x-0 top-[1px] block h-px bg-rule" />
                        <span
                          className={`absolute top-0 left-0 block h-[3px] bg-bone transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                      <span
                        className={`data-label ${isActive ? "text-bone" : "text-bone-3"}`}
                      >
                        {regNo(index)}
                      </span>
                      <span
                        className={`field-label ${
                          isActive ? "text-bone" : "text-bone-2"
                        }`}
                      >
                        {t.registers[index]}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* The two outcomes the page exists for, reachable from any point
                on the sheet — the rail carries these on desktop. */}
            <div className="flex flex-col border-t border-rule py-2">
              <a
                href={`mailto:${contact.email}`}
                onClick={() => setOpen(false)}
                className="field-label px-4 py-3.5 text-bone"
              >
                {t.contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="field-label px-4 py-3.5 text-bone-2"
              >
                {t.contact.github}
              </a>
              <a
                href={contact.cv}
                download
                onClick={() => setOpen(false)}
                className="field-label px-4 py-3.5 text-bone-2"
              >
                {t.contact.cv}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;

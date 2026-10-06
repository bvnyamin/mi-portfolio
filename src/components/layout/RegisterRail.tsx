import type { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "../../i18n/context";
import { useActiveSection } from "../../hooks/useActiveSection";
import { REGISTER_IDS, regNo } from "../../lib/sheet";
import { contact } from "../../content/data";

/**
 * The sheet index pinned in the margin, with the title block at its foot.
 *
 * The rail is anchored to the same centred container as the sheet rather than
 * to the viewport edge: `left-0` would widen the gap with every extra pixel of
 * window and strand the index away from the margin it belongs to.
 *
 * The two outcomes this page exists for — write to him, open a repo — live here
 * as well as at the end of the record, so neither depends on reaching the foot
 * of the sheet.
 */
const RegisterRail: FC = () => {
  const { t } = useLocale();
  const active = useActiveSection(REGISTER_IDS);
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="pointer-events-auto w-fit">
          <nav aria-label={t.a11y.nav}>
            <ul className="flex flex-col">
              {REGISTER_IDS.map((id, index) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center gap-3 py-2.5"
                    >
                      {/* The pen. Weight carries the state — the active mark is
                          three times the rule's thickness — and the value shift
                          only follows it. */}
                      <span className="relative block h-[3px] w-7 shrink-0">
                        <span className="absolute inset-x-0 top-[1px] block h-px bg-rule" />
                        <motion.span
                          className="absolute top-0 left-0 block h-[3px] bg-bone"
                          initial={false}
                          animate={{ width: isActive ? "100%" : "0%" }}
                          transition={
                            reduced
                              ? { duration: 0 }
                              : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                          }
                        />
                      </span>

                      <span
                        className={`data-label transition-colors duration-300 ${
                          isActive
                            ? "text-bone"
                            : "text-bone-3 group-hover:text-bone-2"
                        }`}
                      >
                        {regNo(index)}
                      </span>

                      <span
                        className={`field-label text-[0.6875rem] transition-colors duration-300 ${
                          isActive
                            ? "text-bone"
                            : "text-bone-3 group-hover:text-bone-2"
                        }`}
                      >
                        {t.registers[index]}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 flex w-fit flex-col border-t border-rule pt-3">
            <a
              href={`mailto:${contact.email}`}
              className="field-label py-2 font-semibold text-bone transition-colors duration-300 hover:text-bone-2"
            >
              {t.contact.shortEmail}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="field-label py-2 text-bone-2 transition-colors duration-300 hover:text-bone"
            >
              {t.contact.github}
            </a>
            <a
              href={contact.cv}
              download
              className="field-label py-2 text-bone-2 transition-colors duration-300 hover:text-bone"
            >
              {t.contact.shortCv}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRail;

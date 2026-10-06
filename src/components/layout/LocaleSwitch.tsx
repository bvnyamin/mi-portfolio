import type { FC } from "react";
import { useLocale } from "../../i18n/context";
import type { Locale } from "../../content/types";

const OPTIONS: Locale[] = ["es", "en"];

/**
 * Written as a component selector — the control that picks which axis of the
 * instrument you are reading. The active channel takes the full-weight rule;
 * the inactive one keeps the hairline. State lives in the geometry.
 */
const LocaleSwitch: FC<{ className?: string }> = ({ className }) => {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 ${className ?? ""}`}
      role="group"
      aria-label={t.a11y.locale}
    >
      {OPTIONS.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={active}
            aria-label={option === "es" ? t.a11y.localeEs : t.a11y.localeEn}
            className={`data-label relative px-3 py-3.5 transition-colors duration-300 ${
              active ? "text-bone" : "text-bone-3 hover:text-bone-2"
            }`}
          >
            {option}
            <span
              className={`absolute inset-x-2.5 bottom-2.5 transition-all duration-300 ${
                active ? "h-[3px] bg-bone" : "h-px bg-rule"
              }`}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
};

export default LocaleSwitch;

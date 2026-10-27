import { useEffect, useState } from "react";
import type { FC } from "react";
import { useLocale } from "../../i18n/context";
import { contact } from "../../content/data";

/**
 * The page's only fixed element: the mark, the language, and the way to
 * write. Transparent over the cover; past it, it takes the page's own black
 * so nothing reads through it. No blur — a solid fill costs nothing to draw.
 * The scroll listener only flips state when the threshold is crossed.
 */
const Header: FC = () => {
  const { t, locale, setLocale } = useLocale();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setSolid((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-night" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#portada"
          className="font-mono text-[0.9375rem] font-semibold tracking-[-0.02em]"
          aria-label="Nicolás Villagrán"
        >
          nv<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-5">
          <div className="mono-label flex items-center gap-1" role="group" aria-label={t.a11y.locale}>
            {(["es", "en"] as const).map((option, i) => (
              <span key={option} className="flex items-center gap-1">
                {i > 0 && <span className="text-paper-3" aria-hidden="true">/</span>}
                <button
                  type="button"
                  onClick={() => setLocale(option)}
                  aria-pressed={locale === option}
                  aria-label={option === "es" ? t.a11y.localeEs : t.a11y.localeEn}
                  className={`px-1 py-2 transition-colors duration-300 ${
                    locale === option ? "text-paper" : "text-paper-3 hover:text-paper"
                  }`}
                >
                  {option}
                </button>
              </span>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="mono-label rounded-full bg-paper px-4 py-1.5 text-night transition-colors duration-300 hover:bg-accent"
          >
            {t.contact.shortEmail}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

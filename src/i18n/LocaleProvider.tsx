import { useCallback, useEffect, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import type { Locale } from "../content/types";
import { es, esProjects } from "../content/es";
import { en, enProjects } from "../content/en";
import { LocaleContext, STORAGE_KEY, readInitialLocale } from "./context";

const dictionaries = {
  es: { t: es, projectCopy: esProjects },
  en: { t: en, projectCopy: enProjects },
} as const;

const LocaleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable: the choice still applies for this visit.
    }
  }, []);

  const { t, projectCopy } = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(
    () => ({ locale, setLocale, t, projectCopy }),
    [locale, setLocale, t, projectCopy],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;

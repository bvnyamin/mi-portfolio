import { createContext, useContext } from "react";
import type { Dict, Locale, ProjectCopyMap } from "../content/types";

export type LocaleValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dict;
  projectCopy: ProjectCopyMap;
};

export const LocaleContext = createContext<LocaleValue | null>(null);

export function useLocale(): LocaleValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside <LocaleProvider>");
  return value;
}

export const STORAGE_KEY = "nv.locale";

export function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // Private mode or blocked storage: fall through to the browser hint.
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

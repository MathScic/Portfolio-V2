"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "../data/translations";
import type { Lang, Translations } from "../data/translations";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  t: translations.fr,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "fr" || saved === "en") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((current) => {
      const next = current === "fr" ? "en" : "fr";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useT = () => useContext(LanguageContext);

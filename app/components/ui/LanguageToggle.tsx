"use client";

import { useT } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useT();

  return (
    <button
      onClick={toggle}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-white/70 px-3 text-xs font-semibold text-foreground/70 transition hover:bg-white hover:text-foreground dark:bg-white/10 dark:hover:bg-white/20"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}

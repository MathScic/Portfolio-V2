"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import LanguageToggle from "./ui/LanguageToggle";
import { useT } from "../context/LanguageContext";

export function MobileHeader() {
  const pathname = usePathname();
  const { t } = useT();
  const links = t.nav.links;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const sync = () => {
      if (pathname !== "/") return setActive(pathname);
      const h = window.location.hash;
      setActive(h && links.some((l) => l.href === h) ? h : "/");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname, links]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="fixed right-4 top-[31px] z-50 lg:hidden">
        <motion.button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 shadow-sm backdrop-blur-md dark:bg-card/80"
        >
          <span className="text-lg leading-none">☰</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              aria-label="Fermer le menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
              className="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-xl dark:bg-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Navigation</span>
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                  <motion.button
                    onClick={() => setOpen(false)}
                    whileTap={{ scale: 0.92 }}
                    className="rounded-full px-3 py-2 text-sm hover:bg-muted"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>

              <nav className="space-y-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => { setActive(l.href); setOpen(false); }}
                    className={[
                      "block rounded-xl px-4 py-3 text-sm transition",
                      active === l.href
                        ? "bg-primary/15 font-semibold text-foreground"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

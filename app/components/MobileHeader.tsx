"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function MobileHeader() {
  const pathname = usePathname();
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
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Burger + Contact - MOBILE ONLY */}
      <div className="fixed top-3 inset-x-4 z-50 flex items-center justify-between lg:hidden">
        {/* Burger - GAUCHE */}
        <motion.button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 shadow-sm backdrop-blur-md"
        >
          <span className="text-lg leading-none">☰</span>
        </motion.button>
      </div>

      {/* Drawer */}
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
            {/* Overlay */}
            <motion.button
              aria-label="Fermer le menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />

            {/* Panel - depuis GAUCHE maintenant */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
              className="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Navigation</span>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.92 }}
                  className="rounded-full px-3 py-2 text-sm hover:bg-muted"
                >
                  ✕
                </motion.button>
              </div>

              <nav className="space-y-2">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => {
                        setActive(l.href);
                        setOpen(false);
                      }}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm transition",
                        isActive
                          ? "bg-primary/15 font-semibold text-foreground"
                          : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

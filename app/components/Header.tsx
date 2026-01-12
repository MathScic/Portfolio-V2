"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const measure = () => {
    const ul = ulRef.current;
    if (!ul) return;
    const a = ul.querySelector<HTMLAnchorElement>(`a[data-key="${active}"]`);
    if (!a) return;
    const ur = ul.getBoundingClientRect();
    const ar = a.getBoundingClientRect();
    setPill({ left: ar.left - ur.left, width: ar.width });
  };

  useEffect(() => {
    const newActive = pathname !== "/" ? pathname : window.location.hash || "/";
    setActive(links.some((l) => l.href === newActive) ? newActive : "/");
  }, [pathname]);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      setActive(h && links.some((l) => l.href === h) ? h : "/");
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  useLayoutEffect(() => measure(), [active]);

  return (
    <>
      <header className="sticky top-2 z-50 mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Nav Desktop */}
        <nav className="mx-auto hidden w-fit rounded-full border border-border bg-white/70 px-2 py-2 shadow-sm backdrop-blur-md md:block">
          <ul ref={ulRef} className="relative flex items-center gap-1">
            <span
              className="absolute top-1/2 h-[30px] -translate-y-1/2 rounded-full bg-primary/15 transition-all duration-300"
              style={{ left: pill.left, width: pill.width }}
            />
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-key={l.href}
                  onClick={() => setActive(l.href)}
                  className={`relative z-10 flex h-[30px] items-center rounded-full px-3 text-[13px] leading-none transition-colors ${
                    active === l.href
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton Contact Desktop */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:inline-flex"
        >
          <Mail className="h-4 w-4" />
          Me contacter
        </Link>

        {/* Mail */}

        <Link href="/contact" className="ml-auto rounded-full bg-primary p-2.5 shadow-sm md:hidden">
          <Mail className="h-5 w-5 text-primary-foreground" />
        </Link>
      </header>
    </>
  );
}

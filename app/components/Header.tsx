"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import LanguageToggle from "./ui/LanguageToggle";
import { useT } from "../context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { t } = useT();
  const links = t.nav.links;

  const [hash, setHash] = useState("");
  const ulRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  // Derive active from pathname + hash without setState in effect
  const rawActive = pathname !== "/" ? pathname : hash || "/";
  const active = links.some((l) => l.href === rawActive) ? rawActive : "/";

  const measure = useCallback(() => {
    const ul = ulRef.current;
    if (!ul) return;
    const a = ul.querySelector<HTMLAnchorElement>(`a[data-key="${active}"]`);
    if (!a) return;
    const ur = ul.getBoundingClientRect();
    const ar = a.getBoundingClientRect();
    setPill({ left: ar.left - ur.left, width: ar.width });
  }, [active]);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useLayoutEffect(() => { measure(); }, [measure]);

  return (
    <header className="sticky top-2 z-50 flex items-center justify-between px-4 sm:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="Mathieu Scicluna" width={64} height={64} />
      </Link>

      {/* Nav Desktop */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 w-fit rounded-full border border-border bg-white/70 px-2 py-2 shadow-sm backdrop-blur-md dark:bg-card/80 md:block">
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
                onClick={() => setHash(l.href.startsWith("#") ? l.href : "")}
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

      {/* Actions Desktop */}
      <div className="hidden items-center gap-2 md:flex">
        <LanguageToggle />
        <ThemeToggle />
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          {t.nav.contactBtn}
        </Link>
      </div>

      {/* Mobile — mail icon */}
      <Link href="#contact" className="rounded-full bg-primary p-2.5 shadow-sm md:hidden">
        <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </Link>
    </header>
  );
}

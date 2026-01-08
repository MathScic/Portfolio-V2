"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState("/");
  const ulRef = useRef<HTMLUListElement | null>(null);
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
    if (pathname !== "/") return setActive(pathname);
    const h = window.location.hash;
    setActive(h && links.some((l) => l.href === h) ? h : "/");
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
    <header className="sticky top-2 z-50 mx-auto w-fit rounded-full border border-border bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="px-2 py-2">
        <ul
          ref={ulRef}
          className="relative hidden md:flex items-center gap-1 whitespace-nowrap flex-nowrap"
        >
          <span
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-primary/15 transition-all duration-300 ease-out"
            style={{ left: pill.left, width: pill.width }}
          />
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  data-key={l.href}
                  onClick={() => setActive(l.href)}
                  className={[
                    "relative z-10 rounded-full px-3 py-2 text-[13px] transition-colors",
                    "text-muted-foreground hover:text-foreground",
                    isActive ? "text-foreground font-semibold" : "",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

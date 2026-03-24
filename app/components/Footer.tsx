"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { useT } from "../context/LanguageContext";

const socialLinks = [
  { href: "mailto:scicluna.mathieu@hotmail.fr", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/in/mathieu-scicluna-8346482ba/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/MathScic", icon: Github, label: "GitHub" },
];

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-border bg-white/70 backdrop-blur-md dark:bg-card/80">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Mathieu Scicluna</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-3 md:text-center">
            <h2 className="text-base font-semibold text-foreground">{t.footer.navTitle}</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-left md:text-right">
            <h2 className="text-base font-semibold text-foreground">{t.footer.contactTitle}</h2>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white p-2.5 text-muted-foreground transition hover:border-primary hover:text-primary dark:bg-white/10"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

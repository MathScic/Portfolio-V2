import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "mailto:scicluna.mathieu@hotmail.fr",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/mathieu-scicluna-8346482ba/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/MathScic",
    icon: Github,
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Présentation */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Mathieu Scicluna</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Développeur Full-Stack spécialisé dans la création d'interfaces modernes, performantes
              et centrées sur l'expérience utilisateur.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 md:text-center">
            <h2 className="text-base font-semibold text-foreground">Navigation</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Icônes uniquement */}
          <div className="space-y-4 text-left md:text-right">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white p-2.5 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mathieu Scicluna — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

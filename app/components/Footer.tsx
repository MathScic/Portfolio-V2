import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Présentation */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">Mathieu Scicluna</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Développeur Full-Stack spécialisé dans la création d’interfaces modernes, performantes
              et centrées sur l’expérience utilisateur.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 md:text-center">
            <h2 className="text-base font-semibold text-foreground">Navigation</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-left md:text-right">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@mathieuscicluna.fr"
                  className="inline-flex max-w-full items-start gap-3 text-muted-foreground transition hover:text-primary"
                >
                  <span className="mt-0.5 shrink-0">
                    <MailIcon />
                  </span>
                  <span className="break-all font-medium">contact@mathieuscicluna.fr</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground transition hover:text-primary"
                >
                  <LinkedInIcon />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground transition hover:text-primary"
                >
                  <GitHubIcon />
                  <span className="font-medium">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mathieu Scicluna — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

/* Icons */
function MailIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 7 8-7" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C19.5 8 24 10.1 24 16.3V24h-4v-6.9c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.7.5.5 5.9.5 12.4c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2C23.5 5.9 18.3.5 12 .5z" />
    </svg>
  );
}

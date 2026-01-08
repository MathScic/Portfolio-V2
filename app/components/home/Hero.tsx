import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-brand-foreground">Développeur Front-End • Next.js • UI propre</p>

        <div className="mt-4 h-1 w-12 rounded-full bg-brand-terracotta" />

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          Je conçois des interfaces <span className="text-brand-terracotta">modernes</span>, rapides
          et agréables à utiliser.
        </h1>

        <p className="mt-6 text-base leading-relaxed text-brand-muted">
          Portfolio de Mathieu Scicluna. Sélection de projets Next.js, design system, accessibilité
          et bonnes pratiques.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Projets
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl border border-border bg-white/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

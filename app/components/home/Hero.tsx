import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pt-4 pb-16 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Texte */}
        <div className="text-center lg:text-left">
          <p className="text-sm text-muted-foreground">Développeur Web Full-Stack – Normandie</p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Transformer <span className="text-primary">vos idées</span> en expériences web
            performantes.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            Je conçois des interfaces propres et performantes avec Next.js, Tailwind et une approche
            orientée produit : UX claire, rapidité, SEO et maintenabilité.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Me contacter
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-white"
            >
              Voir mes projets →
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[600px]">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration web dev SEO responsive"
              width={1200}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

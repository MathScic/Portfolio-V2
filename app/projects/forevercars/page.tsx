import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ForeverCars – Catalogue auto en ligne pour un client Loiret",
  description:
    "Étude de cas : site d'achat/revente de véhicules dans le Loiret. Stack : Next.js, Supabase, Sanity CMS, SEO.",
  openGraph: {
    title: "ForeverCars | Étude de cas – Mathieu Scicluna",
    description:
      "Catalogue dynamique gérable par le client sans développeur. Next.js + Sanity + Supabase.",
    images: [{ url: "/images/forevercars.png", width: 1200, height: 630 }],
  },
};

const stack = ["Next.js", "Supabase", "Sanity", "Tailwind CSS", "SEO"];

export default function ForeverCarsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm text-muted-foreground">Étude de cas · 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          ForeverCars <span className="text-primary">.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Site d&apos;achat et revente de véhicules dans le Loiret (45) — catalogue dynamique gérable
          directement par le client, sans intervention technique.
        </p>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://www.forevercars.fr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Voir le site →
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:bg-white"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="mb-16 overflow-hidden rounded-2xl border border-black/10">
        <Image
          src="/images/forevercars.png"
          alt="Aperçu du site ForeverCars"
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {/* Contexte */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Contexte client <span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Un particulier du Loiret (45) souhaitait créer une activité d&apos;achat/revente de
            véhicules d&apos;occasion et avait besoin d&apos;une vitrine professionnelle pour présenter son
            stock en ligne et rassurer les acheteurs potentiels.
          </p>
        </section>

        {/* Problématique */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Problématique <span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Le client avait besoin de mettre à jour son catalogue de véhicules régulièrement —
            ajouter des annonces, modifier les prix, retirer les véhicules vendus — sans dépendre
            d&apos;un développeur à chaque fois. La solution devait être simple à utiliser, même sans
            compétences techniques.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Solution technique <span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Mise en place de <strong className="text-foreground">Sanity CMS</strong> comme
            back-office headless : le client gère ses fiches véhicules (photos, prix, description,
            kilométrage) via une interface simple, sans code. Le front Next.js récupère les données
            en SSR pour un SEO optimal. Supabase est utilisé pour les fonctionnalités de gestion
            additionnelles.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Sanity Studio : ajout/modification/suppression de véhicules sans développeur",
              "SSR Next.js pour l'indexation Google de chaque fiche véhicule",
              "Optimisation images et Core Web Vitals",
              "Design responsive mobile-first",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Résultat */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Résultat <span className="text-primary">.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Le site est en production sur{" "}
            <a
              href="https://www.forevercars.fr"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              forevercars.fr
            </a>
            . Le client met à jour son catalogue de manière autonome, sans aucune intervention
            technique. Chaque fiche véhicule est indexée par Google grâce au rendu serveur.
          </p>
        </section>
      </div>
    </main>
  );
}

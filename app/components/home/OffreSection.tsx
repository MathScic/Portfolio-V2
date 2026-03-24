"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const offres = [
  {
    title: "Site vitrine clé en main",
    price: "À partir de 800 €",
    subtitle: "Devis gratuit — sans engagement",
    description: "Idéal pour les professionnels souhaitant établir leur présence en ligne avec un site moderne, visible et efficace.",
    inclus: [
      "Design sur mesure adapté à votre activité",
      "5 pages (Accueil, Services, Réalisations, À propos, Contact)",
      "Adapté mobile et tablette",
      "Formulaire de contact fonctionnel",
      "Optimisation Google (SEO de base)",
      "Nom de domaine + hébergement guidés",
      "Livraison en 2 à 3 semaines",
    ],
    exemples: [
      { label: "Trails des Vikings", href: "https://www.trail-des-vikings.fr" },
      { label: "InkSpire", href: "https://inkspire-drab.vercel.app" },
    ],
    highlight: true,
  },
  {
    title: "Refonte de site existant",
    price: "À partir de 600 €",
    subtitle: "Devis gratuit — sans engagement",
    description: "Pour les sites vieillissants ou sous-performants : refonte complète du design, de la structure et du référencement.",
    inclus: [
      "Reprise de votre contenu existant",
      "Nouveau design moderne et mobile-first",
      "Optimisation vitesse et Core Web Vitals",
      "Amélioration du référencement Google",
      "Formulaire de contact mis à jour",
      "Livraison en 2 à 4 semaines",
    ],
    exemples: [],
    highlight: false,
  },
  {
    title: "Application web sur mesure",
    price: "À partir de 1 500 €",
    subtitle: "Devis gratuit — sans engagement",
    description: "Développement d'une solution web adaptée à vos processus métier : réservations, catalogue produits, espace client.",
    inclus: [
      "Analyse de votre besoin métier",
      "Développement sur mesure (Next.js)",
      "Base de données et interface admin",
      "Connexion à vos outils existants",
      "Formation à l'utilisation",
      "Délai selon complexité du projet",
    ],
    exemples: [
      { label: "ForeverCars", href: "https://www.forevercars.fr" },
    ],
    highlight: false,
  },
  {
    title: "Maintenance & évolutions",
    price: "À partir de 50 €/mois",
    subtitle: "Sans engagement — résiliable à tout moment",
    description: "Garantissez la pérennité de votre site avec un suivi technique régulier, des mises à jour et un support disponible.",
    inclus: [
      "Mises à jour techniques régulières",
      "Modifications de contenu (textes, photos, prix)",
      "Monitoring et sauvegardes",
      "Support réactif par email ou téléphone",
      "Rapport mensuel de performance",
    ],
    exemples: [],
    highlight: false,
  },
];

export default function OffreSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="offre">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">Tarifs</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Mes <span className="text-primary">offres</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Chaque projet est unique. Ces tarifs sont indicatifs — je vous envoie un devis précis
          après un premier échange gratuit.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {offres.map((offre, index) => (
          <motion.div
            key={offre.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            className={`flex flex-col rounded-2xl border p-6 backdrop-blur-sm ${
              offre.highlight
                ? "border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
                : "border-black/10 bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            }`}
          >
            {offre.highlight && (
              <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                Le plus demandé
              </span>
            )}

            <h3 className="text-base font-semibold text-foreground">{offre.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{offre.description}</p>

            <div className="my-4 border-t border-black/8" />

            <p className="text-2xl font-bold text-foreground">{offre.price}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{offre.subtitle}</p>

            <div className="my-4 border-t border-black/8" />

            <ul className="flex-1 space-y-2.5">
              {offre.inclus.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            {offre.exemples.length > 0 && (
              <div className="mt-4 rounded-xl bg-black/[0.03] px-3 py-2.5">
                <p className="mb-1.5 text-[11px] font-medium text-muted-foreground">
                  Exemples de réalisations :
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {offre.exemples.map((ex) => (
                    <a
                      key={ex.label}
                      href={ex.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-primary underline-offset-2 hover:underline"
                    >
                      {ex.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="#contact"
              className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                offre.highlight
                  ? "bg-primary text-primary-foreground hover:scale-[1.02] hover:bg-primary/80 hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
                  : "border border-primary/30 bg-white/60 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              }`}
            >
              Demander un devis
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const inclus = [
  "Design sur mesure, adapté à votre activité",
  "5 pages (Accueil, Services, Réalisations, À propos, Contact)",
  "Adapté mobile et tablette",
  "Formulaire de contact fonctionnel",
  "Optimisation Google (SEO de base)",
  "Nom de domaine + hébergement guidés",
  "Livraison en 2 à 3 semaines",
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
          Mon <span className="text-primary">offre</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-12 max-w-lg rounded-2xl border border-black/10 bg-white/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.07)] backdrop-blur-sm"
      >
        {/* Titre + prix */}
        <h3 className="text-xl font-semibold text-foreground">Site vitrine professionnel</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-foreground">À partir de 600 €</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Devis gratuit — sans engagement</p>

        {/* Séparateur */}
        <div className="my-6 border-t border-black/8" />

        {/* Liste inclus */}
        <ul className="space-y-3">
          {inclus.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Demander un devis gratuit
        </Link>
      </motion.div>
    </section>
  );
}

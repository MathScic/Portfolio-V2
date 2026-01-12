"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Brief détaillé, analyse de vos besoins et audit technique. Définition des objectifs et du scope.",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Wireframes, maquettes UI/UX et architecture technique. Validation avec vous avant développement.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Code propre et testé, optimisations performance, intégration des fonctionnalités.",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Déploiement en production, formation si nécessaire, suivi post-livraison et maintenance.",
  },
];

export default function ProcessPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">Méthodologie</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Comment je <span className="text-primary">travaille</span>
        </h2>
      </motion.div>

      {/* Timeline - 90% width mobile */}
      <div className="mx-auto mt-16 w-[90%] sm:w-full sm:max-w-3xl">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative"
          >
            {/* Ligne de connexion (sauf dernière étape) */}
            {index < steps.length - 1 && (
              <div className="absolute left-[23px] top-[60px] h-full w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
            )}

            {/* Card étape */}
            <div className="relative flex gap-6 pb-12">
              {/* Numéro */}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-4 ring-white">
                {step.number}
              </div>

              {/* Contenu */}
              <div className="flex-1 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/80">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useT } from "../../context/LanguageContext";

const OFFRES_STATIC = [
  {
    highlight: true,
    exemples: [
      { label: "Trails des Vikings", href: "https://www.trail-des-vikings.fr" },
      { label: "InkSpire", href: "https://inkspire-drab.vercel.app" },
    ],
  },
  { highlight: false, exemples: [] },
  {
    highlight: false,
    exemples: [{ label: "ForeverCars", href: "https://www.forevercars.fr" }],
  },
  { highlight: false, exemples: [] },
];

export default function OffreSection() {
  const { t } = useT();
  const o = t.offre;
  const offres = o.offres.map((offre, i) => ({ ...offre, ...OFFRES_STATIC[i] }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="offre">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">{o.label}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {o.title} <span className="text-primary">{o.titleAccent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{o.subtitle}</p>
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
                ? "border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:bg-card"
                : "border-black/10 bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-white/[0.05]"
            }`}
          >
            {offre.highlight && (
              <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                {o.highlight}
              </span>
            )}

            <h3 className="text-base font-semibold text-foreground">{offre.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{offre.description}</p>

            <div className="my-4 border-t border-black/8 dark:border-white/8" />

            <p className="text-2xl font-bold text-foreground">{offre.price}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{offre.subtitle}</p>

            <div className="my-4 border-t border-black/8 dark:border-white/8" />

            <ul className="flex-1 space-y-2.5">
              {offre.inclus.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            {offre.exemples.length > 0 && (
              <div className="mt-4 rounded-xl bg-black/[0.03] px-3 py-2.5 dark:bg-white/[0.05]">
                <p className="mb-1.5 text-[11px] font-medium text-muted-foreground">{o.examples}</p>
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
                  : "border border-primary/30 bg-white/60 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] dark:bg-white/[0.05]"
              }`}
            >
              {o.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

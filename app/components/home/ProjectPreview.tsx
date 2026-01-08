"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Filters from "../ui/Filters";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  externalUrl?: string;
  image: string;
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Next.js", label: "Next.js" },
  { id: "Vercel", label: "Vercel" },
  { id: "Supabase", label: "Supabase" },
  { id: "SEO", label: "SEO" },
];

const FEATURED: Project[] = [
  {
    title: "TaskPilot",
    description: "Gestion de tâches avec focus sécurité et bonnes pratiques",
    tags: ["Next.js", "Supabase", "RLS"],
    href: "/projects/taskpilot",
    externalUrl: "https://taskpilot-secure.vercel.app/",
    image: "/images/TaskPilot.png",
  },
  {
    title: "Trails des Vikings",
    description: "Site vitrine événementiel, contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "SEO", "Vercel"],
    href: "/projects/trails-des-vikings",
    externalUrl: "https://www.trail-des-vikings.fr",
    image: "/images/Trails-des-Vikings.png",
  },
  {
    title: "Inkspire Tatoo",
    description: "Site vitrine pour tatoueur (projet démo), Next.js + déploiement.",
    tags: ["Next.js", "Vercel"],
    href: "/projects/inkspire",
    externalUrl: "https://inkspire-drab.vercel.app",
    image: "/images/Inkspire-tatoo.png",
  },
];

const STAGGER = 0.08;
const TRANSITION = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

export default function ProjectsPreview() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? FEATURED : FEATURED.filter((p) => p.tags.includes(active));

  const getDesktopInitial = (idx: number) => {
    if (idx % 3 === 0) return { opacity: 0, x: -40, y: 0 };
    if (idx % 3 === 1) return { opacity: 0, x: 0, y: 24 };
    return { opacity: 0, x: 40, y: 0 };
  };

  const getMobileInitial = (idx: number) => ({
    opacity: 0,
    x: idx % 2 === 0 ? -40 : 40,
  });

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      {/* Header + Filters */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={TRANSITION}
        className="flex flex-col gap-8"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Sélection</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Projets récents <span className="text-primary">.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition hover:text-foreground"
          >
            Voir tous <span className="text-primary">→</span>
          </Link>
        </div>

        <Filters filters={FILTERS} active={active} onChange={setActive} />
      </motion.div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((p, idx) => (
          <div key={p.title}>
            {/* Mobile */}
            <motion.div
              className="md:hidden"
              initial={getMobileInitial(idx)}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...TRANSITION, delay: idx * STAGGER }}
            >
              <article className="rounded-2xl border border-border bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-36 w-full rounded-xl bg-black/5" />
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </article>
            </motion.div>

            {/* Desktop */}
            <motion.div
              className="hidden md:block"
              initial={getDesktopInitial(idx)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...TRANSITION, delay: idx * STAGGER }}
            >
              <article className="rounded-2xl border border-border bg-white/50 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-40 w-full rounded-xl bg-black/5" />
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </article>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-white/60 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
        >
          Voir tous les projets
        </Link>
      </div>
    </section>
  );
}

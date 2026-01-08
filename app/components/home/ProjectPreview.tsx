"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Filters from "../ui/Filters";
import ProjectCard from "../projects/ProjectCard";
import { PROJECTS } from "../../data/project";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Next.js", label: "Next.js" },
  { id: "Vercel", label: "Vercel" },
  { id: "Supabase", label: "Supabase" },
  { id: "SEO", label: "SEO" },
  { id: "Tailwind", label: "Tailwind" },
  { id: "RLS", label: "RLS" },
];

const STAGGER = 0.08;
const TRANSITION = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

export default function ProjectsPreview() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24" id="projects">
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
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...TRANSITION, delay: idx * STAGGER }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Aucun projet ne correspond à ce filtre.
        </p>
      ) : null}

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

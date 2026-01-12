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
    <section className="mx-auto max-w-7xl pb-24" id="projects">
      {/* Header - avec padding */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={TRANSITION}
        className="px-6"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Sélection</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Projets récents <span className="text-primary">.</span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Filters - SANS padding, pleine largeur */}
      <Filters filters={FILTERS} active={active} onChange={setActive} />

      {/* Grid - avec padding */}
      <div className="mt-8 grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <p className="mt-10 px-6 text-sm text-muted-foreground">
          Aucun projet ne correspond à ce filtre.
        </p>
      ) : null}
    </section>
  );
}

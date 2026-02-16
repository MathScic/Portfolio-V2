"use client";

import { useMemo, useState } from "react";
import Filters from "../ui/Filters";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/project";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Next.js", label: "Next.js" },
  { id: "Vercel", label: "Vercel" },
  { id: "Supabase", label: "Supabase" },
  { id: "SEO", label: "SEO" },
  { id: "Tailwind", label: "Tailwind" },
  { id: "RLS", label: "RLS" },
  { id: "Sanity", label: "Sanity" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PROJECTS.filter((p) => {
      const matchesFilter = active === "all" || p.tags.includes(active);
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return matchesFilter && matchesQuery;
    });
  }, [active, query]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <div>
        <p className="text-sm text-muted-foreground">Portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
          Tous les projets <span className="text-primary">.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Filtre par techno ou recherche un projet (titre, description, tags).
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un projet…"
          className="w-full rounded-2xl border border-black/10 bg-white/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
        />

        <Filters filters={FILTERS} active={active} onChange={setActive} />
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-black/10 bg-white/40 p-6 text-sm text-muted-foreground">
          Aucun projet ne correspond à ta recherche.
        </div>
      ) : null}
    </section>
  );
}

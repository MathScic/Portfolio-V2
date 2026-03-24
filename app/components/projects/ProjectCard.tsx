"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import type { Project } from "../../data/project";
import { useT } from "../../context/LanguageContext";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, tags, image, externalUrl, githubUrl, type, badgeLabel, contextLine } = project;
  const { t } = useT();

  return (
    <article className="group relative mx-auto flex h-full max-w-[380px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-brand-beige shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-card">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5 dark:bg-white/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            type === "client"
              ? "bg-primary text-primary-foreground"
              : "bg-white/80 text-foreground/70"
          }`}
        >
          {badgeLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{contextLine}</p>

        <div className="mt-3 min-h-[28px]">
          {tags?.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="rounded-full border border-black/10 bg-white/60 px-2 py-0.5 text-[11px] text-foreground/70 dark:border-white/10 dark:bg-white/[0.06]">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {t.projects.viewSite}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-white hover:text-foreground dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              {t.projects.viewCode}
            </a>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-brand-terracotta/30" />
    </article>
  );
}

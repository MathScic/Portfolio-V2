import Image from "next/image";
import type { Project } from "../../data/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { title, description, tags, image, externalUrl } = project;

  return (
    <article
      className="
  group relative mx-auto flex h-full max-w-[380px] flex-col
  overflow-hidden rounded-2xl
  border border-black/10
  bg-brand-beige
  shadow-[0_8px_20px_rgba(0,0,0,0.06)]
  transition
  hover:-translate-y-0.5
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
      </div>

      {/* Content (aligné) */}
      <div className="flex flex-1 flex-col p-5">
        {/* Titre */}
        <h3 className="text-base font-semibold text-brand-ink">{title}</h3>

        {/* Description (moins d’espace) */}
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-brand-ink/70">{description}</p>

        {/* Tags (zone plus compacte) */}
        <div className="mt-3 min-h-[28px]">
          {tags?.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/60 px-2 py-0.5 text-[11px] text-brand-ink/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bouton (plus proche du contenu) */}
        {externalUrl && (
          <div className="mt-auto pt-4">
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Voir le projet →
            </a>
          </div>
        )}
      </div>

      {/* Hover ring terracotta */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-brand-terracotta/30" />
    </article>
  );
}

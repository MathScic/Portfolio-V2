const STEPS = [
  { n: "01", title: "Découverte", desc: "Objectifs, besoins, cible. On clarifie le cadre." },
  { n: "02", title: "Structure", desc: "Arborescence, contenus, sections et priorités." },
  { n: "03", title: "Design", desc: "Direction visuelle + UI cohérente, responsive." },
  { n: "04", title: "Développement", desc: "Next.js + Tailwind, perf, SEO, accessibilité." },
  { n: "05", title: "Mise en ligne", desc: "Déploiement, vérifs, suivi et ajustements." },
];

export default function ProcessPreview() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20">
      <div>
        <p className="text-sm text-muted-foreground">Création</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Process clair, sans surprise <span className="text-primary">.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Une méthode simple : validation rapide, livrables propres, et un suivi fluide.
        </p>
      </div>

      <div className="">
        {STEPS.map((s) => (
          <article
            key={s.n}
            className="group relative flex h-full flex-col rounded-2xl border border-black/10 bg-white/40 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            <p className="text-xs font-semibold text-primary">{s.n}</p>
            <h3 className="mt-2 text-sm font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-primary/25" />
          </article>
        ))}
      </div>
    </section>
  );
}

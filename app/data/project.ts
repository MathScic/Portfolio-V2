export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  externalUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "taskpilot",
    title: "TaskPilot",
    description: "Gestion de tâches avec focus sécurité et bonnes pratiques",
    tags: ["Next.js", "Supabase", "RLS"],
    image: "/images/Task.png",
    externalUrl: "https://taskpilot-secure.vercel.app/",
  },
  {
    id: "trails-des-vikings",
    title: "Trails des Vikings",
    description: "Site vitrine événementiel, contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "SEO", "Vercel"],
    image: "/images/Trails.png",
    externalUrl: "https://www.trail-des-vikings.fr",
  },
  {
    id: "inkspire-tatoo",
    title: "InkSpire Tatoo",
    description:
      "Site vitrine pour un studio de tatouage (projet perso), contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "Vercel", "Tailwind"],
    image: "/images/Inkspire-tatoo.png",
    externalUrl: "https://inkspire-drab.vercel.app",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  externalUrl?: string;
  githubUrl?: string;
  type: "client" | "perso";
  badgeLabel: string;
  contextLine: string;
};

export const PROJECTS: Project[] = [
  {
    id: "taskpilot",
    title: "TaskPilot",
    description: "Gestion de tâches avec focus sécurité et bonnes pratiques",
    tags: ["Next.js", "Supabase", "RLS"],
    image: "/images/Task.png",
    externalUrl: "https://taskpilot-secure.vercel.app/",
    type: "perso",
    badgeLabel: "Projet perso — Gestion de tâches",
    contextLine: "Gestionnaire de tâches — projet personnel",
  },
  {
    id: "trails-des-vikings",
    title: "Trails des Vikings",
    description: "Site vitrine événementiel, contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "SEO", "Vercel"],
    image: "/images/Trails.png",
    externalUrl: "https://www.trail-des-vikings.fr",
    githubUrl: "https://github.com/MathScic/Trail-Brehal",
    type: "client",
    badgeLabel: "Client — Trail running",
    contextLine: "Site vitrine événementiel — Trail en Normandie, inscription et présentation du parcours",
  },
  {
    id: "inkspire-tatoo",
    title: "InkSpire Tatoo",
    description:
      "Site vitrine pour un studio de tatouage (projet perso), contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "Vercel", "Tailwind"],
    image: "/images/Inkspire-tatoo.png",
    externalUrl: "https://inkspire-drab.vercel.app",
    githubUrl: "https://github.com/MathScic/Inkspire",
    type: "perso",
    badgeLabel: "Projet perso — Tatouage",
    contextLine: "Site vitrine studio de tatouage — projet personnel",
  },
  {
    id: "forevercars",
    title: "ForeverCars",
    description: "Site d'achat et revente de véhicules dans le Loiret (45) pour un client.",
    tags: ["Next.js", "Supabase", "SEO", "Sanity"],
    image: "/images/forevercars.png",
    externalUrl: "https://www.forevercars.fr",
    githubUrl: "https://github.com/MathScic/ForeverCars-V2",
    type: "client",
    badgeLabel: "Client — Auto",
    contextLine: "Concessionnaire auto — vitrine de véhicules avec stock en temps réel",
  },
];

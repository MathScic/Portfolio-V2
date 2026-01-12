import { MetadataRoute } from "next";
import projectsData from "./data/projects-details.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mathieu-scicluna.fr"; // ← Remplacez par votre domaine

  // Pages statiques
  const routes = ["", "/services", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Pages projets dynamiques
  const projects = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projects];
}

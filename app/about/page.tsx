import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import AboutBio from "../components/about/AboutBio";
import Timeline from "../components/about/Timeline";
import TechStack from "../components/about/TechStack";
import AboutCTA from "../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mathieu Scicluna, développeur Fullstack Next.js basé en Normandie. Disponible en freelance pour vos projets web.",
  openGraph: {
    title: "À propos | Mathieu Scicluna",
    description:
      "Développeur Fullstack Next.js en Normandie, disponible en freelance. Découvrez mon parcours et mes compétences.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <AboutHero />
      <AboutBio />
      <Timeline />
      <TechStack />
      <AboutCTA />
    </main>
  );
}

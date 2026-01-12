import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import AboutBio from "../components/about/AboutBio";
import Timeline from "../components/about/Timeline";
import TechStack from "../components/about/TechStack";
import AboutCTA from "../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Développeur Web Full-Stack diplômé en 2024. Basé en Normandie, spécialisé en React/Next.js. Projets : Inkspire Tattoo, Trails des Vikings.",
  openGraph: {
    title: "À propos | Mathieu Scicluna",
    description: "Développeur passionné par les détails. Bac+2 Développeur Intégrateur Web.",
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

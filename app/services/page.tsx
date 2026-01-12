import type { Metadata } from "next";
import Services from "../components/services/Services";
import Reasons from "../components/services/Reasons";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web, UI/UX Design, SEO & Performance, Maintenance. Création de sites performants avec Next.js et React en Normandie.",
  openGraph: {
    title: "Services | Mathieu Scicluna",
    description: "Développement web moderne et performant en Normandie",
  },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="text-sm text-muted-foreground">Services</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Comment je peux vous <span className="text-primary">aider</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          De la conception à la mise en ligne, un accompagnement complet pour créer des sites
          performants et pensés pour vos objectifs.
        </p>
      </motion.div>

      <Services />
      <Reasons />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-foreground">Prêt à démarrer votre projet ?</h2>
        <p className="mt-4 text-base text-muted-foreground">
          Discutons de vos besoins et trouvons la solution idéale ensemble.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Me contacter
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </main>
  );
}

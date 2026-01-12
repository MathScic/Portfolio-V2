"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16"
    >
      {/* Photo */}
      <div className="mx-auto">
        <div className="relative h-48 w-48 overflow-hidden rounded-3xl border-2 border-primary/20 lg:h-64 lg:w-64">
          <Image
            src="/images/Profile.jpg"
            alt="Mathieu Scicluna"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Bio Text */}
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Basé en <strong className="text-foreground">Normandie</strong>, j'accompagne entreprises,
          artisans et porteurs de projets dans la création de leur présence digitale. Mon approche
          combine <strong className="text-foreground">rigueur technique</strong>, sens du design et
          orientation produit.
        </p>
        <p>
          Diplômé en 2024 d'un{" "}
          <strong className="text-foreground">Bac+2 Développeur Intégrateur Web</strong>, je me
          spécialise dans l'écosystème <strong className="text-foreground">React/Next.js</strong>{" "}
          pour créer des sites performants, accessibles et optimisés SEO.
        </p>
        <p>
          J'accorde une attention particulière à la{" "}
          <strong className="text-foreground">qualité du code</strong>, la maintenabilité des
          projets et l'expérience utilisateur finale. Chaque détail compte pour créer des produits
          web qui font la différence.
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20 text-center"
    >
      <p className="text-sm text-muted-foreground">À propos</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Développeur passionné par les <span className="text-primary">détails</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        De la conception à la mise en ligne, je crée des expériences web qui allient performance
        technique et design soigné.
      </p>
    </motion.div>
  );
}

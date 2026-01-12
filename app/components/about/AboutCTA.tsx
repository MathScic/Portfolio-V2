"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-2xl font-semibold text-foreground">Un projet en tête ?</h2>
      <p className="mt-4 text-base text-muted-foreground">
        Discutons-en autour d'un café (virtuel ou non) !
      </p>
      <Link
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Me contacter
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

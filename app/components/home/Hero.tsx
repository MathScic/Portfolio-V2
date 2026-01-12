"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:pt-24">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Texte */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Développeur Web Full-Stack – Normandie
          </motion.p>

          <motion.h1
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transformer <span className="text-primary">vos idées</span> en expériences web
            performantes.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Je conçois des interfaces propres et performantes avec Next.js, Tailwind et une approche
            orientée produit : UX claire, rapidité, SEO et maintenabilité.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Me contacter
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-white"
            >
              Voir mes projets →
            </Link>
          </motion.div>
        </motion.div>

        {/* Image - 90% width MOBILE uniquement */}
        <motion.div
          className="relative mx-auto w-[90%] sm:w-full sm:max-w-[520px] lg:max-w-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration web dev SEO responsive"
              width={1200}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

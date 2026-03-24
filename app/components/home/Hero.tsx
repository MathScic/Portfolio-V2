"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useT } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useT();
  const h = t.hero;

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:pt-24">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
            {h.label}
          </motion.p>

          <motion.h1
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {h.titlePart1}{" "}
            <span className="text-primary">{h.titleAccent}</span>{" "}
            {h.titlePart2}
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {h.cta1}
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:hover:bg-white/10"
            >
              {h.cta2}
            </Link>

            <a
              href="/images/CV – Mathieu Scicluna · Développeur Fullstack.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-5 py-3 text-sm font-medium text-foreground/50 transition hover:text-foreground/80 dark:border-white/10"
            >
              <Download className="h-4 w-4" />
              {h.cta3}
            </a>
          </motion.div>
        </motion.div>

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

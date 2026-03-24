"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import techStackData from "../../data/techStack.json";
import { useT } from "../../context/LanguageContext";

const allTechs = [...techStackData["Maîtrise avancée"], ...techStackData["Compétences solides"]];

export default function AboutPreview() {
  const { t } = useT();
  const a = t.about;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto w-[90%] sm:w-full sm:max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-3xl border-2 border-primary/20 lg:h-64 lg:w-64">
              <Image
                src="/images/Profile.jpg"
                alt="Mathieu Scicluna"
                width={256}
                height={256}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm text-muted-foreground">{a.label}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {a.title} <span className="text-primary">{a.titleAccent}</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{a.text1}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{a.text2}</p>

            <div className="mt-8">
              <p className="text-sm font-medium text-foreground/80">{a.techLabel}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {allTechs.slice(0, 8).map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${tech.color}`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition hover:text-foreground"
              >
                {a.cta} <span className="text-primary">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

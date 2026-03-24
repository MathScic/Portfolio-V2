"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Code2, MapPin, type LucideIcon } from "lucide-react";
import { useT } from "../../context/LanguageContext";

const icons: LucideIcon[] = [Globe, Zap, Code2, MapPin];

export default function ServicesPreview() {
  const { t } = useT();
  const s = t.services;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">{s.label}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {s.title} <span className="text-primary">{s.titleAccent}</span>
        </h2>
      </motion.div>

      <div className="mx-auto mt-16 w-[90%] space-y-6 sm:w-full sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-4">
        {s.items.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

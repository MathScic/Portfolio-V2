"use client";

import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";

export default function ProcessPreview() {
  const { t } = useT();
  const p = t.process;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">{p.label}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {p.title} <span className="text-primary">{p.titleAccent}</span>
        </h2>
      </motion.div>

      <div className="mx-auto mt-16 w-[90%] sm:w-full sm:max-w-3xl">
        {p.steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative"
          >
            {index < p.steps.length - 1 && (
              <div className="absolute left-[23px] top-[60px] h-full w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
            )}
            <div className="relative flex gap-6 pb-12">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-4 ring-background">
                {step.number}
              </div>
              <div className="flex-1 rounded-2xl border border-black/10 bg-white/60 p-6 backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20 dark:hover:bg-white/[0.08]">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

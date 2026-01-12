"use client";

import { motion } from "framer-motion";
import techStackData from "../../data/techStack.json";

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <h2 className="mb-12 text-center text-2xl font-semibold text-foreground">Stack Technique</h2>
      <div className="space-y-8">
        {Object.entries(techStackData).map(([category, techs]) => (
          <div key={category}>
            <h3 className="mb-4 text-sm font-semibold text-foreground/80">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {(techs as Array<{ name: string; color: string }>).map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

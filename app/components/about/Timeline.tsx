"use client";

import { motion } from "framer-motion";
import timelineData from "../../data/timeline.json";

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <h2 className="mb-12 text-center text-2xl font-semibold text-foreground">Parcours</h2>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative border-l-2 border-primary/20 pl-8"
          >
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-primary bg-white"></div>
            <p className="text-sm font-semibold text-primary">{item.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

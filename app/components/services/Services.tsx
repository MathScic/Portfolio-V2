"use client";

import { motion } from "framer-motion";
import { Code2, Paintbrush, Rocket, Wrench } from "lucide-react";
import servicesData from "../../data/services.json";

const iconMap = {
  Code2,
  Paintbrush,
  Rocket,
  Wrench,
};

export default function Services() {
  return (
    <div className="mb-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {servicesData.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20 hover:shadow-sm"
          >
            {/* Icon */}
            <div className="mb-4 inline-flex w-fit rounded-xl bg-primary/10 p-3 transition group-hover:bg-primary/20">
              <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
            </div>

            {/* Title */}
            <h2 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h2>

            {/* Description */}
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Zap, Users, Award } from "lucide-react";
import reasonsData from "../../data/reasons.json";

const iconMap = {
  Zap,
  Users,
  Award,
};

export default function Reasons() {
  return (
    <div className="mb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="text-sm text-muted-foreground">Pourquoi travailler avec moi</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Une approche centrée sur vos <span className="text-primary">résultats</span>
        </h2>
      </motion.div>

      {/* Cards Zigzag */}
      <div className="space-y-8">
        {reasonsData.map((reason) => {
          const Icon = iconMap[reason.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: reason.align === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className={`${
                reason.align === "left" ? "mr-auto" : "ml-auto"
              } w-full max-w-3xl rounded-2xl border border-black/10 bg-white p-8 transition hover:border-black/20 hover:shadow-sm`}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={2} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

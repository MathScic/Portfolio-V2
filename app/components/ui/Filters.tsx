"use client";

import { motion } from "framer-motion";

export type Filter = { id: string; label: string };

export default function Filters({
  active,
  onChange,
  filters,
}: {
  active: string;
  onChange: (id: string) => void;
  filters: Filter[];
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <div className="relative flex gap-2 rounded-full border border-border bg-background p-1">
        {filters.map((f) => {
          const isActive = active === f.id;

          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              className={[
                "relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "text-white"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/60",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {f.label}

              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

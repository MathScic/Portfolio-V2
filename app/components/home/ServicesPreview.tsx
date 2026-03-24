"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Code2, MapPin } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Site vitrine clé en main",
    description:
      "5 pages pro, adapté mobile, optimisé Google. Vous fournissez vos infos, je m'occupe du reste.",
  },
  {
    icon: Zap,
    title: "Livraison rapide",
    description:
      "Votre site en ligne en 2 à 3 semaines. Pas de délais interminables, pas de mauvaises surprises.",
  },
  {
    icon: Code2,
    title: "Code propre et maintenable",
    description:
      "Construit avec les technologies actuelles. Facile à faire évoluer si vos besoins changent.",
  },
  {
    icon: MapPin,
    title: "Accompagnement local",
    description:
      "Basé dans la Manche. Disponible pour un RDV sur place dans un rayon de 50 km autour de Granville.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ce que je fais de <span className="text-primary">mieux</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto mt-16 w-[90%] space-y-6 sm:w-full sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/80"
          >
            <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <service.icon className="h-6 w-6 text-primary" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

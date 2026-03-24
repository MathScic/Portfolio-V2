"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16"
    >
      {/* Photo */}
      <div className="mx-auto">
        <div className="relative h-48 w-48 overflow-hidden rounded-3xl border-2 border-primary/20 lg:h-64 lg:w-64">
          <Image
            src="/images/Profile.jpg"
            alt="Mathieu Scicluna"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Bio Text */}
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Je m&apos;appelle <strong className="text-foreground">Mathieu</strong>, développeur web basé à{" "}
          <strong className="text-foreground">Granville, dans la Manche</strong>.
        </p>
        <p>
          Après 8 ans dans le commerce, j&apos;ai choisi de me consacrer à ce que j&apos;aime vraiment :
          créer des sites qui servent à quelque chose.
        </p>
        <p>
          J&apos;accompagne les <strong className="text-foreground">artisans, commerçants et producteurs locaux</strong>{" "}
          qui veulent être trouvés sur Google et donner une image pro de leur activité — sans se
          prendre la tête avec la technique.
        </p>
        <p>
          Déjà présent sur le terrain avec{" "}
          <a
            href="https://www.trail-des-vikings.fr"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            trail-des-vikings.fr
          </a>{" "}
          et{" "}
          <a
            href="https://www.forevercars.fr"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            forevercars.fr
          </a>
          , je connais les besoins des entreprises normandes.
        </p>
      </div>
    </motion.div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web, UI/UX design, SEO et maintenance : découvrez les services proposés par Mathieu Scicluna, développeur Fullstack Next.js en Normandie.",
  openGraph: {
    title: "Services | Mathieu Scicluna",
    description:
      "Sites vitrines, applications web, SEO et maintenance. Accompagnement complet de la conception à la mise en ligne.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

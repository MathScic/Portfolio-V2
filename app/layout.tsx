import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { MobileHeader } from "./components/MobileHeader";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathieu-scicluna.fr"),
  title: {
    default: "Mathieu Scicluna | Développeur Web Full-Stack Normandie",
    template: "%s | Mathieu Scicluna",
  },
  description:
    "Développeur Web Full-Stack basé en Normandie. Création de sites performants avec Next.js, React et Tailwind CSS. Spécialisé en SEO et UX.",
  keywords: [
    "développeur web",
    "développeur full-stack",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Normandie",
    "freelance",
    "création site web",
    "SEO",
  ],
  authors: [{ name: "Mathieu Scicluna" }],
  creator: "Mathieu Scicluna",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mathieu-scicluna.fr",
    siteName: "Mathieu Scicluna - Portfolio",
    title: "Mathieu Scicluna | Développeur Web Full-Stack",
    description:
      "Développeur Web Full-Stack en Normandie. Création de sites performants et optimisés.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mathieu Scicluna - Développeur Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathieu Scicluna | Développeur Web Full-Stack",
    description: "Création de sites web performants en Normandie",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

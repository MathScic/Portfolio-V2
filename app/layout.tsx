import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathieu-scicluna.fr"),
  title: {
    default: "Mathieu Scicluna | Développeur Fullstack Next.js – Remote France",
    template: "%s | Mathieu Scicluna",
  },
  description:
    "Développeur Fullstack Next.js disponible en remote partout en France. Création de sites performants, SEO et interfaces soignées.",
  keywords: [
    "développeur web",
    "développeur full-stack",
    "Next.js",
    "React",
    "Tailwind CSS",
    "remote",
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
    title: "Mathieu Scicluna | Développeur Fullstack Next.js – Remote France",
    description:
      "Développeur Fullstack Next.js freelance, disponible remote partout en France. Sites performants, SEO et interfaces soignées.",
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
    description: "Développeur Fullstack Next.js – Remote France",
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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

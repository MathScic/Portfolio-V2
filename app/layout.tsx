import "@/app/globals.css";
import Header from "./components/Header";
import { MobileHeader } from "./components/MobileHeader";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <MobileHeader />
        <main className="pt-24">
          <div className="mx-auto w-[80%] max-w-7xl px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

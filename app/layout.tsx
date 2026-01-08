import "@/app/globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}

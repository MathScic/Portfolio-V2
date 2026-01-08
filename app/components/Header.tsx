import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-2xl border border-border bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-sm font-semibold text-foreground">
          Mathieu <span className="text-primary">Scicluna</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* spacer pour équilibre visuel */}
        <div className="w-[90px]" />
      </nav>
    </header>
  );
}

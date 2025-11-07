import Link from "next/link";

const links = [
  { label: "Contact Me", href: "mailto:joshuacho52005@gmail.com", external: true },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "GitHub", href: "https://github.com/JahShoeAh", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanghyun-cho-2367632a9/", external: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-terminal-border bg-terminal-base/95 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 sm:px-10 lg:px-16">
        <Link href="/" className="text-terminal-accent">
          JOSH CHO
        </Link>
        <div className="flex gap-2 sm:gap-3">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent px-3 py-1 text-terminal-accent transition hover:border-terminal-accent hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md border border-transparent px-3 py-1 text-terminal-accent transition hover:border-terminal-accent hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

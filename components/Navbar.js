import Link from "next/link";

const links = [
  { label: "Contact Me", href: "mailto:cho542@purdue.edu", external: true },
  { label: "Resume", href: "/SJC_Resume.pdf", external: true },
  { label: "GitHub", href: "https://github.com/JahShoeAh", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanghyun-cho-2367632a9/", external: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-terminal-border bg-terminal-base/95 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.8em] text-slate-200 sm:px-10 sm:py-4 sm:text-xs sm:tracking-[0.35em] lg:px-16">
        <Link href="/" className="text-terminal-accent">
          JOSH CHO
        </Link>
        <div className="flex flex-wrap justify-end gap-3 pl-2
         sm:gap-3 sm:pl-0">
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

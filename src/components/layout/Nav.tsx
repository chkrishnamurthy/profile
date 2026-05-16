const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-[var(--color-ink)]"
        >
          Krishna.
        </a>
        <nav className="hidden gap-6 text-sm text-[var(--color-muted)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          className="rounded-full border border-[var(--color-ink)] px-4 py-1.5 text-sm text-[var(--color-ink)] transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-line)] bg-[var(--color-paper)]"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-8">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Let's build something together.
        </h2>
        <p className="mt-4 max-w-xl text-[var(--color-muted)]">
          I'm open to freelance and full-time opportunities. Or just say hi —
          I'm always happy to talk code, AI tooling, or chess.
        </p>

        <div className="mt-8 flex flex-col gap-1 text-sm">
          <a
            href={`mailto:${resume.email}`}
            className="w-fit text-[var(--color-ink)] underline-offset-4 hover:underline"
          >
            {resume.email}
          </a>
          <span className="text-[var(--color-muted)]">{resume.phone}</span>
          <span className="text-[var(--color-muted)]">{resume.location}</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {resume.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} CH Krishna Murthy. Built with React,
          TypeScript & Tailwind.
        </p>
      </div>
    </footer>
  );
}

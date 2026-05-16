import { resume } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 pt-24 pb-12 md:px-8 md:pt-32 md:pb-16"
    >
      <p className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] animate-fade-up">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
        Available for freelance projects
      </p>

      <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-7xl animate-fade-up">
        Hi, I'm Krishna —
        <br />
        <span className="text-[var(--color-muted)]">{resume.tagline}</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/80 animate-fade-up">
        {resume.role} with <strong>6.5+ years</strong> shipping production
        React, Node, GraphQL & Prisma — currently building CRM features at{" "}
        <strong>Mirabel Technologies</strong>.
      </p>

      <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
        <a
          href="#contact"
          className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm text-[var(--color-paper)] transition hover:opacity-90"
        >
          Say hi →
        </a>
        <a
          href="#projects"
          className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-ink)]"
        >
          See my work
        </a>
      </div>
    </section>
  );
}

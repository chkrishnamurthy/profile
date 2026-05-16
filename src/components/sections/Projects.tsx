import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="A few things I've built." />
      <div className="space-y-6">
        {resume.projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-ink)]"
          >
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-[var(--color-ink)]">
                {p.name}
              </h3>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--color-muted)] transition group-hover:text-[var(--color-ink)]"
                >
                  Visit ↗
                </a>
              )}
            </div>
            <p className="text-[var(--color-ink)]/80">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[var(--color-paper)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

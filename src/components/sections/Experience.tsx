import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked." />
      <div className="space-y-12">
        {resume.experience.map((exp) => (
          <div key={exp.company}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-line)] pb-3">
              <h3 className="text-xl font-medium text-[var(--color-ink)]">
                {exp.company}
              </h3>
              <span className="text-sm text-[var(--color-muted)]">
                {exp.period}
              </span>
            </div>

            <div className="space-y-8">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium text-[var(--color-ink)]">
                      {role.title}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-[var(--color-ink)]/80">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

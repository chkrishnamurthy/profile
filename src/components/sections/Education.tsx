import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Where I studied." />
      <div className="space-y-5">
        {resume.education.map((e) => (
          <div
            key={e.degree}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-line)] pb-4 last:border-0"
          >
            <div>
              <h3 className="font-medium text-[var(--color-ink)]">
                {e.degree}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                {e.institution}
              </p>
            </div>
            <span className="text-sm text-[var(--color-muted)]">{e.year}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

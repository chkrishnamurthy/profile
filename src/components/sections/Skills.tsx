import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="The tools I reach for." />
      <div className="space-y-8">
        {resume.skills.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-muted)]">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

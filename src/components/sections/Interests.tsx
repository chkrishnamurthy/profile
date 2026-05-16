import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Interests() {
  return (
    <Section id="interests">
      <SectionHeading eyebrow="Beyond code" title="What I'm into." />
      <ul className="flex flex-wrap gap-3 text-[var(--color-ink)]/80">
        {resume.interests.map((i, idx) => (
          <li key={i} className="flex items-center gap-3">
            <span>{i}</span>
            {idx < resume.interests.length - 1 && (
              <span className="text-[var(--color-muted)]">·</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

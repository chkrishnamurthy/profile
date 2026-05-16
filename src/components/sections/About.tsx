import { resume } from "@/data/resume";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A quick intro." />
      <p className="text-lg leading-relaxed text-[var(--color-ink)]/80">
        {resume.about}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink)]/80">
        Outside work I'm a chess player, a curious reader, and someone who
        genuinely enjoys exploring new tech — especially the AI tooling layer
        that's reshaping how we ship software.
      </p>
    </Section>
  );
}

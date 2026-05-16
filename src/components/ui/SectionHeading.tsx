interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

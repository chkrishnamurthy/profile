import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-ink)]">
      {children}
    </span>
  );
}

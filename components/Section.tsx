"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionProps {
  id: string;
  /** Margin-rail label, e.g. "Projects". */
  rail: string;
  /** Optional marginal note, hidden on small screens. */
  railNote?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Shared section shell: sticky margin rail, two-column grid,
 * and a single reveal-on-first-view transition that respects
 * prefers-reduced-motion.
 */
export default function Section({ id, rail, railNote, className, children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ["band", "enter", shown ? "shown" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} ref={ref} className={classes} aria-labelledby={`${id}-heading`}>
      <div className="wrap cols">
        <div className="rail">
          <span className="name">{rail}</span>
          {railNote ? <span className="note">{railNote}</span> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

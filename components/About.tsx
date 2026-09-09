import Section from "@/components/Section";
import { about } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" rail="About" railNote="Background and current direction">
      <h2 id="about-heading">A student building toward research in AI and machine learning</h2>
      <div className="section-body">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} style={{ marginBottom: "16px" }}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

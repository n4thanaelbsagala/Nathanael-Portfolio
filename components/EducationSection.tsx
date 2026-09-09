import Section from "@/components/Section";
import { education } from "@/data/profile";

export default function EducationSection() {
  return (
    <Section id="education" rail="Education">
      <h2 id="education-heading">Education</h2>

      <div className="edu">
        <div className="edu-main">
          <h3>{education.institution}</h3>
          <p className="edu-meta">{education.location}</p>
          <p className="degree">{education.degree}</p>
          <p className="edu-meta">{education.period}</p>
          <p className="gpa">
            <b>{education.gpa}</b>
            <span>{education.gpaScale}</span>
          </p>
        </div>

        <aside className="award" aria-label="Scholarship">
          <h3>{education.award.name}</h3>
          <p>{education.award.body}</p>
          <p className="flag">{education.award.note}</p>
        </aside>
      </div>
    </Section>
  );
}

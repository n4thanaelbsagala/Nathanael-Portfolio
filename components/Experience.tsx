import Section from "@/components/Section";
import { roles } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" rail="Experience">
      <h2 id="experience-heading">Experience</h2>

      <div className="section-body">
        {roles.map((role) => (
          <article className="role" key={role.id}>
            <p className="when">
              {role.period}
              <br />
              <span style={{ color: "var(--muted)" }}>{role.location}</span>
            </p>
            <div>
              <h3>{role.title}</h3>
              <p className="org">{role.organisation}</p>
              <p>{role.summary}</p>
              <ul className="duties">
                {role.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import Section from "@/components/Section";
import { skillGroups } from "@/data/experience";

export default function Skills() {
  return (
    <Section id="skills" rail="Technical skills">
      <h2 id="skills-heading">Technical skills</h2>

      <div className="skillset">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="tag" tabIndex={0}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

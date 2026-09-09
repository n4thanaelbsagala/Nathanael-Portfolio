import Section from "@/components/Section";
import { researchIcons } from "@/components/Icons";
import { researchInterests, researchIntro } from "@/data/research";

export default function ResearchInterests() {
  return (
    <Section
      id="research"
      rail="Research interests"
      railNote="Directions he wants to work in, not areas of prior professional research"
    >
      <h2 id="research-heading">Where I want to go next</h2>
      <p className="lede section-lede">{researchIntro}</p>

      <ul className="interests">
        {researchInterests.map((interest) => {
          const Icon = researchIcons[interest.id];
          return (
            <li className="interest" key={interest.id}>
              {Icon ? <Icon /> : <span aria-hidden="true" />}
              <div>
                <h3>{interest.title}</h3>
                <p>{interest.blurb}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

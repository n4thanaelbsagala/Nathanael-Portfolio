import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" rail="Projects" railNote="Coursework and independent builds">
      <h2 id="projects-heading">Projects</h2>
      <p className="lede section-lede">
        Two builds so far: a classification model in R, and an object-oriented application in Java.
      </p>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

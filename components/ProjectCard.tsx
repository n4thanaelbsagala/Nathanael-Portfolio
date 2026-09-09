"use client";

import { useId, useState } from "react";
import { ChevronIcon, GitHubIcon } from "@/components/Icons";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="project" id={project.id}>
      <div className="project-head">
        <h3>{project.title}</h3>
        <p className="kind">{project.kind}</p>
      </div>

      <ul className="stack">
        {project.stack.map((technology) => (
          <li key={technology}>
            <span className="tag" tabIndex={0}>
              {technology}
            </span>
          </li>
        ))}
      </ul>

      <p>{project.summary}</p>

      <div className="disclosure">
        <button
          type="button"
          className="toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronIcon className="chev" />
          <span>{open ? "Hide details" : "View details"}</span>
        </button>

        {open ? (
          <div className="reveal" id={panelId}>
            <p>{project.detail}</p>

            <h4 className="detail-label">Technical highlights</h4>
            <ul className="highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {project.figureSlots ? (
              <>
                <div className="slots">
                  {project.figureSlots.map((slot) => (
                    <div className="slot" key={slot.title}>
                      <span className="t">{slot.title}</span>
                      <span className="s">{slot.caption}</span>
                    </div>
                  ))}
                </div>
                {project.figureNote ? <p className="slot-note">{project.figureNote}</p> : null}
              </>
            ) : null}

            <div className="repo">
              {project.repoUrl ? (
                <a
                  className="btn btn-ghost"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={15} />
                  View on GitHub
                </a>
              ) : (
                <span className="pending">
                  <GitHubIcon size={15} />
                  Repository link coming soon
                </span>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}


import { useState } from "react";
import projects from "../data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <section className="projects-section section-spacing" id="projects">
      <div className="section-shell">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>Projects that bring ideas <span className="accent-text">to life.</span></h2>
          </div>
          <span className="project-count">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View source <span>↗</span>
                </a>

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live demo <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more">
          <button
            className="button button-secondary"
            type="button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show featured projects" : "View all projects"}{" "}
            <span>{showAll ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

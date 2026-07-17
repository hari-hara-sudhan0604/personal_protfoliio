import "./ProjectsSection.css";

import { Link } from "react-router-dom";

import projects from "../../data/projects";

import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectsSection({
  showViewAllButton = true,
  featuredOnly = true,
}) {
  const displayedProjects = featuredOnly
  ? projects.filter((project) => project.featured)
  : projects;

  return (
    <section className="projects-section section" id="projects">

      <div className="section-header">

        <span className="section-tag">
          MY WORK
        </span>

        <h2>Featured Projects</h2>

        <p>
          A selection of projects that showcase my skills in
          Full Stack Development, problem-solving, and modern web technologies.
        </p>

      </div>

      <div className="projects-grid">

        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

{showViewAllButton && (
  <div className="projects-button">
    <Link
      to="/projects"
      className="btn"
    >
      View All Projects
    </Link>
  </div>
)}

    </section>
  );
}

export default ProjectsSection;
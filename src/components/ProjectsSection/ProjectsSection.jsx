import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../data/projects";

import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <section className="section">
      <div className="container">

        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
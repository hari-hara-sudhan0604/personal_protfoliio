import Button from "../Button/Button";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  liveDemo,
}) {
  return (
    <article className="project-card">
      <img
        src={image}
        alt={title}
        className="project-image"
      />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-stack">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

<div className="project-buttons">
  <Button
    variant="primary"
    href={liveDemo}
    target="_blank"
  >
    Live Demo
  </Button>

  <Button
    variant="secondary"
    href={github}
    target="_blank"
  >
    GitHub
  </Button>
</div>
      </div>
    </article>
  );
}

export default ProjectCard;
import Button from "../Button/Button";
import "./ProjectCard.css";
import Card from "../Card/Card";
import Badge from "../Badge/Badge";
function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  liveDemo,
}) {
  return (
<Card className="project-card">
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
            <Badge key={tech}>
            {tech}
            </Badge>
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
    </Card>
  );
}

export default ProjectCard;
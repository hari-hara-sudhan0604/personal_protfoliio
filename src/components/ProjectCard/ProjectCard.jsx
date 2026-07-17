// import Button from "../Button/Button";
// import "./ProjectCard.css";
// import Card from "../Card/Card";
// import Badge from "../Badge/Badge";
// function ProjectCard({
//   title,
//   description,
//   technologies,
//   image,
//   github,
//   liveDemo,
// }) {
//   return (
// <Card className="project-card">
//       <img
//         src={image}
//         alt={title}
//         className="project-image"
//       />

//       <div className="project-content">
//         <h3>{title}</h3>

//         <p>{description}</p>

//         <div className="tech-stack">
//           {technologies.map((tech) => (
//             <Badge key={tech}>
//             {tech}
//             </Badge>
//           ))}
//         </div>

// <div className="project-buttons">
//   <Button
//     variant="primary"
//     href={liveDemo}
//     target="_blank"
//   >
//     Live Demo
//   </Button>

//   <Button
//     variant="secondary"
//     href={github}
//     target="_blank"
//   >
//     GitHub
//   </Button>
// </div>
//       </div>
//     </Card>
//   );
// }

// export default ProjectCard;

import "./ProjectCard.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="project-image"
        loading="lazy"
      />

      <div className="project-content">

        {project.featured && (
          <span className="featured-badge">
            ⭐ Featured
          </span>
        )}

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">

          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}

        </div>

        <div className="project-status">
          {project.status}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;
import "./TimelineCard.css";

function TimelineCard({ item }) {
  return (
    <article className="timeline-card">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        {/* Date */}
        <span className="timeline-date">
          {item.duration}
        </span>

        {/* Title / Role */}
        <h3>
          {item.title || item.role}
        </h3>

        {/* Organization / Company */}
        <h4>
          {item.organization || item.company}
        </h4>

        {/* Location */}
        {item.location && (
          <p className="timeline-location">
            📍 {item.location}
          </p>
        )}

        {/* Employment Type */}
        {item.employmentType && (
          <p className="timeline-employment">
            💼 {item.employmentType}
          </p>
        )}

        {/* Grade */}
        {item.grade && (
          <p className="timeline-grade">
            🎓 {item.grade}
          </p>
        )}

        {/* Description */}

        {Array.isArray(item.description) ? (

          <ul className="timeline-description-list">

            {item.description.map((point) => (

              <li key={point}>
                {point}
              </li>

            ))}

          </ul>

        ) : (

          <p className="timeline-description">
            {item.description}
          </p>

        )}

        {item.credentialId && (
  <p className="timeline-credential">
    <strong>Credential ID:</strong> {item.credentialId}
  </p>
)}
{item.skills && (
  <>
    <h5 className="timeline-subheading">
      Skills Acquired
    </h5>

    <div className="timeline-tags">

      {item.skills.map((skill) => (

        <span
          key={skill}
          className="timeline-tag"
        >
          {skill}
        </span>

      ))}

    </div>
  </>
)}
{item.certificateLink && (
  <div className="timeline-actions">

    <a
      href={item.certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline"
      aria-label={`View certificate for ${item.title}`}
    >
      View Certificate
    </a>

  </div>
)}


        {/* Technologies */}

        {item.technologies && (

          <>
            <h5 className="timeline-subheading">
              Technologies Used
            </h5>

            <div className="timeline-tags">

              {item.technologies.map((tech) => (

                <span
                  key={tech}
                  className="timeline-tag"
                >
                  {tech}
                </span>

              ))}

            </div>

          </>

        )}

        {/* Achievements */}

        {item.achievements && (

          <>
            <h5 className="timeline-subheading">
              Key Achievements
            </h5>

            <ul className="timeline-achievements">

              {item.achievements.map((achievement) => (

                <li key={achievement}>
                  {achievement}
                </li>

              ))}

            </ul>

          </>

        )}

      </div>

    </article>
  );
}

export default TimelineCard;
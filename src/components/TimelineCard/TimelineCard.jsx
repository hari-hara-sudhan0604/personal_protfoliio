import "./TimelineCard.css";

function TimelineCard({ item }) {
  return (
    <article className="timeline-card">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <span className="timeline-date">
          {item.duration}
        </span>

        <h3>{item.title}</h3>

        <h4>{item.organization}</h4>

        {item.location && (
          <p className="timeline-location">
            📍 {item.location}
          </p>
        )}

        {item.grade && (
          <p className="timeline-grade">
            🎓 {item.grade}
          </p>
        )}

        <p className="timeline-description">
          {item.description}
        </p>

        {item.highlights && (

          <div className="timeline-tags">

            {item.highlights.map((tag) => (

              <span
                key={tag}
                className="timeline-tag"
              >
                {tag}
              </span>

            ))}

          </div>

        )}

      </div>

    </article>
  );
}

export default TimelineCard;
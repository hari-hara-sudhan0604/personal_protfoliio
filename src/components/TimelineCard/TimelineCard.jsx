import "./TimelineCard.css";

function TimelineCard({ item }) {

    return (

        <article className="timeline-card">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

                <span className="timeline-date">

                    {item.duration}

                </span>

                <h3>

                    {item.title}

                </h3>

                <h4>

                    {item.organization}

                </h4>

                <p>

                    {item.description}

                </p>

            </div>

        </article>

    );

}

export default TimelineCard;
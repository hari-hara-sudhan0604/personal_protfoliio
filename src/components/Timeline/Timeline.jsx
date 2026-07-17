import "./Timeline.css";

import TimelineCard from "../TimelineCard/TimelineCard";

function Timeline({
    title,
    subtitle,
    items,
}) {

    return (

        <section className="timeline section">

            <div className="section-header">

                <span className="section-tag">

                    MY JOURNEY

                </span>

                <h2>{title}</h2>

                <p>{subtitle}</p>

            </div>

            <div className="timeline-container">

                {

                    items.map((item) => (

                        <TimelineCard
                            key={item.id}
                            item={item}
                        />

                    ))

                }

            </div>

        </section>

    );

}

export default Timeline;
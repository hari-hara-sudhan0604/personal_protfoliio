import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

function About() {
  return (
    <section className="section about">
      <div className="container">

        <SectionTitle
          subtitle="Get To Know Me"
          title="About Me"
        />

        <div className="about-grid">

          <div className="about-image">

            <img
              src="https://placehold.co/450x500"
              alt="Hari"
            />

          </div>

          <div className="about-content">

            <h3>
              Full Stack Developer
            </h3>

            <p>

Lorem ipsum dolor sit amet,
consectetur adipisicing elit.

Replace this later with
your real introduction.

            </p>

            <div className="about-cards">

              <div className="about-card">

                <h4>Experience</h4>

                <p>Fresher</p>

              </div>

              <div className="about-card">

                <h4>Projects</h4>

                <p>10+</p>

              </div>

              <div className="about-card">

                <h4>Location</h4>

                <p>India</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
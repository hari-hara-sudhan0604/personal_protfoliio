import "./About.css";

import personalInfo from "../../data/personalInfo";

function About() {
  return (
    <section className="about section" id="about">

      <div className="section-header">

        <h2>About Me</h2>

        <p>
          Get to know me better
        </p>

      </div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-content">

          <h3>
            Passionate Full Stack Developer
          </h3>

          <p>

            {personalInfo.about}

          </p>

          <p>

            {personalInfo.careerGoal}

          </p>

        </div>

        {/* RIGHT */}

        <div className="about-strengths">

          <h3>
            Core Strengths
          </h3>

          <div className="strength-grid">

            {

              personalInfo.strengths.map((item)=>(

                <div
                key={item}
                className="strength-card"
                >

                  {item}

                </div>

              ))

            }

          </div>

        </div>

      </div>
      <div className="highlight-container">

<div className="highlight-card">

<h3>4 Months</h3>

<p>

Internship Experience

</p>

</div>

<div className="highlight-card">

<h3>6+</h3>

<p>

Professional Certificates

</p>

</div>

<div className="highlight-card">

<h3>SIH</h3>

<p>

Hackathon Finalist

</p>

</div>

<div className="highlight-card">

<h3>MERN + Flask</h3>

<p>

Technology Stack

</p>

</div>

</div>

    </section>
  );
}

export default About;
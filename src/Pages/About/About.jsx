import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";
function About() {
  return (
    <AnimatedPage>
      <section className="section about">
        <Helmet>
          <title>About | Hari Portfoio</title>

          <meta
            name="description"
            content="Portfolio of Hari, MERN & Flask Developer."
          />
          {/* <link rel="canonical"href="https://your-domain.vercel.app/projects"/> */}
          {/* add like above in all code after site deployment */}
          <meta property="og:title" content="Hari Portfolio" />
          <meta property="og:description" content="Full Stack MERN Developer" />
          <meta property="og:type" content="website" />

          {/* <meta property="og:url"content="https://your-domain.vercel.app"/> */}
          {/* <meta property="og:image"content="https://your-domain.vercel.app/preview.png"/> */}
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:title" content="Hari Portfolio" />

          <meta name="twitter:description" content="MERN Developer" />

          <meta
            name="twitter:image"
            content="https://your-domain.vercel.app/preview.png"
          />
        </Helmet>
        <div className="container">
          <SectionTitle subtitle="Get To Know Me" title="About Me" />

          <div className="about-grid">
            <div className="about-image">
              <img src="https://placehold.co/450x500" alt="Hari" />
            </div>

            <div className="about-content">
              <h3>Full Stack Developer</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Replace this later with your real introduction.
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
    </AnimatedPage>
  );
}

export default About;

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1>
            Hari
            <span> Kumar</span>
          </h1>

          <h2>
            Full Stack MERN Developer
          </h2>

          <p className="hero-description">
            Passionate Full Stack Developer with experience
            in building responsive, scalable and user-friendly
            web applications.

            This is dummy text.

            Replace this later with your own professional
            summary.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Hire Me
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>

          </div>

          <div className="hero-social">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Content */}

        <div className="hero-image">

          <img
            src="https://placehold.co/500x500"
            alt="Hari Portfolio"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
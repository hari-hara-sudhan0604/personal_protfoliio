// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import "./Hero.css";
// import Button from "../Button/Button";
// import personalInfo from "../../data/personalInfo";

// function Hero() {
//   return (
//     <section className="hero section">
//       <div className="container hero-container">

//         {/* Left Content */}
//         <div className="hero-content">

//           <p className="hero-greeting">
//             👋 Hello, I'm
//           </p>

//           <h1>

//           {personalInfo.name}

//           </h1>

//           <h2>

//           {personalInfo.title}

//           </h2>

//           <p>

//           {personalInfo.heroDescription}

//           </p>
//           <div className="hero-buttons">

//             <Button variant="primary">
//             Hire Me
//             </Button>

//             <Button variant="secondary">
//             Download Resume
//             </Button>

//           </div>

//           <div className="hero-social">

//             <a href="#">
//               <FaGithub />
//             </a>

//             <a href="#">
//               <FaLinkedin />
//             </a>

//             <a href="#">
//               <FaEnvelope />
//             </a>

//           </div>

//         </div>

//         {/* Right Content */}

//         <div className="hero-image">

//           <img
//             src="https://placehold.co/500x500"
//             alt="Hari Portfolio"
//           />

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;

//new code

import "./Hero.css";
//import { FaArrowRight } from "react-icons/fa";
import personalInfo from "../../data/personalInfo";
import socialLinks from "../../data/socialLinks";
import FadeUp from "../animations/FadeUp";
import profileImage from "../../assets/images/profile.png";
import FadeIn from "../animations/FadeIn";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <FadeUp>
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>{personalInfo.name}</h1>

          <h2>{personalInfo.title}</h2>

          <p className="hero-subtitle">
            {personalInfo.subtitle}
          </p>

          <p className="hero-description">
            {personalInfo.objective}
          </p>

          <div className="hero-buttons">

            <a
              href="/projects"
              className="btn"
            >
              View Projects
            </a>

            <a
              href={personalInfo.resume}
              download
              className="btn btn-outline"
            >
              Download Resume
            </a>

          </div>

          <div className="hero-social">

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>

          </div>
          <div className="hero-tech">

  {personalInfo.techStack.map((tech) => (

    <span
      key={tech}
      className="tech-badge"
    >
      {tech}
    </span>

  ))}

        </div>
        </div>
        </FadeUp>

        {/* RIGHT CONTENT */}
<FadeIn>
<div className="hero-image">

<div className="profile-card">

<img
src={profileImage}
alt="Harihara Sudhan"
loading="lazy" decoding="async"
/>

<div className="profile-status">

<span className="status-dot"></span>

Available for Work

</div>

</div>
<div className="hero-stats">

{personalInfo.stats.map((item) => (

<div
key={item.title}
className="stat-card"
>

<h3>{item.value}</h3>

<p>{item.title}</p>

</div>

))}

</div>

</div>
</FadeIn>
      </div>
    </section>
  );
}

export default Hero;
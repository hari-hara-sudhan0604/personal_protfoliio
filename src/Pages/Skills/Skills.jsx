import "./Skills.css";
import skills from "../../data/skills";
import AnimatedPage from "../../components/animations/AnimatedPage";
import { Helmet } from "react-helmet-async";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFlask,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const iconMap = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  Flask: <SiFlask />,
  Python: <FaPython />,
  Java: <FaJava />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "VS Code": <FaCode />,
  Postman: <SiPostman />,
  Figma: <SiFigma />,
};

function Skills() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Skills | Hari Portfolio</title>
        <meta property="og:title" content="Hari Portfolio" />
        <meta property="og:description" content="Full Stack MERN Developer" />
        <meta property="og:type" content="website" />

        {/* <meta property="og:url"content="https://your-domain.vercel.app"/> */}
        {/* <meta property="og:image"content="https://your-domain.vercel.app/preview.png"/> */}
        <meta
          name="description"
          content="Portfolio of Hari, MERN Stack and Flask Developer."
        />

        {/* <link

rel="canonical"

href="https://your-domain.vercel.app/"

/> */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Hari Portfolio" />

        <meta name="twitter:description" content="MERN Developer" />

        <meta
          name="twitter:image"
          content="https://your-domain.vercel.app/preview.png"
        />
      </Helmet>

      <section className="skills section">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>Technologies I use to build modern applications.</p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category} className="skill-category">
              <h3>{category.category}</h3>

              {category.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-icon">
                      {iconMap[skill.name] || <FaCode />}
                    </span>

                    <span>{skill.name}</span>

                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Skills;

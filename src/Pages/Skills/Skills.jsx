import "./Skills.css";
import skills from "../../data/skills";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPython,
    FaCode
} from "react-icons/fa";

import {
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiFlask,
    SiPostman,
    SiFigma
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
        <section className="skills section">

            <div className="section-header">
                <h2>My Skills</h2>
                <p>Technologies I use to build modern applications.</p>
            </div>

            <div className="skills-grid">

                {skills.map((category) => (

                    <div
                        key={category.category}
                        className="skill-category"
                    >

                        <h3>{category.category}</h3>

                        {category.items.map((skill) => (

                            <div
                                key={skill.name}
                                className="skill-item"
                            >

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
                                            width: `${skill.level}%`
                                        }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;

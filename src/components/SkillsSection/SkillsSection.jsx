import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";

import skills from "../../data/skills";

import "./SkillsSection.css";

function SkillsSection() {
  return (
    <section className="section">
      <div className="container">

        <SectionTitle
          subtitle="Technologies"
          title="My Skills"
        />

        <div className="skills-grid">

          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              level={skill.level}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default SkillsSection;
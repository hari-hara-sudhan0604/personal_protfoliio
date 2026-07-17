import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";

import skills from "../../data/skills";

import "./SkillsSection.css";

function SkillsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle subtitle="Technologies" title="My Skills" />

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category} className="skill-category">
              <h3>{category.category}</h3>

              <div className="skill-list">
                {category.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    title={skill.name}
                    level={`${skill.level}%`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
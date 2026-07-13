import "./SkillCard.css";

function SkillCard({ title, level }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  );
}

export default SkillCard;
import Card from "../Card/Card";
import "./SkillCard.css";

function SkillCard({ title, level }) {
  return (
    <Card className="skill-card">
      <h3>{title}</h3>
      <p>{level}</p>
    </Card>
  );
}

export default SkillCard;
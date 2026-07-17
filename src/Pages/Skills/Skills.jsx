import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import { Helmet } from "react-helmet-async";

function Skills() {
  return (
    <section>
      <Helmet>

<title>
Skills | Hari Portfolio
</title>

<meta

name="description"

content="Portfolio of Hari, MERN & Flask Developer."

/>

</Helmet>
      <SectionTitle/>
      <SkillCard/>
      <SkillsSection/>
    </section>
    
  );
}

export default Skills;
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

function Home() {
  return (
     <>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
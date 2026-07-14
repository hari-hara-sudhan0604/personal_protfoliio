import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import NewsSection from "../../components/NewsSection/NewsSection";
import FadeIn from "../animations/FadeIn";

function Home() {
  return (
     <>
     <FadeIn>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <NewsSection/>
     </FadeIn>
    </>
  );
}

export default Home;
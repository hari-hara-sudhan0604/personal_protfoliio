import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../Pages/Skills/Skills";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import NewsSection from "../../components/NewsSection/NewsSection";
import FadeIn from "../../components/animations/FadeIn";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
     <>
      <Helmet>
<meta property="og:title" content="Hari Portfolio" />
  <meta property="og:description" content="MERN & Flask Developer" />
  <meta property="og:type" content="website" />
    {/* <meta property="og:image" content="https://your-domain.com/preview.png"></meta> */}
<title>Hari | Full Stack Developer</title>
<meta name="description" content="Portfolio of Hari, MERN & Flask Developer."/>
</Helmet>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <FadeIn>
    <NewsSection/>
    </FadeIn>
    </>
    </AnimatedPage>
  );
}

export default Home;
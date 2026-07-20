import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";
function Projects() {
  return (
    <AnimatedPage>
      <section>
        <Helmet>
          <title>Projects | Hari Portfolio</title>
          <meta property="og:title" content="Hari Portfolio" />
          <meta property="og:description" content="Full Stack MERN Developer" />
          <meta property="og:type" content="website" />

          {/* <meta property="og:url"content="https://your-domain.vercel.app"/> */}
          {/* <meta property="og:image"content="https://your-domain.vercel.app/preview.png"/> */}
          <meta
            name="description"
            content="Portfolio of Hari, MERN & Flask Developer."
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:title" content="Hari Portfolio" />

          <meta name="twitter:description" content="MERN Developer" />

          <meta
            name="twitter:image"
            content="https://your-domain.vercel.app/preview.png"
          />
        </Helmet>
        <ProjectsSection featuredOnly={false} showViewAllButton={false} />
      </section>
    </AnimatedPage>
  );
}

export default Projects;

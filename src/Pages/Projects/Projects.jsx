import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";
function Projects(){

return(
<AnimatedPage>
<section>
<Helmet>

<title>
Projects | Hari Portfolio
</title>

<meta

name="description"

content="Portfolio of Hari, MERN & Flask Developer."

/>

</Helmet>
<ProjectsSection
      featuredOnly={false}
      showViewAllButton={false}
    />

</section>
</AnimatedPage>
)

}


export default Projects;
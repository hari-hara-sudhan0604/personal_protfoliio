import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { Helmet } from "react-helmet-async";

function Projects(){

return(

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
<ProjectsSection/>

</section>

)

}


export default Projects;
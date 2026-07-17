import Timeline from "../../components/Timeline/Timeline";

import experience from "../../data/experience";

import { Helmet } from "react-helmet-async";

import AnimatedPage from "../../components/animations/AnimatedPage";
function Experience(){

return(
    <AnimatedPage>

<>

<Helmet>

<title>

Experience | Hari Portfolio

</title>

<meta

name="description"

content="Professional experience, internships and practical software development journey."

/>

</Helmet>

<Timeline

title="Experience"

subtitle="Professional Journey"

items={experience}

/>

</>
</AnimatedPage>
);

}

export default Experience;
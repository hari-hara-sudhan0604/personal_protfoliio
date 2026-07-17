import Timeline from "../../components/Timeline/Timeline";

import certificates from "../../data/certificates";

import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage"; 

function Certificates() {
  return (
    <AnimatedPage>
    <>
      <Helmet>
        <title>
          Certificates | Hari Portfolio
        </title>

        <meta
          name="description"
          content="Professional certifications and technical achievements earned by Hari."
        />
      </Helmet>

      <Timeline
        title="Certificates"
        subtitle="Professional Certifications & Learning"
        items={certificates}
      />
    </>
    </AnimatedPage>
  );
}

export default Certificates;
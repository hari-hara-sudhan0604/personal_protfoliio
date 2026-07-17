import Timeline from "../../components/Timeline/Timeline";

import education from "../../data/education";

import { Helmet } from "react-helmet-async";

function Education() {
  return (
    <>
      <Helmet>
        <title>Education | Hari Portfolio</title>

        <meta
          name="description"
          content="Academic journey, qualifications, and educational background of Hari."
        />
      </Helmet>

      <Timeline
        title="Education"
        subtitle="My Academic Journey"
        items={education}
      />
    </>
  );
}

export default Education;
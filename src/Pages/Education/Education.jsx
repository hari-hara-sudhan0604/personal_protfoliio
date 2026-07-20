import Timeline from "../../components/Timeline/Timeline";

import education from "../../data/education";
import { memo } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";
function Education() {
  return (
    <AnimatedPage>
      <>
        <Helmet>
          <title>Education | Hari Portfolio</title>

          <meta
            name="description"
            content="Academic journey, qualifications, and educational background of Hari."
          />
          <meta property="og:title" content="Hari Portfolio" />
          <meta property="og:description" content="Full Stack MERN Developer" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:title" content="Hari Portfolio" />

          <meta name="twitter:description" content="MERN Developer" />

          <meta
            name="twitter:image"
            content="https://your-domain.vercel.app/preview.png"
          />
          {/* <meta property="og:url"content="https://your-domain.vercel.app"/> */}
          {/* <meta property="og:image"content="https://your-domain.vercel.app/preview.png"/> */}
        </Helmet>

        <Timeline
          title="Education"
          subtitle="My Academic Journey"
          items={education}
        />
      </>
    </AnimatedPage>
  );
}

export default memo(Education);

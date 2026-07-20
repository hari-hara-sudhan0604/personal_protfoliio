import Timeline from "../../components/Timeline/Timeline";

import certificates from "../../data/certificates";
import { memo } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";

function Certificates() {
  return (
    <AnimatedPage>
      <>
        <Helmet>
          <title>Certificates | Hari Portfolio</title>

          <meta
            name="description"
            content="Professional certifications and technical achievements earned by Hari."
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
          title="Certificates"
          subtitle="Professional Certifications & Learning"
          items={certificates}
        />
      </>
    </AnimatedPage>
  );
}

export default memo(Certificates);

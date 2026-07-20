import ContactSection from "../../components/ContactSection/ContactSection";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../../components/animations/AnimatedPage";
function Contact() {
  return (
    <AnimatedPage>
      <section>
        <Helmet>
          <title>Contact | Hari Portfolio</title>

          <meta
            name="description"
            content="Portfolio of Hari, MERN & Flask Developer."
          />
          <meta property="og:title" content="Hari Portfolio" />
          <meta property="og:description" content="Full Stack MERN Developer" />
          <meta property="og:type" content="website" />

          {/* <meta property="og:url"content="https://your-domain.vercel.app"/> */}
          {/* <meta property="og:image"content="https://your-domain.vercel.app/preview.png"/> */}
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:title" content="Hari Portfolio" />

          <meta name="twitter:description" content="MERN Developer" />

          <meta
            name="twitter:image"
            content="https://your-domain.vercel.app/preview.png"
          />
        </Helmet>
        <ContactSection />
      </section>
    </AnimatedPage>
  );
}

export default Contact;

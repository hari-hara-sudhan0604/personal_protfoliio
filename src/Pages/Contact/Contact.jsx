import ContactSection from "../../components/ContactSection/ContactSection";
import { Helmet } from "react-helmet-async";
import AnimatedPage
from "../../components/animations/AnimatedPage";
function Contact(){

return(
<AnimatedPage>
<section>
<Helmet>

<title>
Contact | Hari Portfolio
</title>

<meta

name="description"

content="Portfolio of Hari, MERN & Flask Developer."

/>

</Helmet>
<ContactSection/>

</section>
</AnimatedPage>
)

}


export default Contact;
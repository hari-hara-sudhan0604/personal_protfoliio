import ContactSection from "../../components/ContactSection/ContactSection";
import { Helmet } from "react-helmet-async";

function Contact(){

return(

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

)

}


export default Contact;
import Today from "../Contact/today";
import Cube from "../Contact/cube";
import New from "../Contact/new";
import Cursor from "../Cursor";
import { Helmet } from 'react-helmet-async';
function Contact(){
    return(
        <>
        <Helmet>
                <title>Contact Us | EcombitHub</title>
                <meta name="description" content="Get in touch with EcombitHub for all your Shopify store needs. Our expert team is ready to assist with setup, customization, marketing, and more. Contact us today for customized solutions and exceptional support." />
                <link rel="canonical" href="https://ecombithub.com/contact" />
            </Helmet>
        <Today/>
        <Cube/>
        <New/>
        <Cursor/>
        </>
    )
}
export default Contact;
import Expand from "../Pageapp/expand";
import Explore from "../Pageapp/explore";
import Brand from "../Pageapp/brand";
import Custum from "../Pageapp/custom";
import Cursor from "../Cursor";
import Blogpage from "../Pageapp/blogpage";
import { Helmet } from 'react-helmet-async';
function Connect() {

    return (
        <>
            <Helmet>
                <title>Custom Shopify App Development & Integration | EcombitHub</title>
                <meta name="description" content="Ecombithub offers expert Shopify app development services to build the perfect solution for your unique business needs. From customize, deploy, integration to advanced features, our team can create a tailored app to streamline your operations and boost sales." />
                <link rel="canonical" href="https://ecombithub.com/app" />
            </Helmet>
            <Expand />
            <Explore />
            <Brand />
            <Custum />
            <Cursor />
            <Blogpage />
        </>
    )
}
export default Connect;
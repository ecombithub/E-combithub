
import Local from "../Blog/local";
import Bar from "../Blog/bar";
import Mark from "../Blog/Mark";
import Cursor from "../Cursor";
import ScrollTo from "../Blog/scroll";
import { Helmet } from 'react-helmet-async';
function Blog() {
    return (
        <>
            <Helmet>
                <title>EcombitHub Blog - Stay Up To Date on All Topics</title>
                <meta name="description" content="Welcome to EcombitHub blog. We will be discussing guides, tips, and insights on everything related to Shopify from our Shopify experts. " />
                <link rel="canonical" href="https://ecombithub.com/blog" />
            </Helmet>
            <Bar />
            <Mark />
            <Local />
            <Cursor />
            <ScrollTo />
        </>
    )
}
export default Blog;
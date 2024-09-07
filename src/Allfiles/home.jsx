import React from 'react';
import { Helmet } from 'react-helmet-async';
import Complete from "../Home/complete";
import Ourclicent from "../Home/ourClient";
import Powerfull from "../Home/powerFulltoo";
import Tech from "../Home/technology";
import Exclusive from "../Home/exclusive";
import Store from "../Home/store";
import Every from "../Home/everything";
import Trun from "../Home/trun";
import Cost from "../Home/costumer";
import Cursor from "../Cursor";
import Local from "../Blog/local";
import Head from "../Home/head";
import DesginEverything from "../Home/desginEverything";
import SpeedPlus from "../Home/speedPlus";
import SpeedUx from "../Home/speedUx";
import BuildStore from "../Home/buildStore";
import Customise from "../Home/customise";

function Home() {
    return (
        <>
            <Helmet>
                <title>EcombitHub Shopify Expert Solution</title>
                <meta name="description" content="Ecombithub offers complete Shopify store solutions, with expertise in speed optimization, UI/UX audits, new store builds, custom checkout, personalized elements, and custom made services. Enhance your Shopify experience with our expert solution. " />
                <link rel="canonical" href="https://ecombithub.com/" />
            </Helmet>
            {/* <Head /> */}
            <Complete  />
            <Ourclicent />
            <Powerfull />
            <DesginEverything />
            <Exclusive />
            <SpeedPlus />
            <SpeedUx />
            <BuildStore />
            <Customise />
            <Cost />
            <Cursor />
        </>
    );
}

export default Home;

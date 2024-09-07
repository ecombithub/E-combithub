import React from 'react';
import { Helmet } from 'react-helmet-async';
import Higher from "../About/higher";
import Client from '../About/client';
import Expert from '../About/expert';
import Offer from "../About/complete-shopify";
import Tech from '../About/tech';
import Cursor from '../Cursor';
import Blogpage from "../Pageapp/blogpage";

function About() {
  return (
    <>
      <Helmet>
        <title> EcombitHub Shopify Development Agency</title>
        <meta name="description" content="EcombitHub is all in one Shopify store solutions. Our experienced team specializes in custom theme development, store optimizations, and more. Learn how we can help take your online business to the next level." />
        <link rel="canonical" href="https://ecombithub.com/about" />
      </Helmet>
      <Higher />
      {/* <Client /> */}
      <Expert />
      <Offer />
      <Tech />
      <Cursor />
    </>
  );
}

export default About;

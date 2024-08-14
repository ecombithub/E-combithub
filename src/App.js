import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Allfiles/home';
import Blog from './Allfiles/Blog';
import About from './Allfiles/About';
import Contact from './Allfiles/contact';
import Design from './Allfiles/design';
import Migration from './Allfiles/Migration';
import Apppage from './Allfiles/Pageapp';
import Store from './Allfiles/Store';
import Speed from './Allfiles/Speed';
import Seo from './Allfiles/seo';
import Mega from './Allfiles/Megamenu';
import Build from './Allfiles/Build';
import Animation from '../src/Allfiles/Animation';
import Header from './Header';
import Footer from './Footer';
import ScrollTo from './Allfiles/scroll-to-top';
import Shopifyapp from './shopify-blogs/shopify-app';
import Shopifyapi from './shopify-blogs/shopify-apikey';
import Cancelsubapp from './shopify-blogs/cancel-subscription-app';
import Cancelsubshopify from './shopify-blogs/cancel-sub-shopify';
import Publishapp from './shopify-blogs/publish-app-shopify';
import Chooseapp from './shopify-blogs/choose-right-app';
import Convertstore from './shopify-blogs/convert-shopify-store';
import Promoteapp from './shopify-blogs/promote-shopify';
import Hireshopify from './shopify-blogs/hire-shopify';
import Installapp from './shopify-blogs/install-shopify-app';
import Affiliateprogram from './shopify-blogs/affiliate-program';
import Createplan from './shopify-blogs/create-market';
import Getreview from './shopify-blogs/get-review';
import Termservices from './Allfiles/termservices';
import Privacy from './Allfiles/privacy';

import '../src/assest/homes.css';
import '../src/assest/Blog.css';
import '../src/assest/About.css'
import '../src/assest/contact.css';
import '../src/assest/Design.css';
import '../src/assest/Migrate.css';
import '../src/assest/Pageapp.css';
import '../src/assest/Store.css';
import '../src/assest/message.css';
import '../src/assest/Speed.css';
import '../src/assest/seo.css';
import '../src/assest/Build.css';

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderOnPaths = ['/blog', '/shopify/app/build', '/shopify/app/api-key', '/shopify/app/cancel-subscription', '/shopify/subscription-cancel', '/shopify/app/right-choose', '/shopify/store-convert-to-mobile-app', '/shopify/app/promote', '/shopify/app/developer-hire', '/shopify/app/install', '/shopify/app/marketing-plan', '/shopify-store-affiliate-program', '/terms-and-conditions', '/privacy-policy', '/shopify/app/publish'];
  // const shouldHideHeader = hideHeaderOnPages.includes(location.pathname);
  const [isLoading, setIsLoading] = useState(true);
  const shouldHideHeader = hideHeaderOnPaths.some(path => location.pathname.startsWith(path));
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, isLoading]);

  const shouldShowScrollTo = !hideHeaderOnPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="main_root">
      {isLoading && <Animation />}
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/build" element={<Build />} />
        <Route exact path="/design" element={<Design />} />
        <Route exact path="/migration" element={<Migration />} />
        <Route exact path="/app" element={<Apppage />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/speed" element={<Speed />} />
        <Route exact path="/seo" element={<Seo />} />
        <Route exact path="/meg" element={<Mega />} />
        <Route exact path="/terms-and-conditions" element={<Termservices />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/shopify/app/build" element={<Shopifyapp />} />
        <Route exact path="/shopify/app/api-key" element={<Shopifyapi />} />
        <Route exact path="/shopify/app/cancel-subscription" element={<Cancelsubapp />} />
        <Route exact path="/shopify/subscription-cancel" element={<Cancelsubshopify />} />
        <Route exact path="/shopify/app/publish" element={<Publishapp />} />
        <Route exact path="/shopify/app/right-choose" element={<Chooseapp />} />
        <Route exact path="/shopify/store-convert-to-mobile-app" element={<Convertstore />} />
        <Route exact path="/shopify/app/promote" element={<Promoteapp />} />
        <Route exact path="/shopify/app/developer-hire" element={<Hireshopify />} />
        <Route exact path="/shopify/app/install" element={<Installapp />} />
        <Route exact path="/shopify/app/marketing-plan" element={<Createplan />} />
        <Route exact path="/shopify-store-affiliate-program" element={<Affiliateprogram />} />
        <Route exact path="/shopify/app/reviews" element={<Getreview />} />
      </Routes>
      {shouldShowScrollTo && <ScrollTo />}
      <Footer />
    </div>
  );
}

export default App;








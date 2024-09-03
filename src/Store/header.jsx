import React, { useState, useRef, useEffect } from 'react';
import { BiSolidXCircle } from "react-icons/bi";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import gsap from 'gsap';
import Mega from '../Allfiles/Megamenu';
import IMAGES from '../Allfiles/image';
import { useLocation } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

function Head() {
    const navRef = useRef(null);
    const megaMenuRef = useRef(null);
    const dropServiceRef = useRef(null);
    const dropBlogRef = useRef(null);

    const [megaVisible, setMegaVisible] = useState(false);
    const [servicesClicked, setServicesClicked] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [blogClicked, setBlogClicked] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);
    const [scrollThreshold, setScrollThreshold] = useState(550);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activeLink, setActiveLink] = useState(null);

    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        if (path.includes('/services') || path.includes('/app') || path.includes('/store')) {
            setActiveLink('services');
        } else if (path.includes('/blog')) {
            setActiveLink('blog');
        } else if (path.includes('/about')) {
            setActiveLink('about');
        } else if (path.includes('/contact')) {
            setActiveLink('contact');
        } else {
            setActiveLink(null);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                megaMenuRef.current && !megaMenuRef.current.contains(event.target)
            ) {
                setMegaVisible(false);
                setActiveLink(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (servicesClicked && dropServiceRef.current) {
            gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
        } else if (!servicesClicked && dropServiceRef.current) {
            gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
        }
    }, [servicesClicked]);

    useEffect(() => {
        if (blogClicked && dropBlogRef.current) {
            gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
        } else if (!blogClicked && dropBlogRef.current) {
            gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
        }
    }, [blogClicked]);

    const handleMegaClick = () => {
        setMegaVisible(!megaVisible);
    };

    const handleMegaLinkClick = () => {
        setMegaVisible(!megaVisible);
        setServicesClicked(true);
        setBlogClicked(false);
        setActiveLink('services');
    };

    const handleServicesClick = (e) => {
        e.stopPropagation();
        setServicesClicked(!servicesClicked);
        setBlogClicked(false);
    };

    const handleBlogClick = (e) => {
        e.stopPropagation();
        setBlogClicked(!blogClicked);
        setServicesClicked(false);
    };

    const handleMouseEnter = () => {
        setMegaVisible(true);
    };


    const handleOtherLinkClick = (link) => {
        setServicesClicked(false);
        setMenuOpen(false);
        setMegaVisible(false);
        setActiveLink(link);
    };

    const handleOtherLinkMouseEnter = () => {
        if (!servicesClicked, !blogClicked) {
            setMegaVisible(false);
        }
    };

    const handleHideClick = () => {
        setMegaVisible(false);
    };

    const handleDocumentClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setMenuOpen(false);
            setMegaVisible(false);
            setServicesClicked(false);

        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(prevState => !prevState);

    return (

        <header ref={navRef} className='headerr'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='logo'>
                        <div className="brand-logo ">
                            <Link to="/">
                                <img src={IMAGES.bithub} alt="EcombitHub" exact to="/" onClick={handleOtherLinkClick} itemprop="logo" />
                            </Link>
                        </div>
                        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                            <IoMenu />
                        </div>
                        <nav>
                            <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
                                <ul className='nav-list'>
                                    <div className="brand-logo1">
                                        <Link to="/"> <img src={IMAGES.bithub} alt="EcombitHub" itemprop="logo" onClick={handleOtherLinkClick} /></Link>
                                    </div>
                                    <li className='first-home-li' style={{ color: navbarColor ? 'white' : 'white' }}>
                                        <div className='home-image-nav'>
                                            <div className='home-image-face'>
                                                <img src={IMAGES.home} alt="logo" />
                                            </div>
                                            <div className="home-image-content">
                                                <NavLink activeClassName="active" style={{ color: "white" }} className="nav-link" aria-current="page" exact to="/" onClick={handleOtherLinkClick} >Home</NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='product-shopify-show-after'>
                                        <NavLink
                                            onClick={handleMegaLinkClick}
                                            style={{ color: activeLink === 'services' ? "#fe3e5e" : navbarColor ? 'white' : 'white' }}
                                            className="drop_blog"
                                            aria-current="page"
                                        >
                                            Service
                                        </NavLink>
                                        {megaVisible && (
                                            <ul ref={megaMenuRef} className="product-shopify show">
                                                <Mega onLinkClick={() => handleOtherLinkClick('services')} />
                                            </ul>
                                        )}
                                    </li>

                                    <li className='product-shopify-show-before' onClick={handleServicesClick} style={{ backgroundColor: servicesClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
                                        <div className='servies-content'>
                                            <div className='serveries-flex'>
                                                <img src={IMAGES.Service} alt="logo" />
                                            </div>
                                            <div className='servies-elements'>
                                                <NavLink activeClassName="active" style={{ color: servicesClicked ? "#fe3e5e" : "black" }} className={`drop_blog ${servicesClicked ? "services-active" : ""}`} aria-current="page" onClick={handleServicesClick} >
                                                    Service {servicesClicked ? <FaChevronUp className='right-show' /> : <FaChevronDown className='right-show' />}

                                                </NavLink>

                                            </div>
                                        </div>
                                        {servicesClicked && (
                                            <div ref={dropServiceRef} className='drop-servie'>
                                                <ul>
                                                    <Link to="/app" onClick={handleOtherLinkClick} >  <li>
                                                        <div className="servics-page-flex-nav">
                                                            <div className="servics-images-start">
                                                                <img src={IMAGES.Build1} alt="logo" />
                                                            </div>
                                                            <div className="servics-elements-start">
                                                                <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/app">App <span className='life-shopify'>Integration</span></NavLink>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    </Link>


                                                </ul>

                                                <ul>
                                                    <Link to="/store" onClick={handleOtherLinkClick} >  <li>
                                                        <div className="servics-page-flex-nav">
                                                            <div className="servics-images-start">
                                                                <img src={IMAGES.settings} alt="logo" />
                                                            </div>
                                                            <div className="servics-elements-start">
                                                                <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/store">Store <span className='life-shopify'>Customization</span></NavLink>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    </Link>


                                                </ul>
                                            </div>


                                        )}
                                    </li>
                                    <li className='first-blog-section'>
                                        <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
                                    </li>

                                    <li className='second-blog-section' onClick={handleBlogClick} style={{ backgroundColor: blogClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
                                        <div className='blog-section-navabr' >
                                            <div className="blog-flex" >
                                                <div className="blog-image-flex">
                                                    <img src={IMAGES.about} alt="logo" />
                                                </div>
                                                <div className="blog-elements-flex"  >
                                                    <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
                                                </div>
                                            </div>


                                        </div>
                                    </li>

                                    <li className='about-home-page'>
                                        <div className="about-flex-nav">
                                            <div className="about-image-flex">
                                                <img src={IMAGES.blog} alt="logo" />
                                            </div>
                                            <div className='about-element-flex'>
                                                <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/about" onClick={handleOtherLinkClick} >About</NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='content-home'>
                                        <div className="about-flex-nav">
                                            <div className="about-image-flex">
                                                <img src={IMAGES.content0} alt="logo" />
                                            </div>
                                            <div className='about-element-flex'>
                                                <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/contact" onClick={handleOtherLinkClick} >Contact Us</NavLink>
                                            </div>
                                        </div>
                                    </li>


                                    <Link to="https://calendly.com/ecom-support/shopify-expert"><button id='us' exact to="/" onClick={handleOtherLinkClick} ><span className="rotate-container">
                                        <span className="rotate-text">B</span>
                                        <span className="rotate-text">o</span>
                                        <span className="rotate-text">o</span>
                                        <span className="rotate-text">k</span>
                                        <span className="rotate-text">&nbsp;</span>
                                        <span className="rotate-text">a</span>
                                        <span className="rotate-text">&nbsp;</span>
                                        <span className="rotate-text">C</span>
                                        <span className="rotate-text">a</span>

                                        <span className="rotate-text">l</span>
                                        <span className="rotate-text">l</span>
                                    </span></button></Link>
                                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                                        <IoClose />
                                    </div>

                                </ul>
                            </div>
                        </nav>


                    </div>
                </div>
            </div>
        </header>

    );
}

export default Head;


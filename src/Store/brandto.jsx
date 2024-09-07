import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Brandto() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementor.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.branding--section-elementor').classList.add('in-view');
        }
    }, [inView]);

  

    return (
        <>
            <div className='branding--section-elementor' ref={ref}>
                <div className="wrapper">
                    <div className="branding-section-flex">
                        <div className="branding-section-element" ref={technologyElement}>
                            <h2>Branding  <span style={{ color: "#fc5569" }}>Element Integration</span> </h2>
                            <p>Integrating your brand's unique elements into your Shopify store for creating a cohesive shopping experience. This involves incorporating your brand's logo, color scheme,  tagline, and other branding elements across your website to reflect your identity and values. </p>
                        </div>
                        <div className='branding-section-image' ref={elementor}>
                            <img src={IMAGES.brand123} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Brandto;
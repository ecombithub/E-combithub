import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Cro() {

    // const [ref, inView] = useInView({
    //     threshold: 0.2,
    // });

    // const technologyElement = useRef(null);
    // const elementor = useRef(null);
    // const [hasAnimated, setHasAnimated] = useState(false);

    // useEffect(() => {
    //     if (inView && !hasAnimated) {
    //         gsap.fromTo(
    //             technologyElement.current,
    //             { opacity: 0, y: 250 },
    //             { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    //         );

    //         gsap.fromTo(
    //             elementor.current,
    //             { opacity: 0, y: -250 },
    //             { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    //         );

    //         setHasAnimated(true);
    //     }
    // }, [inView, hasAnimated]);

    // useEffect(() => {
    //     if (inView) {
    //         document.querySelector('.cro--section-seo').classList.add('in-view');
    //     }
    // }, [inView]);

    return (
        <>
            <div className="cro--section-seo">
                <div className="wrapper">
                    <div className='cro-friendly customization-flex'>
                        <div className='cro-friendly customization-image'>
                            <img src={IMAGES.cro1} alt="" />
                        </div>
                        <div className='cro-friendly customization-element'>
                            <h2>CRO/SEO friendly customization.</h2>
                            <p>Optimizing Shopify store conversions rate and search engines visibility to improve user experience and discoverability. EcombitHub implement advance CRO and SEO best practices to increase organic traffic, responsive design, and fast loading times. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cro;
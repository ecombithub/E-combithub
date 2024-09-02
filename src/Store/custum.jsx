import IMAGES from "../Allfiles/image";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Custum() {

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
    //             { opacity: 0, x: -250 },
    //             { opacity: 1, x: 0, duration: 1, delay: 0.3 }
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
    //         document.querySelector('.custum--section-features').classList.add('in-view');
    //     }
    // }, [inView]);




    return (
        <>
            <div className="custum--section-features" >
                <div className="wrapper">
                    <div className="custum-section-item">
                        <div className="custum-section-item-elements">
                            <h2> <span style={{ color: '#95bf46' }}>  Custom Features and  </span> Third Party Integration</h2>
                            <div className="display-section-Optimization">
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>Use Hubsyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization.

                                        </p>
                                    </div>
                                </div>
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>Enjoy complimentary migratin and frictionless implementation with ayour own plus account manager.
                                        </p>
                                    </div>
                                </div>
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>Easy move elements and play around with different color schemes and fonts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custum-section-item-image">
                           <img src={IMAGES.custom2} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Custum;
import IMAGES from "../Allfiles/image";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Product() {

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
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementor.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.display--section-product').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className='display--section-product' ref={ref}>
                <div className='wrapper'>
                    <div className="product-section-flex">
                        <div className="product-section-image" ref={technologyElement}>
                            <img src={IMAGES.custom1} alt="" />
                        </div>
                        <div className="product-section-element" ref={elementor}>
                            <h2> <span style={{ color: '#95bf46' }}>Product Display </span> Optimization</h2>
                            <div className="display-section-Optimization">
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>High-quality images and videos represent your products, as this helps build trust and gives customers a clear idea of what they are purchasing.

                                        </p>
                                    </div>
                                </div>
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>Ensure that product descriptions are concise and informative, highlighting key features and benefit of product.
                                        </p>
                                    </div>
                                </div>
                                <div className="display-section-Optimization-line">
                                    <div className="display-section-Optimization-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path></svg>
                                    </div>
                                    <div className="display-section-Optimization-elements">
                                        <p>Organize product listings with intuitive categorization and filtering options, allowing customers to easily navigate your store and find exactly what they're looking for. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;
import IMAGES from "../Allfiles/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey " }}
            onClick={onClick}
        />
    );
}
function Cost() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // nextArrow: <Arrow />,
        // prevArrow: <Arrow />,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,


                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]

    };

    const [ref, inView] = useInView();
    const brand = useRef(null);
    const [autoplay, setAutoplay] = useState(false);
    const totalStoresRef = useRef(null);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                totalStoresRef.current,
                { textContent: "0" },
                {
                    textContent: "3000",
                    duration: 1,
                    ease: "power1.inOut",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        totalStoresRef.current.textContent = Math.floor(totalStoresRef.current.textContent);
                    },
                    onComplete: function () {
                        totalStoresRef.current.textContent = "3000+";
                    }
                }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    return (
        <>

            <div className='customer--section' ref={ref}>
                <div className="customer--section-work">
                    <div className='wrappered'>
                        <div className='customer--section-our'>
                            <h2>
                                Our <span ref={totalStoresRef} style={{ color: "rgb(252, 85, 105)" }}>0</span> customers in their words
                            </h2>
                            <p>The great appreciation of our customers speaks louder than us!</p>
                        </div>
                    </div>

                    <div className='customer--section-slider'>
                        <div className="wrappers">
                            <Slider {...settings}>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.Ellipse1} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.Ellipse} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Joanne</h4>
                                                <p>Nested Natural</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.fum2} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.fum102} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Jay</h4>
                                                <p>Fum</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.codester} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.codester1} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Josue Mora</h4>
                                                <p>Codistry</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.psy3} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.psy2} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Bradley Keys</h4>
                                                <p>All Star Digital</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.psy} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.psy1} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Josef Kara</h4>
                                                <p>PSY commerce</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.tes2} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.tes1} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Ole</h4>
                                                <p>Strand Media</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.neola} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.neola1} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Andrea Hauer</h4>
                                                <p>Neola Design</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.clientlogo} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.clientlogo1} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Ely KhaKshouri</h4>
                                                <p>Retrospec</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="customer-section-slider">
                                    <img src={IMAGES.clientlooo} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.last} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <h4>Alex Fetanat</h4>
                                                <p>GemFind</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                 */}

                            </Slider>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Cost;


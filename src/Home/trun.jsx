// // import ph from '../images/phone.gif'
// // function Trun() {
// //     return (
// //         <>
// //             <div className='mobile--app--section'>
// //                 <div className='wrapper'>
// //                     <div className='container'>
// //                         <div className='mobile--app--left'>
// //                             <div className='mobile--app--left_side'>
// //                                 <img src={ph} />
// //                             </div>
// //                             <div className='mobile--app--right'>
// //                                 <div className='mobile--app--store'>
// //                                     <h2>Turn Your Shopify Store into mobile app!</h2>
// //                                     <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy  complimentary migration and  account manager.</p>
// //                                     <button id='mobile--btn'>Start 30 days trial</button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }
// // export default Trun;










// import React, { useState, useRef } from 'react';
// import Slider from "react-slick";
// import IMAGES from '../Allfiles/image';
// import debounce from 'lodash/debounce';


// function SampleNextArrow(props) {

//     const { className, style, onClick } = props;
//     return (
//         <div className={className} style={{ ...style, position: "absolute", right: "-10%", zIndex: 1 }} onClick={onClick}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <g clipPath="url(#clip0_343_1384)">
//                     <path d="M16.172 10.9967L10.808 5.63275L12.222 4.21875L20 11.9967L12.222 19.7747L10.808 18.3608L16.172 12.9967H4V10.9967H16.172Z" fill="white"></path>
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_343_1384">
//                         <rect width="24" height="24" fill="white"></rect>
//                     </clipPath>
//                 </defs>
//             </svg>
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className} style={{ ...style, position: "absolute", left: "-10%", zIndex: 1 }} onClick={onClick}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <g clipPath="url(#clip0_343_1389)">
//                     <path d="M7.828 10.9967L13.192 5.63275L11.778 4.21875L4 11.9967L11.778 19.7747L13.192 18.3608L7.828 12.9967H20V10.9967H7.828Z" fill="white"></path>
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_343_1389">
//                         <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"></rect>
//                     </clipPath>
//                 </defs>
//             </svg>
//         </div>
//     );
// }

// function CenterIcon({ onClick }) {
//     return (
//         <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="center-icon" onClick={onClick}>
//             <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z" fill="white" />
//             <path d="M53.3333 40L33.3333 51.547V28.453L53.3333 40Z" fill="black" />
//         </svg>
//     );
// }

// function Trun() {
//     const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//     const [isVideoPlay, setIsVideoPlay] = useState(false);
//     const [isVideo, setIsVideo] = useState(false);
//     const videoRef = useRef(null);
//     const sliderRef = useRef(null);

//     const settings = {
//         dots: false,
//         fade: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         waitForAnimate: false,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         beforeChange: (current, next) => {
//             if (videoRef.current && sliderRef.current && current === 0) {
//                 videoRef.current.pause();
//                 setIsVideoPlaying(false);
//                 sliderRef.current.slickGoTo(next);
//             }
//         }
//     };

//     const handleVideoToggle = debounce(() => {
//         if (videoRef.current) {
//             if (isVideoPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsVideoPlaying(!isVideoPlaying);
//         }
//     }, 300);

//     const handleVideo = debounce(() => {
//         if (videoRef.current) {
//             if (isVideoPlay) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsVideoPlay(!isVideoPlay);
//         }
//     }, 300);

//     const handle = debounce(() => {
//         if (videoRef.current) {
//             if (isVideo) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsVideo(!isVideo);
//         }
//     }, 300);


//     return (
//         <div className='mobile--app--section-all'>
//             <div className='wrapper'>
//                 <div className='container'>
//                     <div className="slider-container">
//                         <Slider ref={sliderRef} {...settings}>
//                             <div className='moble-slide-section'>
//                                 <div className="video-wrapper">
//                                     <video
//                                         ref={videoRef}
//                                         controls
//                                         onClick={handleVideoToggle}
//                                     >
//                                         <source src="https://cdn.shopify.com/videos/c/vp/d21e3aca5a4c417698e58ad956025dcf/d21e3aca5a4c417698e58ad956025dcf.HD-720p-1.6Mbps-12370267.mp4" type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                     {!isVideoPlaying && <CenterIcon onClick={handleVideoToggle} />}
//                                 </div>
//                                 <div className='block__homereview-video-infocontent'>
//                                 <div class="block__homereview-video-projectdesc">
//                                     <p>“Arctic Gray has been instrumental in enhancing user experience, increasing conversion rates, and providing <strong>essential backend development</strong>    support that has propelled our business growth.”</p>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className='moble-slide-section'>
//                                 <div className="video-wrapper">
//                                     <video
//                                         ref={videoRef}
//                                         controls
//                                         onClick={handleVideo}
//                                     >
//                                         <source src="https://cdn.shopify.com/videos/c/vp/64384718d94f471da3aecf36ed98b837/64384718d94f471da3aecf36ed98b837.SD-480p-0.9Mbps-12370268.mp4" type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                     {!isVideoPlay && <CenterIcon onClick={handleVideo} />}
//                                 </div>
//                             </div>
//                             <div className='moble-slide-section'>
//                                 <div className="video-wrapper">
//                                     <video
//                                         ref={videoRef}
//                                         controls
//                                         onClick={handle}
//                                     >
//                                         <source src="https://cdn.shopify.com/videos/c/vp/146635500abb468c8d81668980b5ddc3/146635500abb468c8d81668980b5ddc3.SD-480p-0.9Mbps-20035335.mp4" type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                     {!isVideo && <CenterIcon onClick={handle} />}
//                                 </div>
//                             </div>
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Trun;



import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import debounce from 'lodash/debounce';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, position: "absolute", right: "-10%", zIndex: 1 }} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_343_1384)">
                    <path d="M16.172 10.9967L10.808 5.63275L12.222 4.21875L20 11.9967L12.222 19.7747L10.808 18.3608L16.172 12.9967H4V10.9967H16.172Z" fill="white"></path>
                </g>
                <defs>
                    <clipPath id="clip0_343_1384">
                        <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, position: "absolute", left: "-10%", zIndex: 1 }} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_343_1389)">
                    <path d="M7.828 10.9967L13.192 5.63275L11.778 4.21875L4 11.9967L11.778 19.7747L13.192 18.3608L7.828 12.9967H20V10.9967H7.828Z" fill="white"></path>
                </g>
                <defs>
                    <clipPath id="clip0_343_1389">
                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"></rect>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function CenterIcon({ onClick }) {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="center-icon" onClick={onClick}>
            <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z" fill="white" />
            <path d="M53.3333 40L33.3333 51.547V28.453L53.3333 40Z" fill="black" />
        </svg>
    );
}

function Trun() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [playingIndex, setPlayingIndex] = useState(null);
    const videoRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => {
            if (playingIndex !== null && current !== next) {
                videoRefs.current[playingIndex].current.pause();
                setPlayingIndex(null);
            }
            setCurrentSlide(next);
        }
    };

    const handleVideoToggle = debounce((index) => {
        if (index === playingIndex) {
            videoRefs.current[index].current.pause();
            setPlayingIndex(null);
        } else {
            videoRefs.current[index].current.play();
            setPlayingIndex(index);
        }
    }, 300);

    return (
        <div className='mobile--app--section-all'>
            <div className='wrapper'>
                <div className='container'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='moble-slide-section'>
                                <div className="video-wrapper">
                                    <video
                                        ref={videoRefs.current[0]}
                                        controls
                                        onClick={() => handleVideoToggle(0)}
                                        onPlay={() => setPlayingIndex(0)}
                                        onPause={() => setPlayingIndex(null)}
                                    >
                                        <source src="https://cdn.shopify.com/videos/c/vp/d21e3aca5a4c417698e58ad956025dcf/d21e3aca5a4c417698e58ad956025dcf.HD-720p-1.6Mbps-12370267.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {playingIndex !== 0 && <CenterIcon onClick={() => handleVideoToggle(0)} />}
                                    <div className='block__homereview-video-infocontent'>
                                        <div class="block__homereview-video-projectdesc">
                                            <p>“Arctic Gray has been instrumental in enhancing user experience, increasing conversion rates, and providing <strong>essential backend development</strong>    support that has propelled our business growth.”</p>
                                        </div>
                                        <div class="block__homereview-video-personinfo">
                                            <div class="block__homereview-video-leftinfo">

                                                <h6 class="block__homereview-video-personname">Jen Apple</h6>
                                                <span class="block__homereview-video-personposition">Jen Apple, Director of E-commerce at Lids</span>
                                            </div>

                                            <div class="block__homereview-video-rightinfo">
                                                <div class="block__homereview-video-partnerlogo">
                                                    <img src="//arcticgrey.com/cdn/shop/files/partner_logo_1.svg?v=1676480841" alt="Shopify partner logo" loading="lazy" class="block__homereview-video-partnerlogo-img" width="" height="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='moble-slide-section'>
                                <div className="video-wrapper">
                                    <video
                                        ref={videoRefs.current[1]}
                                        controls
                                        onClick={() => handleVideoToggle(1)}
                                        onPlay={() => setPlayingIndex(1)}
                                        onPause={() => setPlayingIndex(null)}
                                    >
                                        <source src="https://cdn.shopify.com/videos/c/vp/64384718d94f471da3aecf36ed98b837/64384718d94f471da3aecf36ed98b837.SD-480p-0.9Mbps-12370268.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {playingIndex !== 1 && <CenterIcon onClick={() => handleVideoToggle(1)} />}
                                    <div className='block__homereview-video-infocontent'>
                                        <div class="block__homereview-video-projectdesc">
                                            <p>“Arctic Gray has been instrumental in enhancing user experience, increasing conversion rates, and providing <strong>essential backend development</strong>    support that has propelled our business growth.”</p>
                                        </div>
                                        <div class="block__homereview-video-personinfo">
                                            <div class="block__homereview-video-leftinfo">

                                                <h6 class="block__homereview-video-personname">Jen Apple</h6>
                                                <span class="block__homereview-video-personposition">Jen Apple, Director of E-commerce at Lids</span>
                                            </div>

                                            <div class="block__homereview-video-rightinfo">
                                                <div class="block__homereview-video-partnerlogo">
                                                    <img src="//arcticgrey.com/cdn/shop/files/partner_logo_1.svg?v=1676480841" alt="Shopify partner logo" loading="lazy" class="block__homereview-video-partnerlogo-img" width="" height="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='moble-slide-section'>
                                <div className="video-wrapper">
                                    <video
                                        ref={videoRefs.current[2]}
                                        controls
                                        onClick={() => handleVideoToggle(2)}
                                        onPlay={() => setPlayingIndex(2)}
                                        onPause={() => setPlayingIndex(null)}
                                    >
                                        <source src="https://cdn.shopify.com/videos/c/vp/146635500abb468c8d81668980b5ddc3/146635500abb468c8d81668980b5ddc3.SD-480p-0.9Mbps-20035335.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {playingIndex !== 2 && <CenterIcon onClick={() => handleVideoToggle(2)} />}
                                    <div className='block__homereview-video-infocontent'>
                                        <div class="block__homereview-video-projectdesc">
                                            <p>“Arctic Gray has been instrumental in enhancing user experience, increasing conversion rates, and providing <strong>essential backend development</strong>    support that has propelled our business growth.”</p>
                                        </div>
                                        <div class="block__homereview-video-personinfo">
                                            <div class="block__homereview-video-leftinfo">

                                                <h6 class="block__homereview-video-personname">Jen Apple</h6>
                                                <span class="block__homereview-video-personposition">Jen Apple, Director of E-commerce at Lids</span>
                                            </div>

                                            <div class="block__homereview-video-rightinfo">
                                                <div class="block__homereview-video-partnerlogo">
                                                    <img src="//arcticgrey.com/cdn/shop/files/partner_logo_1.svg?v=1676480841" alt="Shopify partner logo" loading="lazy" class="block__homereview-video-partnerlogo-img" width="" height="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Trun;
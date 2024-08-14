import React from 'react'
import IMAGES from '../Allfiles/image';

function offer() {
    return (
        <div className='compelete-section'>
            <div className="wrapper">
                <div className="container">
                    <div className='compelete-section-task'>
                        <div className='compelete-section-task-element'>
                            <h2>Complete Shopify Solution Expert</h2>
                            <p>Our team of Shopify experts is dedicated to providing end-to-end support, from custom Shopify store design, advanced app integrations, SEO optimization, or ongoing support, we have the skilled and experienced professionals here to support you every step of the way.</p>
                            <div className='shopify-icons'>
                                <div className='shopify-icons-images'>
                                    <img src={IMAGES.shoping1} alt="" />
                                </div>
                                <div className='shopify-icons-images'>
                                    <img src={IMAGES.shoping3} alt="" />
                                </div>
                                <div className='shopify-icons-images'>
                                    <img src={IMAGES.shoping2} alt="" />
                                </div>
                            </div>
                            <div className='complete-button'>
                            <button className='button'>
                                <span className="rotate-container">
                                    <span className="rotate-text">R</span>
                                    <span className="rotate-text">e</span>
                                    <span className="rotate-text">q</span>
                                    <span className="rotate-text">u</span>
                                    <span className="rotate-text">e</span>
                                    <span className="rotate-text">s</span>
                                    <span className="rotate-text">t</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">a</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">Q</span>
                                    <span className="rotate-text">u</span>
                                    <span className="rotate-text">o</span>
                                    <span className="rotate-text">t</span>
                                    <span className="rotate-text">e</span>
                                </span>
                            </button>
                        </div>
                        </div>
                        <div className='compelete-section-task-images'>
                            <img src={IMAGES.trend} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default offer;




















// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import IMAGES from "../Allfiles/image";

// const SamplePrevArrow = (props) => {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{
//                 display: "block",
//                 left: "-81%",
//                 top: "118%",
//                 backgroundColor: "white",

//             }}
//             onClick={onClick}
//         >
//             <div
//                 style={{
//                     position: "absolute",
//                 }}
//             ></div>
//             <img src={IMAGES.left} />

//         </div>
//     );
// }
// const SampleNextArrow = (props) => {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{
//                 display: "block",
//                 top: "118%",
//                 left: "-73%",
//                 backgroundColor: "white",

//             }}
//             onClick={onClick}
//         >
//             <div
//                 style={{
//                     position: "absolute",
//                 }}
//             ></div>
//             <img src={IMAGES.right} />

//         </div>
//     );
// }
// function Offer() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [

//             {
//                 breakpoint: 555,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },

//         ]
//     };
//     return (
//         <>
//             <div className="offer--sections--client">
//                 <div className="offer--sections--dolor">
//                     <div className="wrapper">
//                         <div className="container">
//                             <div className="offer--sections--bg">
//                                 <div className="offer--sections--first">
//                                     <h2>What we, <span style={{ color: "#FF546A" }}> offering  </span> to our clients.</h2>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

//                                 </div>
//                                 <div className="offer--sections--second">
//                                     <Slider {...settings}>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im1} />
//                                                 <h4>Web Design</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im2} />
//                                                 <h4>App Development</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im1} />
//                                                 <h4>Web Design</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im2} />
//                                                 <h4>App Development</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im1} />
//                                                 <h4>Web Design</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                         <div className="offer--sections--design">
//                                             <div className="offer--sections--images">
//                                                 <img src={IMAGES.im2} />
//                                                 <h4>App Development</h4>
//                                                 <p>Use Hubsyntax to grow your shopifyplus brand plus brand via checkout upsells, one-click u sell and thank</p>
//                                             </div>
//                                         </div>
//                                     </Slider>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Offer;


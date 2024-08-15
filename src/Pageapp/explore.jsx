import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';

function Explore() {

    
    return (
        <>
            <div className="explore--section-perfrom-store" >
                <div className="explore--section-perfrom-title">
                    <div className='wrapper'>
                    <div className="explore--section-perfrom-start">
                        <div className="explore-left-side" >
                            <img src={IMAGES.aa10} />
                        </div>
                        <div className="explore-right">
                            <div className="explore-right-side">
                                
                                <h2>Seamless Shopify App Integration: Take Shopify Store to the Next Level </h2>
                                <p>Enhance Your Shopify store with seamless Shopify app integration. Connecting store to a wide range of the application include 3rd party apps, listed or unlisted apps, and Custom apps specifically developed for your store. </p>
                                {/* <button className='button'><span className="rotate-container">
                                  <span className="rotate-text">K</span>
                                  <span className="rotate-text">n</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">w</span>
                                  <span className="rotate-text">&nbsp;</span>
                                  <span className="rotate-text">M</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">r</span>
                                  <span className="rotate-text">e</span>
                                  </span></button> */}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Explore;
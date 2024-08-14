import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';

function Expand() {

  

    return (
        <>
            <div className="connect--section-perfrom">
                <div className="connect--section-perfrom-sides">
                    <div className="wrapper">
                        <div className="connect--section-perfrom-start">
                            <div className="connect--section-perfrom-left">
                                <div className="expand-left">
                                    
                                    <h1>Shopify App Build, Customize and Deploy </h1>
                                    <p>EcombitHub Shopify app developers are experts in customizing apps that meet your business needs, ensuring a seamless user experience. Whether you need a simple plugin, an extension or a complex multi-feature app, we create customized solutions to fit your specific requirements and ensure smooth deployment for Shopify users.</p>
                                    {/* <div className='connect--section-perfrom-btn'>
                                        <button className='view-to'><span className="rotate-container">
                                            <span className="rotate-text">V</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">w</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">O</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">S</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">s</span>
                                        </span> </button>
                                        <button className='view-side'><span className="rotate-container">
                                            <span className="rotate-text">D</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">s</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">O</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">W</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">k</span>
                                        </span></button>
                                    </div> */}
                                </div>
                            </div>
                            <div className='connect--section-perfrom-image'>
                                <img src={IMAGES.appbg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expand;
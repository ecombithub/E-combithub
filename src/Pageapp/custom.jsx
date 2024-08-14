import React from 'react'
import IMAGES from '../Allfiles/image';

function Custom() {
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

export default Custom;


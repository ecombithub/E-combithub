import React from 'react'
import IMAGES from '../Allfiles/image';
import { Link } from 'react-router-dom';
function Blogpage() {

    return (
        <div className='app-blog-section'>
            <div className='wrapper'>
                <div className="container">
                    <div className="app-blog-section-h2">
                        <h2>Blog</h2>

                        <div className='app-blog-show'>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/app/build'>   <div className='blog-section-all-data'>
                                    <div className='blog-section-all-images'>
                                        <img src={IMAGES.build102} alt="" />
                                    </div>
                                    <div className='blog-section-all-elements'>
                                        <h2>How To Build Shopify App?</h2>
                                        <p>Building a Shopify app is developing software that integrates with the Shopify platform...</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/app/api-key'>      <div className='blog-section-all-data'>
                                <div className='blog-section-all-images'>
                                    <img src={IMAGES.apikey} alt="" />
                                </div>
                                <div className='blog-section-all-elements'>
                                    <h2>Shopify API Key: Definition, Generation, And Benefits</h2>
                                    <p>The Shopify API key is a secure token that allows authorized applications...</p>
                                </div>
                            </div>
                            </Link>
                            </div>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/app/cancel-subscription'>  <div className='blog-section-all-data'>
                                <div className='blog-section-all-images'>
                                    <img src={IMAGES.build102} alt="" />
                                </div>
                                <div className='blog-section-all-elements'>
                                    <h2>How To Cancel Shopify App Subscription? </h2>
                                    <p>Canceling a Shopify app subscription terminates the ongoing service and access to specific functionalities... </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/subscription-cancel'> <div className='blog-section-all-data'>   
                                <div className='blog-section-all-images'>
                                    <img src={IMAGES.app5} alt="" />
                                </div>
                                <div className='blog-section-all-elements'>
                                    <h2>How To Cancel Shopify Subscription? </h2>
                                    <p>Cancel Shopify Subscription is the termination of current arrangement or agreement with Shopify...</p>

                                </div>
                                </div>  
                                </Link>
                            </div>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/app/publish'>   <div className='blog-section-all-data'> 
                                  <div className='blog-section-all-images'>
                                  <img src={IMAGES.pub} alt="" />
                                </div>
                                <div className='blog-section-all-elements'>
                                    <h2>How To Publish App In Shopify App Store? </h2>
                                    <p>Publishing app involves submitting your developed app for review and approval by Shopify, after ...</p>
                                </div>
                            </div>
                            </Link>
                            </div>
                            <div className='blog-section-all-target'>
                            <Link to='/shopify/app/right-choose'>  <div className='blog-section-all-data'>
                                       <div className='blog-section-all-images'>
                                    <img src={IMAGES.app12} alt="" />
                                </div>
                                <div className='blog-section-all-elements'>
                                    <h2>How to Choose Right Shopify App for Your Shopify Store? </h2>
                                    <p>Choosing the right Shopify app greatly enhances store  operations. With on the Shopify App Store...</p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        </div>
                        {/* <button className='button'>
                            <span className="rotate-container">
                                <span className="rotate-text">L</span>
                                <span className="rotate-text">o</span>
                                <span className="rotate-text">a</span>
                                <span className="rotate-text">d</span>
                                <span className="rotate-text">&nbsp;</span>
                                <span className="rotate-text">M</span>
                                <span className="rotate-text">o</span>
                                <span className="rotate-text">r</span>
                                <span className="rotate-text">e</span>
                            </span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpage

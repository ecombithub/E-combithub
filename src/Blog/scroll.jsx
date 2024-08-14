import React, { useState, useEffect } from 'react';
import IMAGES from '../Allfiles/image';

function ScrollTo() {
    const [visible, setVisible] = useState(false);


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);



    return (
        <>
            {/* <div className='scroll-to-top-section'>
                <button class="scroll-to-top " aria-label="Scroll to top" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                    <svg width="28" height="28" fill="black" viewBox="0 0 256 256" >
                        <path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z">
                        </path>
                    </svg>
                </button>
            </div> */}
            <div className='section-scroll'>
                <div className='facebook'>
                    <a target='blank' href='https://www.facebook.com/HubSyntax/'> <img src={IMAGES.scroll6} alt="" /></a>
                </div>

                <div className='instagram'>
                    <a target='blank' href='https://www.instagram.com/hubsyntax/'> <img src={IMAGES.scroll7} alt="" /> </a>
                </div>

                <div className='xcom'>
                    <a target='blank' href='https://x.com/Hubsyntaxdev'><img src={IMAGES.scroll5} alt="" /> </a>
                </div>

                <div className='inlinked'>
                    <a target='blank' href='https://www.linkedin.com/company/86417490/admin/feed/posts/'> <img src={IMAGES.scroll8} alt="" /></a>
                </div>
            </div>
        </>
    );
}

export default ScrollTo;





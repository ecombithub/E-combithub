import IMAGES from "../Allfiles/image";
import axios from 'axios';
import React, { useState } from 'react';

function Today() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const [web, setWeb] = useState('');
    const [sendmessage, setSendmessage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const upload = async (e) => {
        e.preventDefault();

        if (!first || !last || !email || !number || !company || !web) {
            setMessage('Kindly complete all required fields before proceeding.');
            return;
        }

        setLoading(true);
               
        setTimeout(() => {
            setLoading(false);
            setMessage('Email sent successfully');
            
            
            setFirst('');
            setLast('');
            setEmail('');
            setNumber('');
            setCompany('');
            setWeb('');
            setSendmessage('');
        }, 2000); 



        try {
            const response = await axios.post('http://localhost:8006/register', {
                first,
                last,
                email,
                number,
                company,
                web,
                sendmessage
            });

            console.log('Response:', response);

            if (response.status === 200) {
               
             console.log('Email sent successfully');
            } else {
                throw new Error('Error sending email');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            setMessage('Error sending email');
            setLoading(false);
        }
    };

 


    return (
        <>
            <div className="contact-section-page">
                <div className="today-section-contact">
                    <div className="wrapper">
                        <div className="container">
                            <div className="today-section-eco">
                                <div className="today-section-eco-elements">
                                    <h2>Contact <span style={{ color: '#fc5569' }}>Ecombithub Today!</span></h2>
                                    <p>or Just reach out manually to <span className="today-email-info" style={{ color: "#b3414e" }}>hello@hubsyntax.com</span></p>
                                    <div className="today-section-inputs">
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="first">First Name</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.men} alt="First Name Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your first name" value={first}
                                                        onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="last">Last Name</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.men} alt="Last Name Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your last name" value={last}
                                                        onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="email">Email</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.email} alt="Email Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your email address" value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="number">Phone Number</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.calling} alt="Phone Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your phone number" value={number}
                                                        onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="company">Company Name</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.url} alt="Company Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your company name" value={company}
                                                        onChange={(e) => setCompany(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="web">Website URL</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.name} alt="Website Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your website URL" value={web}
                                                        onChange={(e) => setWeb(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="today-section-input-message">
                                        <label htmlFor="message">Message</label><br />
                                        <textarea
                                            id="w3review"
                                            name="w3review"
                                            placeholder="Enter your message here..."
                                            rows="5"
                                            cols="70"
                                            value={sendmessage}
                                            onChange={(e) => setSendmessage(e.target.value)}
                                      
                                        />
                                    </div>
                                    <button onClick={upload} className='button'>
                                        <span className="rotate-container">
                                            <span className="rotate-text">S</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">b</span>
                                            <span className="rotate-text">m</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">t</span>
                                        </span>
                                    </button>
                                    {loading && <p>Loading...</p>}
                                    {message && !loading && <p style={{ color: "red" }}>{message}</p>}
                                </div>
                                <div className="today-section-eco-image">
                                    <img src={IMAGES.content} alt="Content" />
                                    <div className="today-section-absute-image">
                                        <img src={IMAGES.secondcontact} alt="Second Contact" />
                                    </div>
                                    <div className="today-section-absute-content1">
                                        <img src={IMAGES.content1} alt="Content 1" />
                                    </div>
                                    <div className="today-section-absute-content2">
                                        <img src={IMAGES.content2} alt="Content 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Today;

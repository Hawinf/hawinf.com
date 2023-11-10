import React from "react";
import Email from '../../assets/images/gmail.png';
import IG from '../../assets/images/instagram.png';
import TW from '../../assets/images/twitter.png';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <div  className='wrapper-footer' data-aos="fade-down" >
            <div className='container'>
                <div className='footer-content'>
                        <div className='footer-left'>
                            <h1 className='connect'>Let's <span>Connect</span></h1>
                            <p className='copyright'>© 2023 Hawinf. All rights reserved</p>
                        </div>
                        <div >
                            <div className='footer-right'>
                                <img src={Email} 
                                        alt="Image Description"
                                        className='gmail'
                                />
                                <h6>Contact@hawinf.com</h6>
                            </div>
                            <div className='sosmed'>
                                <p>Follow Me On</p>
                                <Link to='https://www.instagram.com/hawinf_/'>
                                    <img src={IG} 
                                        alt="Image Description"
                                        className='icon-sosmed'
                                    />
                                </Link>
                                <Link to='https://twitter.com/HawwnFahmi'>
                                    <img src={TW} 
                                        alt="Image Description"
                                        className='icon-sosmed'
                                    />
                                </Link>
                                
                            </div>
                            
                        </div>
                </div>
                {/* <p>© 2023 Hawinf. All rights reserved</p> */}
            </div>
            
        </div>
    );
};

export default Footer;
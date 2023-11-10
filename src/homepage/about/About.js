import React from "react";
import { Link } from "react-router-dom";
import './about.css';

const About = () => {
    return (
        <div className='wrapper-about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card-judul'  data-aos="fade-right">
                            <h1>View My Work</h1>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='pembungkus' data-aos="fade-left">
                            <div className='card-work-1'>
                                <h1>Binar Car Rental</h1>
                                <Link to='https://hawin.vercel.app/'>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='pembungkus' data-aos="fade-left">
                            <div className='card-work-2'>
                                <h1>Binar Car Rental Admin</h1>
                                <Link to=''>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='pembungkus'  data-aos="fade-right">
                            <div className='card-work-3'>
                                <h1>Landsnature</h1>
                                <Link to='https://landsnature.com/'>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card-work-4' data-aos="fade-left">
                            <h1>Repository</h1>
                            <p>Feel free to explore and review my project on GitHub. You'll find all the code, documentation.</p>
                            <Link to='https://github.com/Hawinf'>
                                <p className='ongithub'>Github</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
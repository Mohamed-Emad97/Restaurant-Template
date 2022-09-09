import React from 'react';
import contactPic from "../../images/Assest/findus.png";
import spoonPic from "../../images/Assest/spoon.png";

export default function Contact() {
    return (
        <>
        <section id="contact" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12 my-2">
                        <div className="content d-flex justify-content-center flex-column h-100">
                            <div className="header">
                                <p className='mb-0 pb-0'>Contact</p>
                                <img src={spoonPic} alt="spoon-pic" className='img-fluid mt-0 pt-0'/>
                                <h2 className='my-3'>
                                    Find Us
                                </h2>
                            </div>
                            <p className='py-2'>
                                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
                            </p>
                            <ul className='list-unstyled my-2'>
                                <li className='mb-3'><h4 className='title'>Opening Hours</h4></li>
                                <li>Mon - Fri 10:00 PM - 02:00 AM</li>
                                <li>Sat - Sun 10:00 PM - 03:00 AM</li>
                            </ul>
                            <button className="btn btnMain p-2 px-4 rounded-1 mt-3 align-self-start">
                                Visit Us
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 my-2">
                        <div className="image">
                            <img src={contactPic} alt="contact-pic" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

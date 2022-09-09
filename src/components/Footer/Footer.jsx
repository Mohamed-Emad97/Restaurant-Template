import React from 'react';
import spoonPic from "../../images/Assest/spoon.png";
import brandPic from "../../images/Assest/gericht.png";

export default function Footer() {
    return (
        <>
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="contact text-center pt-5">
                            <h3 className='h5 my-3'>
                                Contact Us 
                            </h3>
                            <ul className='list-unstyled my-2'>
                                <li className='my-2'>9W 5rd St, New York, NY 10019, USA</li>
                                <li className='my-2'>+1 212-344-1230</li>
                                <li className='my-2'>+1 212-555-1230</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="content text-center">
                            <h2 className='my-4'>gericht</h2>
                            <p className='pb-0 mb-0'>
                                "The Best Way To Find Yourself is To Lose Yourself in The Service Of Others"
                            </p>
                            <img src={spoonPic} alt="spoon-pic" className='img-fluid mt-0 pt-0' />
                            <div className="social mt-4 text-white">
                                <span className="facebook mx-2"><i class="fa-brands fa-facebook"></i></span>
                                <span className="twitter mx-2"><i class="fa-brands fa-twitter"></i></span>
                                <span className="instagram mx-2"><i class="fa-brands fa-instagram"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="workinHours text-center pt-5">
                            <h3 className='h5 my-3'>
                                Working Hours
                            </h3>
                            <ul className='list-unstyled my-2'>
                                <li className='mb-3'>Monday - Friday : <br /> 08:00 am - 12:00 am</li>
                                <li>Saturday - Sunday : <br /> 07:00 am - 11:00 pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="txt text-center mt-3">
                    <p>2022 gericht, All Rights Reserved</p>
                </div>
            </div>
        </footer>
        </>
    )
}

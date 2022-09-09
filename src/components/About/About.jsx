import React from 'react';
import aboutPic from "../../images/Assest/spoon.png";
import mainPic from "../../images/Assest/knife.png";
import aboutGPic from "../../images/Assest/G.png";

export default function About() {
    return (
        <>
        <section id="about" className="py-5 position-relative">
            <div className="container h-100">
                <div className="word center h-100 position-absolute">
                    <img src={aboutGPic} alt="G-Pic"/>
                </div>
                <div className="row aboutRow position-relative">
                    <div className="col-lg-5 col-md-6 my-2">
                        <div className="leftSide text-lg-end text-md-start text-sm-center text-center py-5">
                            <h2 className='mb-0 pb-0'>About Us</h2>
                            <img src={aboutPic} alt="about-spoon" className="img-fluid mt-0 pt-0"/>
                            <p className='my-3'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Impedit ducimus at architecto explicabo voluptatibus! Iste eius sint dolore rem alias?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, numquam.
                            </p>
                            <button className='btn btnMain p-2 px-4 rounded-1'>
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-md-none d-lg-flex d-sm-none d-none my-2">
                        <div className="img text-center">
                            <img src={mainPic} alt="knife-Pic" className='w-25'/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 my-2">
                        <div className="rightSide text-lg-start text-md-start text-sm-center text-center py-5">
                        <h2 className='mb-0 pb-0'>Our History</h2>
                            <img src={aboutPic} alt="about-spoon" className='img-fluid mt-0 pt-0'/>
                            <p className='my-3'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Impedit ducimus at architecto explicabo voluptatibus! Iste eius sint dolore rem alias?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, numquam.
                            </p>
                            <button className='btn btnMain p-2 px-4 rounded-1'>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

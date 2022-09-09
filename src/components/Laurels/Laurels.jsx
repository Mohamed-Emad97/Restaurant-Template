import React from 'react';
import spoonPic from "../../images/Assest/spoon.png";
import laurelsPic from "../../images/Assest/laurels.png";
import logoPic from "../../images/Assest/logo.png";
import {awards} from "../Menu/data.js";

export default function Laurels() {
    return (
        <>
        <section id="laurels" className="py-5 position-relative">
            <div className="logo d-md-none d-sm-none d-none d-lg-block">
                <img src={logoPic} alt="logo-pic" className='w-25' />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 my-2">
                        <div className="header py-2">
                            <p className='mb-0 pb-0'>Awards &amp; Recognation</p>
                            <img src={spoonPic} alt="spoon-pic" className='img-fluid mt-0 pt-0' />
                            <h2 className='mt-3'>
                                Our Laurels
                            </h2>
                        </div>
                        <div className="row">
                            {awards.map((award,index) => (
                                <>
                                <div className="col-md-6 my-4">
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="image">
                                            <img src={award.picUrl} alt={`award-pic-${index+1}`} className="w-75" />
                                        </div>
                                        <div className="txt d-flex flex-column">
                                            <p className='title'>{award.title}</p>
                                            <p className='desc'>{award.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="img">
                            <img src={laurelsPic} alt="laurels-pic" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

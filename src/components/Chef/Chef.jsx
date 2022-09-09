import React from 'react';
import chefPic from "../../images/Assest/chef.png";
import signPic from "../../images/Assest/sign.png";
import spoonPic from "../../images/Assest/spoon.png";

export default function Chef() {
    return (
        <>
        <section id="chef" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="image">
                            <img src={chefPic} alt="chef-pic" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 my-2">
                        <div className="content p-5">
                            <div className="header">
                                <p className='mb-0 pb-0'>Chef's Word</p>
                                <img src={spoonPic} alt="spoon-Pic" className='img-fluid mt-0 pt-0' />
                                <h2 className='my-3'>
                                    What We Believe In
                                </h2>
                            </div>
                            <div className="body">
                                <p className='py-3 mb-3'><span className="icon fs-3 me-2"><i class="fa-solid fa-quote-left"></i></span>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Incidunt, consectetur perferendis nostrum ducimus deserunt quidem quas ea quaerat corporis odit quis dolore. 
                                    Aspernatur laboriosam accusamus dolorem beatae? Magnam, perferendis molestiae.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, inventore.
                                </p>
                                <div className="signature">
                                    <p className='name mb-0 pb-0'>Kevin Lueo</p>
                                    <p className='title'>Chef &amp; Founder</p>
                                </div>
                                <img src={signPic} alt="sign-pic" className='w-25 mt-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

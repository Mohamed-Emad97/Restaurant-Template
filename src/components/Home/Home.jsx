import React from 'react';
import homePic from "../../images/Assest/welcome.png";
import spoon from "../../images/Assest/spoon.png";

export default function Home() {
    return (
        <>
        <section id="home" className='100-vh py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 my-2">
                        <div className="info p-3">
                            <p className='pb-0 mb-0'>Chase The New Flavour</p>
                            <img src={spoon} alt="spoon-pic" className='img-fluid pt-0 mt-0 mb-3'/>
                            <h1 className='my-3'>The Key To Find <br /> Dining</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Perspiciatis animi facere expedita placeat nesciunt eius maxime, velit consequatur quae illo. 
                                Ipsum molestias sunt soluta ut dolore, dolorem temporibus nobis hic? Commodi, vero. 
                                Architecto deleniti ipsam molestias, accusamus recusandae rem neque!
                            </p>
                            <button className='btn btnMain p-2 px-4 rounded-1'>
                                Expolre Menu
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="img">
                            <img src={homePic} alt="home-pic" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

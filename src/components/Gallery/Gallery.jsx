import React from 'react';
import galleryPic1 from "../../images/Assest/gallery02.png";
import galleryPic2 from "../../images/Assest/gallery02.png";
import galleryPic3 from "../../images/Assest/gallery03.png";
import galleryPic4 from "../../images/Assest/gallery04.png";
import spoonPic from "../../images/Assest/spoon.png";

export default function Gallery() {
    // const scrollRef = React.useRef(null);

    // const scroll = (direction) =>{
    //     const {current} = scrollRef;

    //     if(direction === "left"){
    //         current.scrollLeft -= 300;
    //     } else{
    //         current.scrollLeft += 300;
    //     }
    // }


    return (
        <>
        <section id="gallery" className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12 my-2">
                        <div className="content p-4">
                            <div className="header mb-3">
                                <p className='pb-0 mb-0'>Instgram</p>
                                <img src={spoonPic} alt="spoon-pic" className='img-fluid mt-0 pt-0'/>
                                <h2 className='mt-3'>
                                    Photo Gallery
                                </h2>
                            </div>
                            <div className="txt">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Tempora voluptate expedita qui tenetur iste in dicta, quod explicabo blanditiis ex!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, facilis.
                                </p>
                                <buttom className="btn btnMain rounded-1 p-2 px-4">View More</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 my-2">
                        <div className='image-container position-relative owl-carousel owl-theme'>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                                    <div className="imgbox position-relative">
                                        <img src={galleryPic1} alt="Gallery-Pic-1" className='img-fluid'/>
                                        <div className="overlay center">
                                            <span className="icon">
                                                <i class="fa-brands fa-instagram"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                                    <div className="imgbox position-relative">
                                        <img src={galleryPic2} alt="Gallery-Pic-2" className='img-fluid'/>
                                        <div className="overlay center">
                                            <span className="icon">
                                                <i class="fa-brands fa-instagram"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                                    <div className="imgbox position-relative">
                                        <img src={galleryPic3} alt="Gallery-Pic-3" className='img-fluid'/>
                                        <div className="overlay center">
                                            <span className="icon">
                                                <i class="fa-brands fa-instagram"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                                    <div className="imgbox position-relative">
                                        <img src={galleryPic4} alt="Gallery-Pic-4" className='img-fluid'/>
                                        <div className="overlay center">
                                            <span className="icon">
                                                <i class="fa-brands fa-instagram"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

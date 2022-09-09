import React from 'react';
import {wines, cocktails} from "./data";
import menuPic from "../../images/Assest/menu.png";
import spoonPic from "../../images/Assest/spoon.png";

export default function Menu() {
    return (
        <>
        <section id="menu" className="py-5">
            <div className="container">
                <div className="mainHeading text-center py-4">
                    <p className='pb-0 mb-0'>
                        Menu That Fitt Your Palatte  
                    </p>
                    <img src={spoonPic} alt="spoon-pic" className='img-fluid' />
                    <h2 className='my-3'>
                        Today's Special 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="winesMenu text-center">
                            <h3>
                                Wine &amp; Beer
                            </h3>
                            <ul className='list-unstyled my-4'>
                                {wines.map((wine, index) => (
                                    <>
                                    <li key={index} className='item d-flex justify-content-between position-relative'>
                                        <div className="content d-flex flex-column">
                                            <p className="title align-self-start mb-0 pb-0">{wine.title}</p>
                                            <p className="tags align-self-start">{wine.tags}</p>
                                        </div>
                                        <div className="line position-absolute"></div>
                                        <div className="price">
                                            <p>{wine.price}</p>
                                        </div>
                                    </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="img text-center">
                            <img src={menuPic} alt="menu-pic" className='w-75' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="drinksMenu text-center">
                            <h3>
                                Cocktails
                            </h3>
                            <ul className='list-unstyled my-4'>
                                {cocktails.map((cocktail, index) => (
                                    <>
                                    <li key={index} className='item d-flex justify-content-between position-relative'>
                                        <div className="content d-flex flex-column ">
                                            <p className="title align-self-start mb-0 pb-0">{cocktail.title}</p>
                                            <p className="tags align-self-start">{cocktail.tags}</p>
                                        </div>
                                        <div className="line position-absolute"></div>
                                        <div className="price">
                                            <p>{cocktail.price}</p>
                                        </div>
                                    </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <button className="btn btnMain rounded-1 p-2 px-4 my-3">See More</button>
                </div>
            </div>
        </section>
        </>
    )
}

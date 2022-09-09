import React from 'react';
import logo from "../../images/Assest/gericht.png";

export default function Navbar() {
    return (
        <>
        <header className=''>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} alt="Logo-Pic" className='w-25'/>
                    </a>
                    <button className="navbar-toggler small__menu my-md-2 my-sm-2 my-lg-0 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto pe-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link" href="#menu">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftSide center position-relative d-md-flex d-lg-flex d-sm-none d-none">
                        <div className='nav-item mx-4'>
                            <a className='nav-link link' href="#login">Login / Registeration</a>
                        </div>
                        <div className="line"></div>
                        <div className='nav-item mx-4'>
                            <a className='nav-link link' href="#home">Book Table</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

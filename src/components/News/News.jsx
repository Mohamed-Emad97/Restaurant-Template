import React from 'react';
import spoonPic from "../../images/Assest/spoon.png";


export default function News() {

    function emailValidation (e){
        const subBtn = document.querySelector("#sub");
        let emailTxt = e.target.value;
        let emailRgEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(emailTxt);
        if(emailRgEx.test(emailTxt)){
            subBtn.removeAttribute('disabled');
            console.log(true);
        } else {
            subBtn.setAttribute("disabled","true");
            console.log(false);
        }
    }

    return (
    <>
    <section id="news" className="py-5">
        <div className="container">
            <div className="title text-center">
                <p className='mb-0 pb-0'>Newsletter</p>
                <img src={spoonPic} alt="spoon-pic" className='img-fluid mt-0 pt-0' />
                <h2>Subscribe To Out Newsletter</h2>
                <p>and Never Miss Latest Updates!</p>
            </div>
            <form className='d-flex justify-content-center align-items-center mt-5 pt-3 flex-lg-row flex-md-column flex-sm-column flex-column'> 
                <input type="email" className='p-2 w-50 rounded-1 py-2' onChange={emailValidation} name='email' placeholder='E-mail Address'/>
                <button id='sub' type="submit" disabled className='btn btnMain p-2 px-4 rounded-1'>Subscribe</button>
            </form>
        </div>
    </section>
    </>
    )
}

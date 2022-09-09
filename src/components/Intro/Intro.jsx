import React from 'react';
import { useState } from 'react';
import introVideo from "../../images/Assest/meal.mp4";

export default function Intro() {
    const vidRef = React.useRef();
    const [playVideo, setPlayVideo] = useState(false);

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if(playVideo) {
            vidRef.current.pause();
        } else{
            vidRef.current.play();
        }
    }

    return (
        <>
        <section id="intro" className="position-relative vh-100">
            <video src={introVideo} ref={vidRef} type="video/mp4" loop controls={false} muted className="h-100 w-100"></video>
            <div className="overlay center">
                <div className="icon center rounded-circle" onClick={handleVideo}>
                    {playVideo ? <><i class="fa-solid fa-pause"></i></> : <><i class="fa-solid fa-play"></i></>}
                </div>
            </div>
        </section>
        </>
    )
}

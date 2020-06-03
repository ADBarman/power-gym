import React, { useState } from 'react';
import './Banner.scss';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="banner">
           <div className="container">
                <div className="row align-items-center text-white" style={{height:'100vh'}}>
                    <div className="col-md-6 order-2 order-md-0">
                        <h1 className="font-weight-bolder font-weight-normal text-uppercase" style={{height:'100%'}}>The best fitness Studio in Town</h1>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aspernatur delectus, nam adipisci neque eum numquam. Itaque, alias facilis expedita dignissimos.</p>
                        <button className="btn-primary">Join us</button>
                    </div>
                    <div className="col-md-6 video d-flex mt-5 mt-md-0 justify-content-center align-items-center  order-0 order-md-2">
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='aCi_iSDhV7Y' onClose={() => setIsOpen(false)} />
                        <img className="play-icon" onClick={() => setIsOpen(true)} src="https://imgur.com/nhhgPHT.png" alt=""/>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Banner;
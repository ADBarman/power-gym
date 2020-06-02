import React from 'react';
import './Footer.scss';
import youtube from '../../Images/bxl-youtube.png';
import fb from '../../Images/bxl-facebook.png';
import instra from '../../Images/bxl-instagram.png';
import twiter from '../../Images/bxl-twitter.png';
import whatsapp from '../../Images/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container container-id">
                <div className="row">
                    <div className="col-md-3">
                        <a className="text-white LogoFooter" href="/">POWER <span className="logoX">X</span></a>
                    </div>
                    <div className="col-md-2">
                    <h6><a className="text-white font-weight-bold" href="#">Need Help?</a></h6>
                    <h6><a className="text-white" href="#">Help Center</a></h6>
                    <h6><a className="text-white" href="#">Email Support</a></h6>
                    <h6><a className="text-white" href="#">Live Chat</a></h6>
                    <h6><a className="text-white" href="#">Gift Certificates</a></h6>
                    <h6><a className="text-white" href="#">Send Us Feedback</a></h6> 

                    </div>
                    <div className="col-md-2 ">
                        <h6><a className="text-white font-weight-bold" href="#">Digital Resources</a></h6>
                        <h6><a className="text-white" href="#">Articles</a></h6>
                        <h6><a className="text-white" href="#">E-books</a></h6>
                    </div>
                    <div className="col-md-2 text-white socialLogo">
                        <h6 className="font-weight-bold">Connect with Us</h6>
                        <a href="#"><img src={youtube}alt=""/></a>
                        <a href="#"><img className="fb" src={fb} alt=""/></a>
                        <a href="#"><img src={instra} alt=""/></a>
                        <a href="#"><img src={twiter} alt=""/></a>
                        <a href="#"><img src={whatsapp} alt=""/></a><br/>
                        <h6 className="f-top"><a className="text-white" href="">Forums</a></h6>
                    </div>
                    <div className="col-md-3 text-white ">
                        <h6 className="font-weight-bold">Join Our Newsletter</h6>
                        <h6>Get exclusive news, features, and updates from the Shredder Weight Loss Academy</h6>
                    </div>
                </div>
            </div>
            <div  className="col-md-12 copyright">
                <h6>© Copyright 2020 <a href="#">Power Gym</a>. All Right Reserved</h6>
            </div>
        </div>
        
    );
};

export default Footer;
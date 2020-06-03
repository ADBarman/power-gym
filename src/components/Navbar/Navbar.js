import React from 'react';
import './Navbar.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import {  Link } from "react-router-dom";


const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 20){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

    return (
        
            <nav className={isSticky ? "fade in show navbar navbar-expand-sm fixed-top navbar-dark bg-dark " : "fade out show navbar navbar-expand-sm fixed-top navbar-dark " }>
                <div className="container">
                    <Link className="navbar-brand" to="/home">POWER <strong className="text-yellow">X</strong></Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ourClasses">Our Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            /* <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 text-white intro-Style">
                        <h1 className="n-margin"> <span className="fitness">THE BEST FITNESS</span> <br/> STUDIO IN TOWN</h1>
                        <p className="n-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis corporis eveniet omnis nemo optio dignissimos. Nisi, laboriosam ratione? Nesciunt doloribus soluta architecto. Amet, iusto eos. Aliquid aliquam...</p>

                        <button type="button" class="btn btn-warning">JOIN US</button>
                    </div>
                    <div className="col-md-6">
                        <div class="heroVideo">
                            <div class="backgroundX">
                                <div class="verticalLine">
                                    <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(107, 107, 117); border-radius: 50%; padding: 10px; cursor: pointer;">
                                        <g fill="#fff" id="Group" transform="translate(-528.000000, -144.000000)">
                                            <path d="M543,152 L531,158 L531,146 L543,152 L543,152 Z M543,152" id="Shape"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */
        
    );
};

export default NavBar;
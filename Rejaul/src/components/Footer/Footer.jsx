import React from 'react';
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row gx-2">
                    <div className="col-md-3 ">
                        <div>
                            <h5>About us</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti voluptatibus mollitia perspiciatis nam amet quasi nobis fuga quis</p>
                            <div className="footer_socialIcon">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <BsInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 footer_services ">
                        <div className="w-70">
                            <h5>Legal Services</h5>
                            <p>Auto Accident</p>
                            <p>Constraction Loans</p>
                            <p>Real State</p>
                            <p>Finanace Law</p>
                            <p>Tax Disputes</p>
                            <p>Divorce</p>
                            <p>Helth Care</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-md-3">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
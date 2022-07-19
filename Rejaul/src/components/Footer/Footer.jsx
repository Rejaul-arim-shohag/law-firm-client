import React from 'react';
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="footer_content">
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
                    <div>
                        <h5>Explore our work</h5>
                        <p>Auto Accident</p>
                        <p>Constraction Loans</p>
                        <p>Real State</p>
                        <p>Finanace Law</p>
                        <p>Tax Disputes</p>
                        <p>Divorce</p>
                        <p>Helth Care</p>
                    </div>
                    <div>
                        <h5>Legal Services</h5>
                        <p>Auto Accident</p>
                        <p>Constraction Loans</p>
                        <p>Real State</p>
                        <p>Finanace Law</p>
                        <p>Tax Disputes</p>
                        <p>Divorce</p>
                        <p>Helth Care</p>
                    </div>
                    <div>
                        <h5>Keep in Touch</h5>
                        <p><BiTime/>Saturday-Thursday</p>
                        <p><MdLocationOn/>House 93/3, 4th Floor, Block C,</p>
                        <p>Niketan, Gulshan 1, Dhaka 1212</p>
                        <p><AiOutlinePhone/>+07378748783</p>
                        <p><HiOutlineMail/>rejaulkarim@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
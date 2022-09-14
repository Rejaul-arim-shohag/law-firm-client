import React, { useEffect, useState } from 'react';
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { readFooterList } from '../../ApiRequest/APIRequest';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [footers, setFooters] = useState([]);
    useEffect(() => {
        readFooterList()
            .then((result) => {
                setFooters(result)
            })
    }, [])
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
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div>
                        <h5>Legal Services</h5>
                            {
                                footers?.map((item, index)=>{
                                    return(
                                       <h6> <Link key={index} to={item?.link}>{item?.name}</Link></h6>
                                    )
                                })
                            }
                           
                            {/* <h5>Legal Services</h5>
                            <p>Auto Accident</p>
                            <p>Constraction Loans</p>
                            <p>Real State</p>
                            <p>Finanace Law</p> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div>
                            <h5>Keep in Touch</h5>
                            <p><BiTime />Saturday-Thursday</p>
                            <p><MdLocationOn />House 93/3, 4th Floor, Block C,</p>
                            <p>Niketan, Gulshan 1, Dhaka 1212</p>
                            <p><AiOutlinePhone />+07378748783</p>
                            <p><HiOutlineMail />rejaulkarim@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
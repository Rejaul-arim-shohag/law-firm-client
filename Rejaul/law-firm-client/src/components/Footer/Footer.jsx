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
import { readAddress, readFooterList } from '../../ApiRequest/APIRequest';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Footer = () => {
    const [footers, setFooters] = useState([]);
    useEffect(() => {
        readAddress()
        readFooterList()
            .then((result) => {
                setFooters(result)
            })
    }, [])
    const address = useSelector((state) => (state?.address?.addressList));

    return (
        <div className="footer py-5">
            <div className="container">
                <div className="footer_content">
                    <div>
                        <h5 className="mb-4">About us</h5>
                        <p>{address[0]?.aboutUs}</p>
                        <div className="footer_socialIcon">
                            <a href={address[0]?.socialLink.facebook} target="_blank"><FaFacebookF /></a>
                            <a href={address[0]?.socialLink.twitter} target="_blank"> <FaTwitter /></a>
                            <a href={address[0]?.socialLink.linkedin} target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div>
                        <h5 className="mb-4">Quick Link</h5>
                        <h6> <Link  to="/privacyAndPolicy">Privacy Policy</Link></h6>
                        <h6> <Link  to="/termsAndConditions">Terms & Conditions</Link></h6>

                        
                            {
                                footers?.map((item, index)=>{
                                    return(
                                       <h6> <Link key={index} to={item?.link}>{item?.name}</Link></h6>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div>
                            <h5 className="mb-4">Keep in Touch</h5>
                            <p><BiTime style={{fontSize:"20px"}}/>{address[0]?.address.worksDay}</p>
                            <p><MdLocationOn style={{fontSize:"20px"}}/>{address[0]?.address.location}</p>
                            
                            <p><AiOutlinePhone style={{fontSize:"20px"}}/>{address[0]?.address.phone}</p>
                            <p><HiOutlineMail style={{fontSize:"20px"}}/>{address[0]?.address.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import "./Contact.css";
import { BsArrowRight } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-8">
                        <h4>Send A Message</h4>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, non?</p>
                        <div className="row my-3 gx-4">
                            <div className="col-md-6">
                                <input placeholder="Your Name" className="custom-form " type="text" />
                            </div>
                            <div className="col-md-6">
                                <input placeholder="Email Address" className="custom-form" type="text" />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <input placeholder="Your Phone" className="custom-form" type="text" />
                            </div>
                            <div className="col-md-6">
                                <input placeholder="Subject" className="custom-form" type="text" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-12">
                                <input placeholder="Message" className="custom-textArea" type="text" />
                            </div>
                        </div>
                        <button className=" mainButton2">POST COMMENT<BsArrowRight /></button>
                    </div>

                    <div className="col-md-4">
                        <div className="contact_details">
                            <h3 className="contact_heading pt-4 px-4">Contact Info</h3>
                            <div className="row my-5 px-3">
                                <div className="contact_icon col-md-2">
                                    <TiLocationArrow />
                                </div>
                                <div className="contact_info col-md-10">
                                    <p>Location</p>
                                    <p>Dhaka</p>
                                    <p>Bangaladesh</p>
                                </div>
                            </div>
                            <div className="row my-5 px-3">
                                <div className="contact_icon col-md-2">
                                    <MdEmail />
                                </div>
                                <div className="contact_info col-md-10">
                                    <p>Email</p>
                                    <p>rejaulkarim4740@gmail.com</p>
                                </div>
                            </div>
                            <div className="row my-4 px-3">
                                <div className="contact_icon col-md-2">
                                    <FaPhoneAlt />
                                </div>
                                <div className="contact_info col-md-10">
                                    <p>Phone</p>
                                    <p>(+880) 1778839434</p>
                                </div>
                            </div>
                            <div className="px-3 pb-3">
                                <h4 className="text-light">Follow Us</h4>
                                <div className="social_icon d-flex ">
                                    <FaFacebookF />
                                    <BsInstagram />
                                    <AiFillLinkedin />
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
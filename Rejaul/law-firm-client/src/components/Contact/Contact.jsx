import React, { useRef } from 'react';
import Swal from "sweetalert2";
import "./Contact.css";
import { BsArrowRight } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import contactImage from "../../Assets/images/contact.jpg"
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from '../../Helper/FormHelper';
import { CreateMessageRequest } from '../../ApiRequest/APIRequest';

const Contact = () => {
    
    let nameRef, emailRef, mobileRef, subjectRef, messageRef = useRef()
    const handleSendMessage=()=>{
        const name = nameRef.value;
        const email = emailRef.value;
        const mobile = mobileRef.value;
        const subject = subjectRef.value;
        const message = messageRef.value;
        if(IsEmpty(name)){
            ErrorToast("Name Is Required")
        } else if(IsEmail(email)){
            ErrorToast("Valid Email Required")
        } else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Is Required")
        } else if(IsEmpty(subject)){
            ErrorToast("Subject Is Required")
        }else if(IsEmpty(message)){
            ErrorToast("Message Is Required")
        } else{
            CreateMessageRequest(name,email,mobile,subject,message)
            .then((result)=>{
               if(result===true){
                nameRef.value=""
                emailRef.value=""
                mobileRef.value=""
                subjectRef.value=""
                messageRef.value=""
                Swal.fire(
                    'Thank You!',
                    'Ass soon as possible, We will reply!',
                    'success',
                  )
               }
            })
        }
    }
    return (
        <div className="py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-7">
                        <h4>Send A Message</h4>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, non?</p>
                        <div className="row  gx-4">
                            <div className="col-md-6">
                                <input ref={(input)=>nameRef=input} placeholder="Your Name" className="custom-form " type="text" />
                            </div>
                            <div className="col-md-6">
                                <input ref={(input)=>emailRef=input} placeholder="Email Address" className="custom-form" type="text" />
                            </div>
                        </div>
        
                        <div className="row ">
                            <div className="col-md-6">
                                <input ref={(input)=>mobileRef=input} placeholder="Your Phone" className="custom-form" type="text" />
                            </div>
                            <div className="col-md-6">
                                <input ref={(input)=>subjectRef=input} placeholder="Subject" className="custom-form" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-2">
                            <textarea ref={(input)=>messageRef=input} class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                
                            </div>
                        </div>
                        <div className="setCommentBtn mt-2">
                            <button onClick={handleSendMessage} className="mainButton2">SEND A MESSAGE<BsArrowRight /></button>
                        </div>
                    </div>

                    <div className="col-md-5 contact-right-side">
                        <div className="contact_details py-3">
                            <h3 className="contact_heading pt-4 px-4">Contact Info</h3>
                            <div className="d-flex my-4 px-3">
                                <div className="contact_icon mt-2">
                                    <TiLocationArrow />
                                </div>
                                <div className="contact_info ">
                                    <p>Location</p>
                                    <p>Dhaka</p>
                                    <p>Bangaladesh</p>
                                </div>
                            </div>
                            <div className="d-flex my-4 px-3">
                                <div className="contact_icon ">
                                    <MdEmail />
                                </div>
                                <div className="contact_info ">
                                    <p>Email</p>
                                    <p>rejaulkarim@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex my-4 px-3">
                                <div className="contact_icon ">
                                    <FaPhoneAlt />
                                </div>
                                <div className="contact_info ">
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
                            <div className="contact-image d-none">
                                <img src={contactImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
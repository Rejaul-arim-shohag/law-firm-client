import React, { useRef } from 'react';
import Swal from "sweetalert2";
import "./Contact.css";
import curveImg from "../../Assets/images/curve-2.b04970a8.svg"
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from '../../Helper/FormHelper';
import { CreateMessageRequest } from '../../ApiRequest/APIRequest';

const Contact = () => {

    let nameRef, emailRef, mobileRef, subjectRef, messageRef = useRef()
    const handleSendMessage = () => {
        const name = nameRef.value;
        const email = emailRef.value;
        const mobile = mobileRef.value;
        const subject = subjectRef.value;
        const message = messageRef.value;
        if (IsEmpty(name)) {
            ErrorToast("Name Is Required")
        } else if (IsEmail(email)) {
            ErrorToast("Valid Email Required")
        } else if (IsMobile(mobile)) {
            ErrorToast("Valid Mobile Is Required")
        } else if (IsEmpty(subject)) {
            ErrorToast("Subject Is Required")
        } else if (IsEmpty(message)) {
            ErrorToast("Message Is Required")
        } else {
            CreateMessageRequest(name, email, mobile, subject, message)
                .then((result) => {
                    if (result === true) {
                        nameRef.value = ""
                        emailRef.value = ""
                        mobileRef.value = ""
                        subjectRef.value = ""
                        messageRef.value = ""
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
        <div style={{ backgroundColor: "#E9F5EC" }} className="py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5">
                    <h2 className="text-center text-uppercase font-weight-bold">Contact Us Now</h2>
                    <img src={curveImg} style={{ top: "-13px", width: "25%" }} className="position-relative " alt="" />
                    {/* <h5 className="text-secondary col-12 mx-auto col-md-6">Sed perspicias unde omnis iste natus error voluptatem accusantium dolorem laudanme totam rem aperiam eaque quae.</h5> */}
                </div>
                <div className="row gx-5">
                    <div className="col-12 col-md-8 mx-auto">
                        <h4>Leave a Message</h4>
                        <div className="row  gx-4">
                            <div className="col-12 col-md-6 mt-2">
                                <input ref={(input) => nameRef = input} placeholder="Your Name" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                                <input ref={(input) => emailRef = input} placeholder="Email Address" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-12 col-md-6 mt-4">
                                <input ref={(input) => mobileRef = input} placeholder="Your Phone" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                            <div className="col-12 col-md-6 mt-4">
                                <input ref={(input) => subjectRef = input} placeholder="Subject" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-12 col-md-12 mt-4">
                                <textarea ref={(input) => messageRef = input} className="form-control inputTextArea" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="setCommentBtn d-flex justify-content-end mt-4">
                            <button onClick={handleSendMessage} className="btn btn-success px-5 py-3">SEND A MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
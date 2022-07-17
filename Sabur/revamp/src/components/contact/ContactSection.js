import React, {Component, Fragment} from 'react';

// React Bootstrap
import {Button, Form} from "react-bootstrap";

// Image Icons
import locationIcon from "../../assets/images/location-icon.svg";
import mailIcon from "../../assets/images/mail.svg";
import phoneIcon from "../../assets/images/phone.svg";

import fb from "../../assets/images/facebook.svg";
import twit from "../../assets/images/twitter.svg";
import lnkd from "../../assets/images/linkend.svg";
import ins from "../../assets/images/instagram.svg";

// Include Style
import './contact.css';

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <div className="pt-5 pb-5 lightDeepBG-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-6 mb-4 mb-md-0">
                                <h2 className="section-title text-start p-1 fw-bold mb-2"> Send A Message </h2>
                                <p className="themeDarkColor mb-5"> Pellentesque felis cursus. Proin lacus magna,
                                    lobortis vel quam ac, dignissim dapibus odio. Pellentesque vulputate </p>
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Form.Control className="mb-4 bg-white border-0 py-3 px-4 rounded-0"
                                                          type="text" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Control className="mb-4 bg-white border-0 py-3 px-4 rounded-0"
                                                          type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Control className="mb-4 bg-white border-0 py-3 px-4 rounded-0"
                                                          type="number" placeholder="Phone Number"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Control className="mb-4 bg-white border-0 py-3 px-4 rounded-0"
                                                          type="text" placeholder="Subject"/>
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea
                                                className="form-control mb-4 bg-white border-0 py-3 px-4 rounded-0"
                                                rows="4" cols="50" placeholder="Your Message"/>
                                        </div>
                                    </div>
                                    <Button className="themeBG border-0 rounded-0 py-3 px-4 w-100 themeDeepDark-h" variant="primary"
                                            type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="themeBG h-100 p-4 d-flex align-items-center">
                                    <div>
                                        <h3 className="text-light fw-bold mb-4"> Contact Info </h3>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                                                    <img src={locationIcon} alt="icon"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block text-white fw-bold">Location</span>
                                                <span className="d-block text-white-50">Dhaka Bangladesh</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                                                    <img src={mailIcon} alt="icon"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block text-white fw-bold"> Email </span>
                                                <span className="d-block text-white-50"> rabbil@gmail.com </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                                                    <img src={phoneIcon} alt="icon"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block text-white fw-bold">Phone No</span>
                                                <span className="d-block text-white-50">+11) 256 658 957 658</span>
                                            </div>
                                        </div>
                                        <div className="d-block">
                                            <h6 className="text-light fw-bold mb-3 mt-5"> Follow Us </h6>
                                            <div className="d-flex">
                                                <div className="d-flex align-items-center me-3">
                                                    <a href="#">
                                                        <div
                                                            className="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                                                            <img className="h-15" src={fb} alt="icon"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center me-3">
                                                    <a href="#">
                                                        <div
                                                            className="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                                                            <img className="h-15" src={twit} alt="icon"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center me-3">
                                                    <a href="#">
                                                        <div
                                                            className="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                                                            <img className="h-15" src={lnkd} alt="icon"/>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center me-3">
                                                    <a href="#">
                                                        <div
                                                            className="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                                                            <img className="h-15" src={ins} alt="icon"/>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContactSection;
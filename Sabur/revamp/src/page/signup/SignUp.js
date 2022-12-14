import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";
import {Form} from "react-bootstrap";
import {FaRegEye} from "@react-icons/all-files/fa/FaRegEye";
import {Link} from "react-router-dom";

// Include Style
import "./signup.css";

// Images
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import rabbilVai from "../../assets/images/rabbilVai.png";

class SignUp extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title> Sign Up </title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image} />
                </Helmet>

                <div className="signup secondaryBG" style={{paddingTop: '6rem'}}>
                    <div className="container">
                        <div className="themeWhiteBG rounded-3">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="pt-5 pb-0 pb-md-5 w-75 ps-0 ps-md-3">
                                        <h2 className="themeDarkColor fw-bold"> Sign Up Here </h2>
                                        <p className="lightColor mb-4"> Get started with us </p>

                                        <Form className="mb-3 mt-3 ">
                                            <Form.Group className="position-relative mb-4" controlId="formEmail">
                                                <Form.Label className="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Email</Form.Label>
                                                <Form.Control className="p-3 border-theme bodySmall rounded-3" type="email" placeholder="example@gmail.com" />
                                                <span className="position-absolute p-2 d-inline-block bg-white position-right-6 position-top-6 darkDeepColor-1"> @ </span>
                                            </Form.Group>
                                            <Form.Group className="position-relative mb-3" controlId="forPassword">
                                                <Form.Label className="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Password</Form.Label>
                                                <Form.Control className="p-3 border-theme bodySmall rounded-3" type="password" placeholder="hTVY^$467" />
                                                <button className="position-absolute p-2 d-inline-block bg-white position-right-6 position-top-6 border-0"> <FaRegEye className="darkDeepColor-1"/> </button>
                                                <div className="text-end"> <Link to="/" className="text-danger bodyXSmall"> Forget Password? </Link> </div>
                                            </Form.Group>
                                            <Form.Group className="position-relative mb-4" controlId="forName">
                                                <Form.Label className="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Full Name</Form.Label>
                                                <Form.Control className="p-3 border-theme bodySmall rounded-3" type="text" placeholder="Enter Your Name" />
                                            </Form.Group>
                                            <Form.Group className="position-relative mb-4" controlId="forNumber">
                                                <Form.Label className="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Phone Number</Form.Label>
                                                <Form.Control className="p-3 border-theme bodySmall rounded-3" type="text" placeholder="Type Your Number" />
                                            </Form.Group>
                                            <Form.Group className="position-relative mb-4" controlId="forAddress">
                                                <Form.Label className="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Address</Form.Label>
                                                <Form.Control className="p-3 border-theme bodySmall rounded-3" type="text" placeholder="Your Address" />
                                            </Form.Group>
                                            <button className="btn p-2 rounded-3 themeBtn"> Sign Up </button>
                                        </Form>

                                        <div className="position-relative my-4">
                                            <hr/>
                                            <p className="position-absolute m-0 bg-white bodyXSmall" style={{top: '-8px', padding: '0 5px', left: '50%', transform: 'translateX(-50%)'}}> or sign in with </p>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <a href="#">
                                                    <div className="w-100 p-2 border borderLight border-2 rounded text-center"><img className="w-20 mb-1" src={apple} alt="apple"/> </div>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <div className="w-100 p-2 border borderLight border-2 rounded text-center"><img className="w-20 mb-1" src={google} alt="apple"/> </div>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <div className="w-100 p-2 border borderLight border-2 rounded text-center"><img className="w-20 mb-1" src={facebook} alt="apple"/> </div>
                                                </a>
                                            </div>
                                        </div>

                                        <p className="m-0 text-center mt-3 mt-md-5 mb-5 mb-md-0">Already have account? <Link to="/join" className="themeColor">Sign In</Link></p>
                                    </div>
                                </div>
                                <div className="col-md-6 mh-80vh position-relative d-none d-md-block">
                                    <div className="secondaryBG rounded-3 m-4 position-absolute position-relative-mx-767 position-top-0 position-bottom-0 position-right-10 position-left-0">
                                        <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                                            <img className="img-fluid" src={rabbilVai} alt="Circle path"/>
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

export default SignUp;
import React, {Component, Fragment} from 'react';

// Include Style
import "./mentor.css";

// React Helmet
import {Helmet} from "react-helmet";

// Include Component
import SmallHero from "../../components/small-hero/SmallHero";

// React Bootstrap
import {Card} from "react-bootstrap";

// React Router Dom
import {Link} from "react-router-dom";

// Images
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";
import img_1 from "../../assets/images/browser-courses-1.png";
import courses_icon from "../../assets/images/suggested-courses-icon.svg";
import user_icon from "../../assets/images/vue-icon.svg";
import start_icon from "../../assets/images/start-icon.svg";
import img_2 from "../../assets/images/browser-courses-2.png";
import img_3 from "../../assets/images/browser-courses-3.png";
import img_4 from "../../assets/images/browser-courses-4.png";
import user from "../../assets/images/rabbil-user.png";

class Mentor extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title> Mentor </title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image}/>
                </Helmet>

                {/* Hero Section */}
                <div className="small-hero-bg lightDeepBG-2 pb-lg-0 pt-lg-0 pt-5 pb-3 d-flex align-items-center">
                    <div className="container-fluid my-50">
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-12 col-md-8 col-md-6 text-center">
                                    <p className="small-section-title mb-2 headline-2 breadcrumb-link"><Link
                                        className="darkColor" to="/home"> Home </Link> / <Link
                                        className="darkColor" to="/mentor"> Mentor </Link></p>
                                    <h2 className="themeDarkColor fw-bold headline-1 hero-headline-1-res"> Meet
                                        your MENTOR <br/> <span
                                            className="text-uppercase themeColor dot section-title headline-1-important-min-992">RABBIL HASAN</span>
                                    </h2>
                                    <p className="themeDarkColor fs-5 my-4 opacity-80 mb-0"> Are you looking for
                                        amazing e-course platform? <br className="d-none d-sm-block"/> Don't
                                        worry! We got it for you! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-3">
                                <div className="position-sticky position-top-15 shadow-sm rounded p-3 mb-4">
                                    <div className="text-center">
                                        <img className="img-fluid img-thumbnail" src={user} alt="user-photo"
                                             style={{maxWidth: 224}}/>
                                        <h4 className="bodyLarge fw-bold text-uppercase mt-3"> Rabbil Hasan </h4>
                                        <h4 className="bodySmall mb-4"> Sr. Software Engineer @ IDLC </h4>
                                    </div>
                                    <div className="d-flex justify-content-between text-center">
                                        <div>
                                            <h3 className="bodyLarge fw-bold"> 786K </h3>
                                            <p className="m-0"> Students </p>
                                        </div>
                                        <div>
                                            <h3 className="bodyLarge fw-bold"> 234 </h3>
                                            <p className="m-0"> Courses </p>
                                        </div>
                                        <div>
                                            <h3 className="bodyLarge fw-bold"> 438 </h3>
                                            <p className="m-0"> Reviews </p>
                                        </div>
                                    </div>
                                    <div className="btn-group w-100 mt-3" role="group" aria-label="Basic example">
                                        <Link to="/home" type="button" className="themeBtn me-2">Send Mail</Link>
                                        <Link to="/home" type="button" className="themeBtn ms-2">Message</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-9">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_2}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_3}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_4}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_2}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_3}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_4}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_2}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_3}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_4}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <Card className="mx-2 border-0 border-rounded shadow-sm">
                                                <Card.Img className="img-fluid rounded-top" variant="top"
                                                          src={img_1}
                                                          alt="suggested-course"/>
                                                <Card.Body>
                                                    <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN
                                                        Stack
                                                        Basic</Card.Title>
                                                    <div className="row">
                                                        <div className="col-8 mb-3 mb-md-0">
                                                <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={courses_icon} alt="courses icon"/> <span
                                                    className="d-inline-block ms-1 mb-2"> MERN Series </span>
                                                </span>
                                                            <span className="d-block bodyLarge themeColor fw-bold"> BDT. 3000 </span>
                                                        </div>
                                                        <div className="col-4 text-end">
                                                <span className="d-block bodyLarge lightColor d-flex mb-2">
                                                    <img style={{height: 23}} src={user_icon} alt="user"/> <span
                                                    className="d-inline-block ms-1"> 4.9K </span>
                                                </span>
                                                            <span className="d-block bodyLarge lightColor d-flex">
                                                    <img src={start_icon} alt="react"/> <span
                                                                className="d-inline-block ms-1"> 4.9 </span>
                                                </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
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

export default Mentor;
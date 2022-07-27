import React, {useState } from "react";

// Include Style
import "./tabs.css";

// Icons
import {SiYoutube} from "@react-icons/all-files/si/SiYoutube";
import {RiGuideLine} from "@react-icons/all-files/ri/RiGuideLine";
import * as PropTypes from "prop-types";
import {FaUsers} from "@react-icons/all-files/fa/FaUsers";
import {FaPlay} from "@react-icons/all-files/fa/FaPlay";
import {MdLaptopMac} from "@react-icons/all-files/md/MdLaptopMac";
import CourseCard from "../courses-card/CourseCard";
import Slider from "react-slick";
import {Accordion, Button, Modal} from "react-bootstrap";
import {GiNetworkBars} from "@react-icons/all-files/gi/GiNetworkBars";
import {AiFillRead} from "@react-icons/all-files/ai/AiFillRead";
import {AiOutlineClockCircle} from "@react-icons/all-files/ai/AiOutlineClockCircle";
import {BsFillTagFill} from "@react-icons/all-files/bs/BsFillTagFill";
import {FaLaptopCode} from "@react-icons/all-files/fa/FaLaptopCode";

// Images
import pymtImg from "../../assets/images/paymentMethond.png"
import rabbilRabbil from "../../assets/images/rabbil-vai-avater.png"

import {Link} from "react-router-dom";
import {MdLanguage} from "@react-icons/all-files/md/MdLanguage";
import {AiTwotoneStar} from "@react-icons/all-files/ai/AiTwotoneStar";

// Carousel Button
function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function MdOutlineLaptopMac(props) {
    return null;
}

MdOutlineLaptopMac.propTypes = {className: PropTypes.string};


function TbMessageLanguage(props) {
    return null;
}

TbMessageLanguage.propTypes = {className: PropTypes.string};

function Tabs() {

    // Modal Popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const modalContentShow = () => setShow(true);

    // Tabs Button
    const [toggleState, setToggleState] = useState(3);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    // Carousel Options
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="container my-4 tabs-container">
            <div className="row">
                <div className="col-md-12 col-lg-9 mb-3">
                    <div className="row">
                        <div className="col-md-5 col-lg-3">
                            <div className="row">
                                <div className="col-12">
                                    <button
                                        className={toggleState === 1 ? "tabs active-tabs border-0 w-100 bodySmall text-white bg-success p-3 shadow-sm rounded mb-3 text-start" : "tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"}
                                        onClick={() => toggleTab(1)}
                                    >
                                        <SiYoutube className="text-danger bodyXLarge me-2" /> Get 16 lessons in 3 hours
                                    </button>
                                </div>
                                <div className="col-12">
                                    <button
                                        className={toggleState === 2 ? "tabs active-tabs border-0 w-100 bodySmall text-white bg-success p-3 shadow-sm rounded mb-3 text-start" : "tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"}
                                        onClick={() => toggleTab(2)}
                                    >
                                        <RiGuideLine className="text-danger bodyXLarge me-2" /> Daily Guided Exercises
                                    </button>
                                </div>
                                <div className="col-12">
                                    <button
                                        className={toggleState === 3 ? "tabs active-tabs border-0 w-100 bodySmall text-white bg-success p-3 shadow-sm rounded mb-3 text-start" : "tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"}
                                        onClick={() => toggleTab(3)}
                                    >
                                        <MdLaptopMac className="text-danger bodyXLarge me-2" /> LIVE Project
                                    </button>
                                </div>
                                <div className="col-12">
                                    <button
                                        className={toggleState === 4 ? "tabs active-tabs border-0 w-100 bodySmall text-white bg-success p-3 shadow-sm rounded mb-3 text-start" : "tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"}
                                        onClick={() => toggleTab(4)}
                                    >
                                        <FaUsers className="text-danger bodyXLarge me-2" /> Access to Students Community
                                    </button>
                                </div>
                                <div className="col-12">
                            <span onClick={() => toggleTab(5)}>
                            <button
                                className={toggleState === 5 ? "tabs active-tabs border-0 w-100 bodySmall text-white bg-success p-3 shadow-sm rounded mb-3 text-start" : "tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"}
                                onClick={modalContentShow}
                            >
                                <FaPlay className="text-danger bodyXLarge me-2" /> Bonus Videos (ReactJS)
                            </button>
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-9">
                            <div className="content-tabs">
                                <div
                                    className={toggleState === 1 ? "content active-content rounded shadow-sm h-100" : "content h-100"}
                                >
                                    <Slider {...settings}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <iframe className="w-100 h-300" src="https://www.youtube.com/embed/tUihAB8B1J8"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <iframe className="w-100 h-300" src="https://www.youtube.com/embed/pOM5UUpY5fM"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="img-fluid h-300" src="https://i.ytimg.com/vi_webp/8uda0QEDq34/maxresdefault.webp" alt="youtube-thum" />
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <iframe className="w-100 h-300" src="https://www.youtube.com/embed/sHSRekkqwFo"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        </div>
                                    </Slider>
                                </div>

                                <div
                                    className={toggleState === 2 ? "content active-content rounded shadow-sm" : "content"}
                                >
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Guide Exercises - 01</Accordion.Header>
                                            <Accordion.Body className="themeWhiteBG">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Guide Exercises - 02</Accordion.Header>
                                            <Accordion.Body className="themeWhiteBG">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Guide Exercises - 03</Accordion.Header>
                                            <Accordion.Body className="themeWhiteBG">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Guide Exercises - 04</Accordion.Header>
                                            <Accordion.Body className="themeWhiteBG">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                                <div className={toggleState === 3 ? "content active-content rounded shadow-sm" : "content"}>
                                    <iframe className="w-100 h-300" src="https://www.youtube.com/embed/xCUM0rJKrZM"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div
                                    className={toggleState === 4 ? "content active-content rounded shadow-sm" : "content"}
                                >
                                    <h2> Access to Students Community</h2>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                                        recusandae totam quidem repudiandae omnis veritatis nostrum
                                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                                        recusandae totam quidem repudiandae omnis veritatis nostrum
                                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                                    </p>
                                </div>
                                <div
                                    className={toggleState === 5 ? "content active-content rounded shadow-sm min-h-340" : "content"}
                                >
                                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg"
                                           aria-labelledby="contained-modal-title-vcenter"
                                           centered>
                                        <Modal.Header>
                                            <Modal.Title>Bonus Videos (ReactJS)</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <iframe className="w-100 h-300" src="https://www.youtube.com/embed/gFicda3xgKc"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        </Modal.Body>
                                        <Modal.Footer>
                                    <span onClick={handleClose}>
                                        <Button variant="danger" onClick={() => toggleTab(3)}>
                                            Close
                                        </Button>
                                    </span>

                                            <Button variant="success">
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        <h3 className="headline-3 bodyLarge-MX-767 themeDarkColor fw-bold pb-2 mt-4 mt-md-2 mb-3 border-bottom">The Ultimate MERN Course: A Complete Guideline of Career</h3>
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="row">
                                    <div className="col-7 col-md-4 d-flex align-items-center border-end pe-4">
                                        <div className="flex-shrink-0">
                                            <img className="border border-3 border-theme rounded-circle" src={rabbilRabbil} alt="Rabbil Hasan" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span className="d-block bodyMedium fs-12-max768 themeColor"> Instructor </span>
                                            <span className="d-block bodyMedium fs-12-max768 fw-bold"> Rabbil Hasan </span>
                                        </div>
                                    </div>
                                    <div className="col-5 col-md-3 d-flex align-items-center border-end pe-4">
                                        <div className="flex-grow-1 ms-3">
                                            <span className="d-block bodyMedium fs-12-max768 themeColor"> Last Update : </span>
                                            <span className="d-block bodyMedium fs-12-max768 fw-bold"> 5 April, 2022 </span>

                                            {/* Show Only Mobile Display */}
                                            <span className="d-block d-md-none mt-3">
                                                <span className="d-block bodyMedium fs-12-max768 themeColor"> Reviews </span>
                                                <span className="d-block bodyMedium fs-12-max768"> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <span className="fw-bold"> (120k) </span> Reviews </span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Show Only Desktop Display */}
                                    <div className="col-12 col-md-5 d-flex align-items-center border-end pe-4 d-none d-md-block">
                                        <div className="flex-grow-1 ms-3">
                                            <span className="d-block bodyMedium fs-12-max768 themeColor"> Reviews </span>
                                            <span className="d-block bodyMedium fs-12-max768"> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <AiTwotoneStar className="text-warning"/> <span className="fw-bold"> (120k) </span> Reviews </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3">
                    <div className="lightDeepBG-2 rounded shadow-sm p-3">
                        <h2 className="headline-4 themeColor mb-3"> $59.<span className="bodyXLarge d-inline-block me-2">USD</span> <s className="bodyLarge themeDarkColor"> $88 <span className="bodyMedium">USD</span> </s> </h2>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between themeDarkColor border-bottom py-2 mb-2">
                                <span className="d-inline-block"> <GiNetworkBars className="themeColor bodyXLarge me-1 position-relative" /> Level </span>
                                <span className="d-inline-block"> Beginners </span>
                            </div>
                            <div className="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2">
                                <span className="d-inline-block"> <AiFillRead className="themeColor bodyXLarge me-1 position-relative" /> Lectures </span>
                                <span className="d-inline-block"> 08 Lectures </span>
                            </div>
                            <div className="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2">
                                <span className="d-inline-block"> <AiOutlineClockCircle className="themeColor bodyXLarge me-1 position-relative" /> Duration </span>
                                <span className="d-inline-block"> 10 Weeks </span>
                            </div>
                            <div className="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2">
                                <span className="d-inline-block"> <MdLanguage className="themeColor bodyXLarge me-1 position-relative" /> Language </span>
                                <span className="d-inline-block"> English </span>
                            </div>
                            <div className="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2">
                                <span className="d-inline-block"> <BsFillTagFill className="themeColor bodyXLarge me-1 position-relative" /> Category </span>
                                <span className="d-inline-block"> Business </span>
                            </div>
                            <div className="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2">
                                <span className="d-inline-block"> <FaLaptopCode className="themeColor bodyXLarge me-1 position-relative" /> Students </span>
                                <span className="d-inline-block"> 50 Students </span>
                            </div>
                        </div>
                        <div className="mb-3 bodyLarge fw-bold d-flex justify-content-between"> Payment: <img className="img-fluid" src={pymtImg} alt="payment-methode"/> </div>
                        <Link className="d-block w-100 py-2 themeBtn" to="/"> Enroll </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
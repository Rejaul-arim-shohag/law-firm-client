import React, {Component, Fragment} from 'react';

// Include Style
import "./suggested-courses.css";
import {Card, Dropdown} from "react-bootstrap";
import img_1 from "../../assets/images/browser-courses-1.png";
import img_2 from "../../assets/images/browser-courses-2.png";
import img_3 from "../../assets/images/browser-courses-3.png";
import img_4 from "../../assets/images/browser-courses-4.png";

import courses_icon from "../../assets/images/suggested-courses-icon.svg";

import Slider from "react-slick";
import {AiOutlineUser} from "@react-icons/all-files/ai/AiOutlineUser";
import {AiFillStar} from "@react-icons/all-files/ai/AiFillStar";
import CourseCard from "../courses-card/CourseCard";

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

class SuggestesCourses extends Component {
    render() {
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="pt-5 pb-5 lightDeepBG-2 slick-carousel-arrow position-relative top-left-circleBG">
                    <div className="container mb-4">
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-2"> Suggested Courses </h2>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="small-section-title fw-bold themeColor mb-2 headline-2 bg-transparent themeColor border-0 p-0 themeColor-h themeColor-f"
                                    id="dropdown-basic">
                                    Best Seller
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Best Seller</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Category 01</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Category 02</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Category 03</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <Slider {...settings}>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                            <div className="mb-4">
                                <CourseCard/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SuggestesCourses;
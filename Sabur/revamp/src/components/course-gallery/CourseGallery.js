import React, {Component, Fragment} from 'react';

// Include Style
import './course-gallery.css';

// Slick Slider
import Slider from "react-slick";

// Bootstrap Component
import {Accordion, Card} from "react-bootstrap";

// Images
import img_1 from "../../assets/images/browser-courses-1.png";
import courses_icon from "../../assets/images/suggested-courses-icon.svg";
import user_icon from "../../assets/images/vue-icon.svg";
import start_icon from "../../assets/images/start-icon.svg";
import img_2 from "../../assets/images/browser-courses-2.png";
import img_3 from "../../assets/images/browser-courses-3.png";
import img_4 from "../../assets/images/browser-courses-4.png";
import locationIcon_white from "../../assets/images/location-icon-white.svg";

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

class CourseGallery extends Component {
    render() {
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
                <div className="pt-5 pb-5 lightDeepBG-2 slick-carousel-arrow position-relative">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-4"> Our Top-Picked Courses </h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-xl-3">
                                <Accordion className="position-sticky position-top-15 z-index-2 border-0 top-left-circleBG" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className="border-0 bg-transparent">
                                        <Accordion.Header className="d-block d-xl-none">Accordion Item
                                            #1</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <div className="themeWhiteBG rounded-2 shadow-sm mb-3">
                                                <div className="d-flex justify-content-center">
                                                    <div className="input-group rounded-0 m-3">
                                                        <input type="text" className="form-control rounded-0"
                                                               placeholder="Search..."/>
                                                        <span className="input-group-text rounded-0 themeBG"
                                                              id="basic-addon2">
                                                                <img src={locationIcon_white} alt="icon"/>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="themeWhiteBG rounded-2 shadow-sm p-3 mb-3">
                                                <h4 className="bodyLarge themeDarkColor fw-bold mb-3"> Category </h4>
                                                <div className="filter-checkbox">
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox1"/>
                                                            <label htmlFor="categoryCheckbox1" className="bodySmall position-relative d-block m-0"> Figma </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (4) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox2"/>
                                                            <label htmlFor="categoryCheckbox2" className="bodySmall position-relative d-block m-0"> Mern </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (5) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox3"/>
                                                            <label htmlFor="categoryCheckbox3" className="bodySmall position-relative d-block m-0"> React </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (7) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox4"/>
                                                            <label htmlFor="categoryCheckbox4" className="bodySmall position-relative d-block m-0"> JS </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (3) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox5"/>
                                                            <label htmlFor="categoryCheckbox5" className="bodySmall position-relative d-block m-0"> jQuery </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (5) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox6"/>
                                                            <label htmlFor="categoryCheckbox6" className="bodySmall position-relative d-block m-0"> Web 3.0 </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (2) </span>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="categoryCheckbox7"/>
                                                            <label htmlFor="categoryCheckbox7" className="bodySmall position-relative d-block m-0"> PHP </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (10) </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="themeWhiteBG rounded-2 shadow-sm p-3 mb-3">
                                                <h4 className="bodyLarge themeDarkColor fw-bold mb-3"> Level </h4>
                                                <div className="filter-checkbox">
                                                    <div className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="levelCheckboxAll"/>
                                                            <label htmlFor="levelCheckboxAll" className="bodySmall position-relative d-block m-0"> All </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (110) </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="levelCheckbox1"/>
                                                            <label htmlFor="levelCheckbox1" className="bodySmall position-relative d-block m-0"> Beginning </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (43) </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="levelCheckbox2"/>
                                                            <label htmlFor="levelCheckbox2" className="bodySmall position-relative d-block m-0"> Intermediate </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (26) </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between checkbox-content">
                                                        <div className="checkbox d-block">
                                                            <input className="d-none" type="checkbox" id="levelCheckbox3"/>
                                                            <label htmlFor="levelCheckbox3" className="bodySmall position-relative d-block m-0"> Expert </label>
                                                        </div>
                                                        <span className="bodyXSmall fw-bold"> (41) </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-lg-12 col-xl-9">
                                <Slider {...settings}>
                                       <div className="mb-4">
                                           <Card className="mx-2 border-0 border-rounded shadow-sm">
                                               <Card.Img className="img-fluid rounded-top" variant="top" src={img_1}
                                                         alt="suggested-course"/>
                                               <Card.Body>
                                                   <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN Stack
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
                                       <div className="mb-4">
                                           <Card className="mx-2 border-0 border-rounded shadow-sm">
                                               <Card.Img className="img-fluid rounded-top" variant="top" src={img_2}
                                                         alt="suggested-course"/>
                                               <Card.Body>
                                                   <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN Stack
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
                                       <div className="mb-4">
                                           <Card className="mx-2 border-0 border-rounded shadow-sm">
                                               <Card.Img className="img-fluid rounded-top" variant="top" src={img_3}
                                                         alt="suggested-course"/>
                                               <Card.Body>
                                                   <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN Stack
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
                                       <div className="mb-4">
                                           <Card className="mx-2 border-0 border-rounded shadow-sm">
                                               <Card.Img className="img-fluid rounded-top" variant="top" src={img_4}
                                                         alt="suggested-course"/>
                                               <Card.Body>
                                                   <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN Stack
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
                                       <div className="mb-4">
                                           <Card className="mx-2 border-0 border-rounded shadow-sm">
                                               <Card.Img className="img-fluid rounded-top" variant="top" src={img_1}
                                                         alt="suggested-course"/>
                                               <Card.Body>
                                                   <Card.Title className="bodyXLarge themeDarkColor fw-bold">MERN Stack
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
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CourseGallery;
import React, {Component, Fragment} from 'react';

// Include Style
import './course-gallery.css';

// Bootstrap Component
import {Accordion, Card} from "react-bootstrap";

// Images
import locationIcon_white from "../../assets/images/location-icon-white.svg";

// Components
import CourseCard from "../courses-card/CourseCard";

class CourseGallery extends Component {
    render() {
        return (
            <Fragment>
                <div className="pt-5 pb-5 course-gallery lightDeepBG-2 position-relative">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-4"> Our Top-Picked Courses </h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-xl-3">
                                <Accordion className="position-sticky position-top-15 z-index-2 border-0 top-left-circleBG" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className="border-0 bg-transparent">
                                        <Accordion.Header className="d-block d-xl-none shadow-sm rounded">Filter Search...</Accordion.Header>
                                        <Accordion.Body className="p-0 mt-3 mt-xl-0">
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
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <CourseCard/>
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

export default CourseGallery;
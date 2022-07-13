import React, {Component, Fragment} from 'react';

import course_img_1 from "../../assets/images/course-Image1.png";
import course_img_2 from "../../assets/images/course-Image2.png";
import course_img_3 from "../../assets/images/course-Image3.png";
import course_img_4 from "../../assets/images/course-Image4.png";

import Background from "../../assets/images/mark-icon.svg";
import user_avatar from "../../assets/images/rabbil-vai-avater.png";

// Include Style
import './our-course.css';

class OurCourse extends Component {
    render() {
        return (
            <Fragment>
                <div className="pt-5 pb-5">
                    <div className="container">
                        <p className="small-section-title fw-bold themeColor mb-2 headline-2"> Our Course </p>
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-4"> Our Top-Picked Courses </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="row gx-0">
                                    <div className="col-6 lightDeepBG-2 shadow rounded">
                                        <img className="img-fluid rounded-start courses-img-responsive" src={course_img_1} alt="image"/>
                                    </div>
                                    <div className="col-6 py-3 lightDeepBG-2 shadow rounded-end">
                                        <div className="h-100 px-3 position-relative">
                                            <img src={Background} alt="mark-icon"/>
                                            <span className="d-inline-block position-absolute bodySmall position-top-7 position-left-30 text-uppercase"> WEB 3.0 </span>
                                            <h4 className="bodyLarge fw-bold mt-2 fs-12-max768"> Mern Stack Full Web Application </h4>

                                            <div className="position-absolute position-left-0 position-right-0 position-bottom-0 px-3">
                                                <div className="d-flex align-items-center h-20-mx-768">
                                                <div className="flex-shrink-0">
                                                    <img className="img-fluid rounded-circle border border-success h-40-mx-768" src={user_avatar} alt="image"/>
                                                </div>
                                                <div className="flex-grow-1 ms-3 py-4">
                                                    <h4 className="bodyMedium fw-bold m-0 fs-12-max768"> Rabbil Hasan </h4>
                                                </div>
                                            </div>
                                                <hr className="mb-5-mx-768"/>
                                                <div className="d-flex justify-content-between fs-12-max768">
                                                <span className="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
                                                <span>
                                                    {/*<FontAwesomeIcon icon="fa-solid fa-star" />*/}
                                                    5 (120)
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="row gx-0">
                                    <div className="col-6 lightDeepBG-2 shadow rounded">
                                        <img className="img-fluid rounded-start courses-img-responsive" src={course_img_2} alt="image"/>
                                    </div>
                                    <div className="col-6 py-3 lightDeepBG-2 shadow rounded-end">
                                        <div className="h-100 px-3 position-relative">
                                            <img src={Background} alt="mark-icon"/>
                                            <span className="d-inline-block position-absolute bodySmall position-top-7 position-left-30 text-uppercase"> WEB </span>
                                            <h4 className="bodyLarge fw-bold mt-2 fs-12-max768"> JavaScript Frontend Bootcamp </h4>

                                            <div className="position-absolute position-left-0 position-right-0 position-bottom-0 px-3">
                                                <div className="d-flex align-items-center h-20-mx-768">
                                                    <div className="flex-shrink-0">
                                                        <img className="img-fluid rounded-circle border border-success h-40-mx-768" src={user_avatar} alt="image"/>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 py-4">
                                                        <h4 className="bodyMedium fw-bold m-0 fs-12-max768"> Rabbil Hasan </h4>
                                                    </div>
                                                </div>
                                                <hr className="mb-5-mx-768"/>
                                                <div className="d-flex justify-content-between fs-12-max768">
                                                    <span className="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
                                                    <span>
                                                    {/*<FontAwesomeIcon icon="fa-solid fa-star" />*/}
                                                        5 (120)
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-md-0 mb-4">
                                <div className="row gx-0">
                                    <div className="col-6 lightDeepBG-2 shadow rounded">
                                        <img className="img-fluid rounded-start courses-img-responsive" src={course_img_3} alt="image"/>
                                    </div>
                                    <div className="col-6 py-3 lightDeepBG-2 shadow rounded-end">
                                        <div className="h-100 px-3 position-relative">
                                            <img src={Background} alt="mark-icon"/>
                                            <span className="d-inline-block position-absolute bodySmall position-top-7 position-left-30 text-uppercase"> App </span>
                                            <h4 className="bodyLarge fw-bold mt-2 fs-12-max768"> Mobile App with React Native </h4>

                                            <div className="position-absolute position-left-0 position-right-0 position-bottom-0 px-3">
                                                <div className="d-flex align-items-center h-20-mx-768">
                                                    <div className="flex-shrink-0">
                                                        <img className="img-fluid rounded-circle border border-success h-40-mx-768" src={user_avatar} alt="image"/>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 py-4">
                                                        <h4 className="bodyMedium fw-bold m-0 fs-12-max768"> Rabbil Hasan </h4>
                                                    </div>
                                                </div>
                                                <hr className="mb-5-mx-768"/>
                                                <div className="d-flex justify-content-between fs-12-max768">
                                                    <span className="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
                                                    <span>
                                                    {/*<FontAwesomeIcon icon="fa-solid fa-star" />*/}
                                                        5 (120)
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row gx-0">
                                    <div className="col-6 lightDeepBG-2 shadow rounded">
                                        <img className="img-fluid rounded-start courses-img-responsive" src={course_img_4} alt="image"/>
                                    </div>
                                    <div className="col-6 py-3 lightDeepBG-2 shadow rounded-end">
                                        <div className="h-100 px-3 position-relative">
                                            <img src={Background} alt="mark-icon"/>
                                            <span className="d-inline-block position-absolute bodySmall position-top-7 position-left-30 text-uppercase"> Medical </span>
                                            <h4 className="bodyLarge fw-bold mt-2 fs-12-max768"> e-commerce with Angular JS </h4>

                                            <div className="position-absolute position-left-0 position-right-0 position-bottom-0 px-3">
                                                <div className="d-flex align-items-center h-20-mx-768">
                                                    <div className="flex-shrink-0">
                                                        <img className="img-fluid rounded-circle border border-success h-40-mx-768" src={user_avatar} alt="image"/>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3 py-4">
                                                        <h4 className="bodyMedium fw-bold m-0 fs-12-max768"> Rabbil Hasan </h4>
                                                    </div>
                                                </div>
                                                <hr className="mb-5-mx-768"/>
                                                <div className="d-flex justify-content-between fs-12-max768">
                                                    <span className="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
                                                    <span>
                                                    {/*<FontAwesomeIcon icon="fa-solid fa-star" />*/}
                                                        5 (120)
                                                </span>
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

export default OurCourse;
import React, {Component, Fragment} from 'react';
import course_img_1 from "../../assets/images/course-Image1.png";
import Background from "../../assets/images/mark-icon.svg";
import user_avatar from "../../assets/images/rabbil-vai-avater.png";

// css
import "./our-courses-card.css";

class OurCoursesCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-6 col-md-6 mb-3 mb-md-4 px-6-mx-5758">
                    <div className="row gx-0 shadow-sm border-bottom-rounded-mx-767">
                        <div className="col-12 col-md-6 lightDeepBG-2 shadow rounded">
                            <img className="img-fluid rounded-start border-top-rounded-mx-767" src={course_img_1} alt="course_user"/>
                        </div>
                        <div className="col-12 col-md-6 pb-1 pt-3 py-md-3 lightDeepBG-2 rounded-end border-bottom-rounded-mx-767">
                            <div className="h-100 px-2 px-md-3 position-relative">
                                <img className="d-none d-md-block" src={Background} alt="mark-icon"/>
                                <span className="d-inline-block position-absolute position-relative-mx-768 bodySmall bodyXSmall-MX-767 position-top-7 position-top-mx-767--13 position-left-30 position-mx-left-0 text-uppercase"> WEB 3.0 </span>
                                <h4 className="bodyLarge fw-bold mb-0 mt-0 mt-md-2 bodySmall-MX-767 position-relative-mx-768 position-top-mx-767--10"> Mern Stack Full Web Application </h4>
                                <div className="position-absolute position-relative-mx-768 position-left-0 position-right-0 position-bottom-0 px-0 px-md-3">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img className="img-fluid rounded-circle border border-success h-30-mx-768" src={user_avatar} alt="course_user"/>
                                        </div>
                                        <div className="flex-grow-1 ms-2 ms-md-3 my-2 py-md-4">
                                            <h4 className="bodyMedium fw-bold m-0 bodyXSmall-MX-767"> Rabbil Hasan </h4>
                                        </div>
                                    </div>
                                    <hr className="my-2 my-md-0"/>
                                    <div className="d-flex justify-content-between bodyXSmall-MX-767">
                                        <span className="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
                                        <span> 5 (120) </span>
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

export default OurCoursesCard;
import React, {Component, Fragment} from 'react';
import {Card} from "react-bootstrap";
import img_1 from "../../assets/images/browser-courses-1.png";
import courses_icon from "../../assets/images/suggested-courses-icon.svg";
import {AiOutlineUser} from "@react-icons/all-files/ai/AiOutlineUser";
import {AiFillStar} from "@react-icons/all-files/ai/AiFillStar";
import {Link} from "react-router-dom";

class CourseCard extends Component {
    render() {
        return (
            <Fragment>
                <Link to="#" className="ht-min-767-animation">
                    <Card className="mx-2 border-0 border-rounded shadow-sm">
                        <Card.Img className="img-fluid rounded-top" variant="top" src={img_1} alt="suggested-course"/>
                        <Card.Body className="p-2 p-md-3">
                            <Card.Title className="bodyLarge bodySmall-MX-767 themeDarkColor fw-bold">MERN Stack Basic</Card.Title>
                            <div className="row">
                                <div className="col-12 col-md-8 mb-2 mb-md-0">
                                    <div className="d-block bodySmall lightColor d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={courses_icon} alt="courses icon" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="d-inline-block bodyXSmall-MX-767"> MERN Series </div>
                                                <div className="bodySmall themeColor fw-bold bodyXSmall-MX-767"> BDT. 3000 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 text-end">
                                    <div className="row gx-0">
                                        <div className="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">
                                            <AiOutlineUser/>
                                            <span className="d-inline-block ms-1"> 4.9K </span>
                                        </div>
                                        <div className="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">
                                            <AiFillStar className="text-warning"/>
                                            <span className="d-inline-block ms-1"> 4.9 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </Fragment>
        );
    }
}

export default CourseCard;
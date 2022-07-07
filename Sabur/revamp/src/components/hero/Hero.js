import React, {Component, Fragment} from 'react';
import {Form, Button} from "react-bootstrap";

// Images
import react from '../../assets/images/react-icon.svg';
import vue from '../../assets/images/vue-icon.svg';
import js from '../../assets/images/js-icon.svg';
import php from '../../assets/images/php-icon.svg';
import dart from '../../assets/images/dart-icon.svg';
import flutter from '../../assets/images/flutter-icon.svg';
import java from '../../assets/images/java-icon.svg';
import kotlin from '../../assets/images/kotlin-icon.svg';
import python from '../../assets/images/python-icon.svg';
import laravel from '../../assets/images/laravel-icon.svg';

// Include Style
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <Fragment>
                <div className="top-corner-bg">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-12 min-vh-100 d-flex align-items-center justify-content-lg-start justify-content-md-center bg-big-shadow">
                                    <div>
                                        <h2 className="themeDarkColor fw-bold headline-1 hero-headline-1-res">Learn Confidently with <br/> <span className="text-uppercase themeColor dot">Rabbil Hasan</span> </h2>
                                        <p className="themeDarkColor fs-5 my-4 opacity-80"> Are you looking for amazing e-course platform? <br /> Don't worry! We got it for you! </p>
                                        <div className="position-relative search-courses">
                                            <Form className="d-flex">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Courses Name..."
                                                    className="me-2 border-0 rounded-pill shadow-lg ps-4 h-65"
                                                    aria-label="Search"
                                                />
                                                <Button className="position-absolute rounded-pill text-white themeBG search-btn" variant="outline-success">Search Courses</Button>
                                            </Form>
                                        </div>
                                        <div className="row text-center my-4">
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 2617 </h2>
                                                <p className="themeDarkColor opacity-80"> Enrolled Students </p>
                                            </div>
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 902 </h2>
                                                <p className="themeDarkColor opacity-80"> Online Course </p>
                                            </div>
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 30K </h2>
                                                <p className="themeDarkColor opacity-80"> Platform Followers </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info" src={react} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-success ml--25" src={vue} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25" src={js} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25" src={php} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25" src={dart} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-primary ml--25" src={flutter} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-secondary ml--25" src={java} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25" src={kotlin} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info ml--25" src={python} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-danger ml--25" src={laravel} alt="react icon"/>
                                            <span className="themeWhiteBG h-60 w-60 p-12 rounded-circle border border-success bw-2 ml--25 d-inline-block headline-4 fw-bold bodyXLarge">20+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 min-vh-100 d-flex align-items-center">
                                    <h2>right</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Hero;
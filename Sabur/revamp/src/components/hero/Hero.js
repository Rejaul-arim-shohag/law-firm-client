import React, {Component, Fragment} from 'react';
import {Form, Button} from "react-bootstrap";

// Image Include
import circlePath from '../../assets/images/circle-shape.svg';

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
import rabbilVai from '../../assets/images/rabbil-vai.png';

// Include Style
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <Fragment>
                <div className="top-corner-bg lightDeepBG-2 pb-lg-0 pt-lg-0 pt-5 pb-3">
                    <div className="container-fluid my-50">
                        <div className="container">
                            <div className="row flex-wrap-reverse-M992">
                                <div className="col-lg-6 col-12 min-100-vh d-flex align-items-center justify-content-lg-start justify-content-md-center bg-big-shadow min-ha-M992">
                                    <div>
                                        <h2 className="themeDarkColor fw-bold headline-1 hero-headline-1-res">Learn Confidently with <br/> <span className="text-uppercase themeColor dot">Rabbil Hasan</span> </h2>
                                        <p className="themeDarkColor fs-5 my-4 opacity-80"> Are you looking for amazing e-course platform? <br className="d-none d-sm-block" /> Don't worry! We got it for you! </p>
                                        <div className="position-relative search-courses">
                                            <Form className="d-flex">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Courses Name..."
                                                    className="me-2 border-0 rounded-pill shadow-lg ps-4 h-65 input-search-pr"
                                                    aria-label="Search"
                                                />
                                                <Button className="position-absolute rounded-pill text-white themeBG search-btn" variant="outline-success">Search Courses</Button>
                                            </Form>
                                        </div>
                                        <div className="row text-center my-4">
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 2617 </h2>
                                                <p className="themeDarkColor opacity-80 mb-0"> Enrolled Students </p>
                                            </div>
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 902 </h2>
                                                <p className="themeDarkColor opacity-80 mb-0"> Online Course </p>
                                            </div>
                                            <div className="col-4">
                                                <h2 className="headline-3 themeDarkColor fw-bold"> 30K </h2>
                                                <p className="themeDarkColor opacity-80 mb-0"> Platform Followers </p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-lg-start">
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info" src={react} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-success ml--25" src={vue} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25" src={js} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25" src={php} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25" src={dart} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-primary ml--25" src={flutter} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-secondary ml--25 d-none d-sm-block" src={java} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25 d-none d-sm-block" src={kotlin} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info ml--25" src={python} alt="react icon"/>
                                            <img className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-danger ml--25" src={laravel} alt="react icon"/>
                                            <span className="themeWhiteBG h-60 w-60 p-12 rounded-circle border border-success bw-2 ml--25 d-inline-block headline-4 fw-bold bodyXLarge">20+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 min-100-vh d-flex align-items-center justify-content-lg-start justify-content-md-center min-ha-M992">
                                    <div className="position-relative pseudo-border">
                                        <img className="img-fluid position-relative position-right--30 position-right-0-M575 position-top--50" src={rabbilVai} alt="Circle path"/>
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

export default Hero;
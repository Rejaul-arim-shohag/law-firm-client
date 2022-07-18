import React, {Component, Fragment} from 'react';

// Include Style
import "./small-hero.css";

// React Dom
import {Link} from "react-router-dom";

class SmallHero extends Component {
    render() {
        return (
            <Fragment>
                <div className="small-hero-bg lightDeepBG-2 pb-lg-0 pt-lg-0 pt-5 pb-3 d-flex align-items-center">
                    <div className="container-fluid my-50">
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-12 col-md-8 col-md-6 text-center">
                                    <p className="small-section-title mb-2 headline-2 breadcrumb-link"> <Link className="darkColor" to="/home"> Home </Link> / <Link className="darkColor" to="/courses"> Courses </Link> </p>
                                    <h2 className="themeDarkColor fw-bold headline-1 hero-headline-1-res"> Explore our <br/> <span className="text-uppercase themeColor dot section-title headline-1-important-min-992">PREMIUM COURSES</span> </h2>
                                    <p className="themeDarkColor fs-5 my-4 opacity-80 mb-0"> Are you looking for amazing e-course platform? <br className="d-none d-sm-block" /> Don't worry! We got it for you! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SmallHero;
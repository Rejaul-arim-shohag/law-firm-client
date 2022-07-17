import React, {Component, Fragment} from 'react';
import fb from "../../assets/images/facebook.svg";
import twit from "../../assets/images/twitter.svg";
import lnkd from "../../assets/images/linkend.svg";
import ins from "../../assets/images/instagram.svg";
import locationIcon_white from "../../assets/images/location-icon-white.svg";
import mapLocation from "../../assets/images/map-location.svg";

// Copyright Image
import app_pay from "../../assets/images/copyright_image/apple_pay.svg";
import google_pay from "../../assets/images/copyright_image/google_pay.svg";
import amazon from "../../assets/images/copyright_image/amazon.svg";
import affirm from "../../assets/images/copyright_image/affirm.svg";
import shop_pay from "../../assets/images/copyright_image/shop_pay.svg";

// Router Dom
import {Link} from "react-router-dom";

class Footer extends Component {
    // Display Year (Copyright Part)
    getYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <Fragment>
                <div className="py-5 secondaryBG">
                    <div className="container">
                        <div className="row text-center text-sm-start">
                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> About Us </h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolor
                                    eveniet exercitationem minima non obcaecati, perspiciatis porro quibusdam quis
                                    sapiente, tempora temporibus ullam vitae, voluptatem. Accusamus impedit natus
                                    repellat. </p>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={fb} alt="icon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={twit} alt="icon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={lnkd} alt="icon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={ins} alt="icon"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> Our Courses </h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Mearn Stack </Link>
                                    </li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> React
                                        Native </Link></li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Rest API </Link>
                                    </li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Full Stack
                                        Web </Link></li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Angular JS </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> Legal </h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Privacy </Link>
                                    </li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Terms </Link></li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Refunds </Link>
                                    </li>
                                    <li><Link to="/" className="lh-160 themeDarkColor themeColor-h"> Returns </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> Subscribe Now </h4>
                                <p> Aliquam vel elit dolor. Vivamus iaculis finibus rutrum. </p>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <form className="row" action="">
                                        <input type="text" className="col-10 form-control rounded-0 w-auto"
                                               placeholder="Email Address"/>
                                        <button type="submit" className="col-2 btn rounded-0 themeBG themeDeepDark-h">
                                            <img src={locationIcon_white} alt="icon"/>
                                        </button>
                                    </form>
                                </div>

                                <div className="mt-3" style={{marginLeft: '-12px'}}>
                                    <img className="d-inline-block" src={mapLocation} alt="Map Location"/>
                                    <span className="d-inline-block themeDarkColor ms-2"> Dhaka Bangladesh </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <p className="col-12 col-md-8 m-0 fw-bold themeDarkColor text-center text-md-start mb-3 mb-md-0"> &copy; {this.getYear()}. Rabbil Hasan -  All rights reserved. </p>
                            <div className="col-12 col-md-4">
                                <div className="d-flex text-center text-md-start">
                                    <div className="me-3 w-50 h-25 py-2 px-3 bg-white"> <img className="img-fluid" src={app_pay} alt="app_pay"/> </div>
                                    <div className="me-3 w-50 h-25 py-2 px-3 bg-white"> <img className="img-fluid" src={google_pay} alt="google_pay"/> </div>
                                    <div className="me-3 w-50 h-25 py-2 px-3 bg-white"> <img className="img-fluid" src={amazon} alt="amazon"/> </div>
                                    <div className="me-3 w-50 h-25 py-2 px-3 bg-white"> <img className="img-fluid" src={affirm} alt="affirm"/> </div>
                                    <div className="w-50 h-25 py-2 px-3 bg-white"> <img className="img-fluid" src={shop_pay} alt="shop_pay"/> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;
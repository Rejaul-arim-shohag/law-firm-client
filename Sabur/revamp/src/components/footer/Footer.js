import React, {Component, Fragment} from 'react';
import fb from "../../assets/images/facebook.svg";
import twit from "../../assets/images/twitter.svg";
import lnkd from "../../assets/images/linkend.svg";
import ins from "../../assets/images/instagram.svg";
import {Link} from "react-router-dom";
import locationIcon_white from "../../assets/images/location-icon-white.svg";
import mapLocation from "../../assets/images/map-location.svg";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5 secondaryBG">
                    <div className="container">
                        <div className="row text-center text-sm-start">
                            <div className="col-md-3 col-sm-6 mb-4 mb-sm-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> About Us </h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolor
                                    eveniet exercitationem minima non obcaecati, perspiciatis porro quibusdam quis
                                    sapiente, tempora temporibus ullam vitae, voluptatem. Accusamus impedit natus
                                    repellat. </p>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#!">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={fb} alt="..."/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#!">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={twit} alt="..."/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#!">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={lnkd} alt="..."/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center me-3">
                                        <a href="#!">
                                            <div
                                                className="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                                                <img className="h-15" src={ins} alt="..."/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 mb-sm-0">
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
                            <div className="col-md-3 col-sm-6 mb-4 mb-sm-0">
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
                            <div className="col-md-3 col-sm-6 mb-4 mb-sm-0">
                                <h4 className="text-dark fw-bold mb-2 mb-sm-4"> Subscribe Now </h4>
                                <p> Aliquam vel elit dolor. Vivamus iaculis finibus rutrum. </p>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <form className="row" action="">
                                        <input type="text" className="col-10 form-control rounded-0 w-auto"
                                               placeholder="Email Address"/>
                                        <button type="submit" className="col-2 btn rounded-0 themeBG themeDeepDark-h">
                                            <img src={locationIcon_white} alt="..."/>
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
                </div>
            </Fragment>
        );
    }
}

export default Footer;
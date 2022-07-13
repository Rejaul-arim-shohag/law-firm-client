import React, {Component, Fragment} from 'react';

import {Link} from "react-router-dom";

import chat_img from '../../assets/images/chat.png';

import Background from '../../assets/images/why_choose_us-bg.svg';



class WhyChooseUs extends Component {
    render() {
        const bgStyle = {
            backgroundImage: "url(" + Background + ")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left'
        };
        return (
            <Fragment>
                <div className="pt-5 pb-5 lightDeepBG-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center d-none d-md-block" style={bgStyle}>
                                <img src={chat_img} alt="image" className="img-fluid"/>
                            </div>
                            <div className="col-md-6 my-0 my-md-4 pt-4 pt-md-0 position-relative">
                                <p className="small-section-title fw-bold themeColor text-start mb-2 headline-2"> Why Choose Us </p>
                                <h2 className="fw-bold mb-3"> <span className="themeColor">LIVE</span> Class, <span className="themeColor">LIVE</span> Support with <br/> recorded version of every lessons </h2>
                                <img src={chat_img} alt="image" className="img-fluid d-block d-md-none"/>
                                <div className="pb-ce-55-last-child">
                                    <p className="lightColor lh-160 pb-40 mb-12 pt-3 pt-md-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut magna aliquet pharetra. Sed ipsum velit, mollis fermentum metus consequat,
                                        mollis suscipit diam. Phasellus interdum pharetra mi, et ultrices libero tincidunt vitae. Fusce volutpat nisi vitae arcu accumsan tempus.
                                        Quisque commodo commodo tellus, sed commodo nisl maximus in. Integer mattis finibus lorem sit amet efficitur. Sed id viverra eros,
                                        id malesuada elit. Proin vulputate eu lorem ac lacinia.  </p>
                                    <p className="lightColor lh-160 pb-40 mb-12 pt-3 pt-md-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut magna aliquet pharetra. Sed ipsum velit, mollis fermentum metus consequat,
                                        mollis suscipit diam. Phasellus interdum pharetra mi, et ultrices libero tincidunt vitae. Fusce volutpat nisi vitae arcu accumsan tempus.
                                        Quisque commodo commodo tellus, sed commodo nisl maximus in. Integer mattis finibus lorem sit amet efficitur. Sed id viverra eros,
                                        id malesuada elit. Proin vulputate eu lorem ac lacinia.  </p>

                                </div>
                                <div className="position-absolute position-bottom-0 lightDeepBG-2 pt-3 pt-md-0">
                                    <Link to="/join" className="btn rounded-pill text-white themeBG btn-outline-success border-1 px-4 py-2">Join Today</Link>
                                    <Link to="/" className="btn rounded-pill darkColor btn-outline-success border border-success px-4 py-2 ms-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default WhyChooseUs;
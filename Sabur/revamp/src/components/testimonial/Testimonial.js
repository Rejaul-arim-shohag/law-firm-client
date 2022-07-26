import React, {Component, Fragment} from 'react';

// Connecting Style
import "./testimunial.css";

// Images Add
import one from "../../assets/images/test-1.png";
import two from "../../assets/images/test-2.png";
import three from "../../assets/images/test-3.png";
import four from "../../assets/images/test-4.png";
import reviewUser from "../../assets/images/test-user.png";

// Bootstrap
import {Card} from "react-bootstrap";

// Slider
import Slider from "react-slick";

// Carousel Button
function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

class Testimonial extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: true
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="pt-5 pb-5 themeBG position-relative testimonials testimonialsBG">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-6 mb-5 mb-md-0">
                                <div className="h-100 d-flex align-items-center">
                                    <div className="d-inline-block">
                                        <p className="small-section-title sm-sec-bg fw-bold themeColor text-start mb-2 headline-2 text-white-50"> Testimonial </p>
                                        <h2 className="fw-bold mb-3 text-white"> What say Students <br className="d-none d-md-block"/> Community
                                            About <br className="d-none d-md-block"/> Rabbil Hasan </h2>
                                        <p className="bodyLarge fw-bold text-white"> 12.56k+ Students Joined Us </p>
                                        <div className="d-flex justify-content-start">
                                            <img
                                                className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info"
                                                src={one} alt="react icon"/>
                                            <img
                                                className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-success ml--25"
                                                src={two} alt="react icon"/>
                                            <img
                                                className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25"
                                                src={three} alt="react icon"/>
                                            <img
                                                className="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25"
                                                src={four} alt="react icon"/>
                                            <span
                                                className="themeWhiteBG h-60 w-60 p-12 rounded-circle border border-success bw-2 ml--25 d-inline-block headline-4 fw-bold bodyXLarge">20+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-6">
                                <Slider {...settings}>
                                    <div className="mt-100-mx-768 pb-50-mx-768 position-relative">
                                        <div className="row h-400 height-auto-mx-768">
                                            <div className="col-md-6 d-flex align-items-end">
                                                <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                    <div className="d-flex justify-content-center pt-150-mx-768">
                                                        <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                    </div>
                                                    <Card.Body>
                                                        <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                        <span
                                                            className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                        <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                                <img
                                                    className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                    src={reviewUser} alt="ReviewUser"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                        <div className="row h-400 height-auto-mx-768">
                                            <div className="col-md-6 d-flex align-items-end">
                                                <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                    <div className="d-flex justify-content-center pt-150-mx-768">
                                                        <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                    </div>
                                                    <Card.Body>
                                                        <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                        <span
                                                            className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                        <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                                <img
                                                    className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                    src={reviewUser} alt="ReviewUser"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                        <div className="row h-400 height-auto-mx-768">
                                            <div className="col-md-6 d-flex align-items-end">
                                                <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                    <div className="d-flex justify-content-center pt-150-mx-768">
                                                        <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                    </div>
                                                    <Card.Body>
                                                        <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                        <span
                                                            className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                        <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                                <img
                                                    className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                    src={reviewUser} alt="ReviewUser"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                    <div className="row h-400 height-auto-mx-768">
                                        <div className="col-md-6 d-flex align-items-end">
                                            <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                <div className="d-flex justify-content-center pt-150-mx-768">
                                                    <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                </div>
                                                <Card.Body>
                                                    <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                    <span
                                                        className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                    <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                            <img
                                                className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                src={reviewUser} alt="ReviewUser"/>
                                        </div>
                                    </div>
                                </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                    <div className="row h-400 height-auto-mx-768">
                                        <div className="col-md-6 d-flex align-items-end">
                                            <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                <div className="d-flex justify-content-center pt-150-mx-768">
                                                    <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                </div>
                                                <Card.Body>
                                                    <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                    <span
                                                        className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                    <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                            <img
                                                className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                src={reviewUser} alt="ReviewUser"/>
                                        </div>
                                    </div>
                                </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                    <div className="row h-400 height-auto-mx-768">
                                        <div className="col-md-6 d-flex align-items-end">
                                            <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                <div className="d-flex justify-content-center pt-150-mx-768">
                                                    <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                </div>
                                                <Card.Body>
                                                    <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                    <span
                                                        className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                    <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                            <img
                                                className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                src={reviewUser} alt="ReviewUser"/>
                                        </div>
                                    </div>
                                </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                        <div className="row h-400 height-auto-mx-768">
                                            <div className="col-md-6 d-flex align-items-end">
                                                <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                    <div className="d-flex justify-content-center pt-150-mx-768">
                                                        <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                    </div>
                                                    <Card.Body>
                                                        <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                        <span
                                                            className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                        <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                                <img
                                                    className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                    src={reviewUser} alt="ReviewUser"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-100-mx-768 pb-50-mx-768">
                                        <div className="row h-400 height-auto-mx-768">
                                            <div className="col-md-6 d-flex align-items-end">
                                                <Card className="position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
                                                    <div className="d-flex justify-content-center pt-150-mx-768">
                                                        <Card.Img className="d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768" variant="top" src={reviewUser} alt="ReviewUser" />
                                                    </div>
                                                    <Card.Body>
                                                        <p className="headline-4 fw-bold m-0"> Roney Khan </p>
                                                        <span
                                                            className="small-section-title d-inline-block mb-2 themeColor"> UI-Designer </span>
                                                        <span className="bodySmall d-block text-justify">
                                                            Aliquam sagittis tortor felis, id auctor dui tempus sit amet.
                                                            Integer viverra mauris nec auctor sagittis. Morbi euismod lacus et enim commodo imperdiet.
                                                        </span>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
                                                <img
                                                    className="img-fluid rounded-3 position-relative position-left--40 z-index-1"
                                                    src={reviewUser} alt="ReviewUser"/>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Testimonial;
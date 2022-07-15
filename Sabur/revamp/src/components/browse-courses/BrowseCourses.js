import React, {Component, Fragment} from 'react';

// Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bootstrap
import {Card, Dropdown} from "react-bootstrap";

// Images
import img_1 from "../../assets/images/browser-courses-1.png";
import img_2 from "../../assets/images/browser-courses-2.png";
import img_3 from "../../assets/images/browser-courses-3.png";
import img_4 from "../../assets/images/browser-courses-4.png";

// Include Style
import "./browse-courses.css";

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

class BrowseCourses extends Component {
    render() {
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="pt-5 pb-5 lightDeepBG-2 browse-courses">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-2"> Browse Courses </h2>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="small-section-title fw-bold themeColor mb-2 headline-2 bg-transparent themeColor border-0 p-0 themeColor-h themeColor-f"
                                    id="dropdown-basic">
                                    All Category
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">All Category</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Category 01</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Category 02</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Category 03</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <Slider {...settings}>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_1}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_2}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_3}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_4}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_1}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_2}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_3}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_4}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_1}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_2}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_3}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mb-4">
                                <Card className="mx-2 border-0 border-rounded shadow">
                                    <Card.Img className="img-fluid rounded-top" variant="top" src={img_4}/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BrowseCourses;
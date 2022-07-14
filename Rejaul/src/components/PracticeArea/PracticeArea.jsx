import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import accidentImage from "../../Assets/images/accident.jpg";
import "./PracticeArea.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const PracticeArea = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="py-5 my-5">
            <div className="container">
                <p className="text-center">LEGAL HELP</p>
                <h3 className="text-center">Our Legal Services</h3>
                <div className="d-flex justify-content-end">
                    <Button type="button" class="btn btn-outline-primary">View More <AiOutlineArrowRight/></Button>
                </div>
                <Carousel className="py-4 practiceCarosel" responsive={responsive}>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Auto Accident</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Constraction Loans</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Real State</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Finanace Law</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Tax Disputes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Tax Disputes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Tax Disputes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Tax Disputes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Divorce</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Helth Care</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={accidentImage} />
                            <Card.Body>
                                <Card.Title>Child Abuse</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default PracticeArea;
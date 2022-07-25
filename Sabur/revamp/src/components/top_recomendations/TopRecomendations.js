import React, {Component, Fragment} from 'react';

// Include Style
import './top-recomendations.css';
import {Card} from "react-bootstrap";

class TopRecomendations extends Component {
    render() {
        return (
            <Fragment>
                <div className="pt-5 pb-5">
                    <div className="container">
                        <h2 className="section-title mb-4 text-start fw-bold"> Top Recomendations </h2>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-992-25">
                                <Card className="shadow-sm rounded border-0">
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="border-2 border-success rounded-circle h-60 w-60 d-flex justify-content-center align-items-center">
                                                    <span className="border border-5 borderSecondary rounded-circle h-20 w-20 d-inline-block"> </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="headline-4 fw-bold">Mern Stack</h2>
                                                <p className="themeDarkColor mb-0 text-overflow-hidden" style={{ height: 48 }}> This is some content from a media component. This is some content from a media component. </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-992-25">
                                <Card className="shadow-sm rounded border-0">
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="border-2 border-warning rounded-circle h-60 w-60 d-flex justify-content-center align-items-center">
                                                    <span className="border border-5 borderSecondary rounded-circle h-20 w-20 d-inline-block"> </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="headline-4 fw-bold">Express REST</h2>
                                                <p className="themeDarkColor mb-0 text-overflow-hidden" style={{ height: 48 }}> This is some content from a media component. This is some content from a media component. </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-992-25">
                                <Card className="shadow-sm rounded border-0">
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="border-2 border-danger rounded-circle h-60 w-60 d-flex justify-content-center align-items-center">
                                                    <span className="border border-5 borderSecondary rounded-circle h-20 w-20 d-inline-block"> </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="headline-4 fw-bold">Realtime WEB</h2>
                                                <p className="themeDarkColor mb-0 text-overflow-hidden" style={{ height: 48 }}> This is some content from a media component. This is some content from a media component. </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <Card className="shadow-sm rounded border-0">
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="border-2 border-dark rounded-circle h-60 w-60 d-flex justify-content-center align-items-center">
                                                    <span className="border border-5 borderSecondary rounded-circle h-20 w-20 d-inline-block"> </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="headline-4 fw-bold">Lumen  REST</h2>
                                                <p className="themeDarkColor mb-0 text-overflow-hidden" style={{ height: 48 }}> This is some content from a media component. This is some content from a media component. </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TopRecomendations;
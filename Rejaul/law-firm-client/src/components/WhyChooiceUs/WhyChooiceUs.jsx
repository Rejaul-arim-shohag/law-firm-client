import React, { useEffect } from 'react';
import curveImg from "../../Assets/images/curve-2.b04970a8.svg"
import lawImage from "../../Assets/images/compliant.png"
import { ChooiceUsList } from '../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';
const WhyChooiceUs = () => {
    useEffect(() => {
        ChooiceUsList()
    }, [])
    const chooiceUsList = useSelector((state) => state.chooiceUs.chooiceUsList);
    return (
        <div style={{ backgroundColor: "#E9F5EC" }} className="py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5">
                    <h2>WHY CHOOICE US?</h2>
                    <img style={{ top: "-13px" }} className="position-relative" src={curveImg} alt="" />
                </div>
                <div className="row">

                    {
                        chooiceUsList.map((item, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                    <div className="position-relative border-0 card ">
                                        <div className="pt-4  d-flex align-items-center justify-content-center">
                                            <img style={{ width: "70px" }} src={item.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="position-relative border-0 card">
                            <div className="pt-4  d-flex align-items-center justify-content-center">
                               <img style={{width:"70px"}} src={lawImage} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Document Reviewing</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="position-relative border-0 card">
                            <div className="pt-4  d-flex align-items-center justify-content-center">
                               <img style={{width:"70px"}} src={lawImage} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">24/7 Support</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="position-relative border-0 card">
                            <div className="pt-4  d-flex align-items-center justify-content-center">
                               <img style={{width:"70px"}} src={lawImage} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="text-center">Discounted Rate</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default WhyChooiceUs;
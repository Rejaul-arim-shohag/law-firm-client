import React from 'react';
import "./Testimonial.css";
import clinet1 from "../../Assets/images/clinet1.jpg"
import clinet2 from "../../Assets/images/client2.jpg"
import ReviewSlider from '../ReviewSlider/ReviewSlider';

const Testimonial = () => {
    const data = [
        {
            img: clinet1
        },
        {
            img: clinet2
        },
        {
            img: clinet1
        },
        {
            img: clinet2
        },
        {
            img: clinet1
        },


    ]
    return (
        <div className="testimonial my-3">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <p className="text-white">Testimonial</p>
                            <h3 className="text-white">What Say Client About Our <br /> Law Firm</h3>
                            <p className="text-white">OVER 100 5-STAR CLIENT REVIEWS</p>
                        </div>
                        <div className="w-100 reviewImageArea d-flex justify-content-start">
                            {
                                data.map((client) => {
                                    return (
                                        <div className="clinetreviewImage">
                                            <img src={client["img"]} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="reviewCount">
                                <p>400+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 reviewSliders">
                        <ReviewSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
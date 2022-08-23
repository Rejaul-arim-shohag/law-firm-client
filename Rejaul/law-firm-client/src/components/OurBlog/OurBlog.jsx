import React from 'react';
import curveImg from "../../Assets/images/curve-2.b04970a8.svg"

const OurBlog = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="mx-auto text-center">
                    <h5 className="text-secondary">Blog</h5>
                    <h2 className="text-center text-uppercase font-weight-bold">OUR Latest Blog</h2>
                    <img src={curveImg} style={{ top: "-13px", width: "25%" }} className="position-relative " alt="" />
                </div>
                <div className="row">
                    <div className="col-12"></div>
                col-12 col-md-6 col-lg-3 mb-4
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
import React from 'react';
import { FaUserAlt } from "react-icons/fa";
const BlogComments = () => {
    return (
        <div className="bg-white">
            <div className="container">
                <h5 className="mb-4">comments</h5>
                <div className="d-flex justify-content-start">
                    <FaUserAlt />
                    <h6 style={{ marginLeft: "10px" }} className="text-uppercase">Rejaul karim,</h6>
                    <h6 style={{ marginLeft: "10px" }}>9 May 2022</h6>
                </div>
                <h6 style={{ marginLeft: "25px" }} className="text-secondary py-2">Lorem ipsum dolor sit amet.</h6>

                <div className="blogComment mt-5 pb-5">
                    <label>Enter your name:</label>
                    <input className="form-control" type="text" />
                    <label className="mt-3">comments:</label>
                    <textarea className="form-control" rows="6"></textarea>
                    <div className="col-12 col-md-2">
                        <button className="w-100 mt-2 btn btn-success">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogComments;
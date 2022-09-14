import React, { useState } from 'react';
import ReviewModal from '../ReviewModal/ReviewModal';

const ClientReview = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div style={{ backgroundColor: "#E9F5EC" }} className="py-5">
            <div className="container">
               
                <div className="row gx-5">
                    <div className="col-12 col-md-8 mx-auto">
                        <h4 className="text-secondary mb-4 mt-5">Say Something About Our LAW Firm</h4>
                        <div className="row  gx-4">
                            <div className="col-12 col-md-6 mt-2">
                                <input placeholder="Your Name" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                                <input  placeholder="Email Address" className="py-2 form-control inputTextArea" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-12 col-md-12 mt-4">
                                <textarea  className="form-control inputTextArea" placeholder="Comment" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="setCommentBtn d-flex justify-content-end mt-4">
                            <button  className="btn btn-success px-5 py-3">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            {/* <h6 className="text-center mb-3">
                <button  onClick={() => setModalShow(true)} className="mainButton2">Write a Review</button>
                <ReviewModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </h6> */}
        </div>
    );
};

export default ClientReview;
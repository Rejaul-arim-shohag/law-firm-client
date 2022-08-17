import React, { useState } from 'react';
import ReviewModal from '../ReviewModal/ReviewModal';

const ClientReview = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h6 className="text-center mb-3">
                <button  onClick={() => setModalShow(true)} className="mainButton2">Write a Review</button>
                <ReviewModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </h6>
        </div>
    );
};

export default ClientReview;
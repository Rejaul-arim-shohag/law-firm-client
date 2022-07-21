import React from 'react';
import customer1 from "../../Assets/images/customer1.webp"
const OurClient = () => {
    return (
        <div className="ourClient py-5 bg-light">
            <div className="container">
                <div className="card border-0 p-5">
                    <img src={customer1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurClient;
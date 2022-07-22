import React from 'react';
import attorny1 from "../../Assets/images/people-1.jpg";
import attorny2 from "../../Assets/images/people-2.jpg";
import attorny3 from "../../Assets/images/people-3.jpg";
import attorny4 from "../../Assets/images/people-4.jpg";
import "./TopRecomendation.css"
const TopRecomendaton = () => {
    return (
        <div className="my-3">
            <div className="container">
                <h4>MEET OUR ATTORNEYS</h4>
                <div className="attorneys  my-4  g-4">
                    <div className="shadow bg-light p-2">
                        <div className="attorneyimage">
                            <img src={attorny4} alt="attorny" />
                        </div>
                        <div className="Attornycontent">
                            <h6>Ben Jonson</h6>
                            <p>LAYER & CEO</p>
                            <p>Tel: 800-700-6200</p>
                        </div>
                    </div>
                    <div className="shadow bg-light p-2">
                        <div className="attorneyimage">
                            <img src={attorny1} alt="attorny" />
                        </div>
                        <div className="Attornycontent">
                            <h6>Rodney Stratton</h6>
                            <p>LAYER & CEO</p>
                            <p>Tel: 800-700-6200</p>
                        </div>
                    </div>
                    <div className="shadow bg-light p-2">
                        <div className="attorneyimage">
                            <img src={attorny2} alt="attorny" />
                        </div>
                        <div className="Attornycontent">
                            <h6>Avie Beaton</h6>
                            <p>LAYER & CEO</p>
                            <p>Tel: 800-700-6200</p>
                        </div>
                    </div>
                    <div className="shadow bg-light p-2">
                        <div className="attorneyimage">
                            <img src={attorny3} alt="attorny" />
                        </div>
                        <div className="Attornycontent">
                            <h6>Ashley Fletcher</h6>
                            <p>LAYER & CEO</p>
                            <p>Tel: 800-700-6200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRecomendaton;
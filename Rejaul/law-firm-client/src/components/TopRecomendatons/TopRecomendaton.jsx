import React, { useEffect } from 'react';
import { AttorneyGetRequest } from '../../ApiRequest/APIRequest';
import { useSelector } from "react-redux";
import "./TopRecomendation.css"
const TopRecomendaton = () => {
    useEffect(() => {
        AttorneyGetRequest()
            .then((result) => {
                // console.log(result)
            })
    }, [])
    const attorneyList = useSelector((state) => state.attorney.attorneyList);
    const attorneyListSlice = attorneyList.slice(0, 4);
    return (
        <div className="my-3">
            <div className="container">
                <h4>MEET OUR ATTORNEYS</h4>
                <div className="attorneys  my-4  g-4">
                    {
                        attorneyListSlice.map((attorney) => {
                            return (
                                <div className="shadow bg-light p-2">
                                    <div className="attorneyimage">
                                        <img src={attorney.photo} alt="attorny" />
                                    </div>
                                    <div className="Attornycontent">
                                        <h6>{attorney.Name}</h6>
                                        <p>{attorney.title}</p>
                                        <p>Tel:{attorney.mobile}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default TopRecomendaton;
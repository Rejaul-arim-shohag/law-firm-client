import React from 'react';
import "./PracticeArea.css";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { servicesGetRequest } from '../../ApiRequest/APIRequest';

const PracticeArea = () => {
    useEffect(() => {
        servicesGetRequest()
    }, [])
    const ServiceList = useSelector((state) => state.services.serviceList);
    const ServiceListSlice = ServiceList.slice(0, 6);
    return (
        <div className="py-5 mt-5 mb-5 practice_area-fullSection">
            <div className="container">
                <h2 className="text-center practiceAreaMainHeading">OUR AREAS OF EXPERTISE</h2>
                <h4 className="text-center mt-2 text-secondary">The Learned Counsels | Lawyers & Consultants</h4>
                <div className="practiceAreaP mt-2">
                    <p className="text-center">The Learned Counsels is a vibrant law firm accommodating a number of young and bright lawyers & consultants. We are capable of meeting the demands  of the growing world of divergent legal issues and maintain high professional standards with following areas of expertise.</p>
                </div>
                <div className="expertise_area mt-5">
                    {ServiceListSlice.map((ServiceList) => {
                        return (
                            <div className="expertise">
                                <div className="iconAndServiceName">
                                    <h4>
                                        <img src={ServiceList.icon} className="serviceIcon" alt="" />
                                    </h4>
                                    <h4>{ServiceList.Name}</h4>
                                </div>
                                <p>
                                    {ServiceList.description}
                                </p>
                                <div className="practiceArea_button">
                                    <button className="btn btn-outline-success">READ MORE</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default PracticeArea;
import React from 'react';
import "./PracticeArea.css";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { servicesGetRequest } from '../../ApiRequest/APIRequest';
import curveSmall from "../../Assets/images/curve-2.b04970a8.svg";
import { CgArrowLongRight} from "react-icons/cg";
const PracticeArea = () => {
    useEffect(() => {
        servicesGetRequest()
    }, [])
    const ServiceList = useSelector((state) => state.services.serviceList);
    const ServiceListSlice = ServiceList.slice(0, 6);
    
    return (
        <div className="pt-2 pb-5  mt-2 mb-5 practice_area-fullSection">
            <div className="container">
                <div className="mx-auto text-center">
                    <h2 className="text-center practiceAreaMainHeading">OUR AREA OF PRACTICES</h2>
                    <img style={{top:"-13px"}} className="position-relative" src={curveSmall} alt="" />
                    <h5>The Learned Counsels | Lawyers & Consultants</h5>
                </div>
                {/* <div className="practiceAreaP mt-2">
                    <p className="text-center">The Learned Counsels is a vibrant law firm accommodating a number of young and bright lawyers & consultants. We are capable of meeting the demands  of the growing world of divergent legal issues and maintain high professional standards with following areas of expertise.</p>
                </div> */}
                <div className="expertise_area mt-5">
                    {ServiceListSlice.map((ServiceList) => {
                        return (
                            <div className="expertise pb-3 mt-1 mt-2">
                                <div className="iconAndServiceName">
                                    <h5>
                                        <img src={ServiceList.icon} className="serviceIcon" alt="" />
                                    </h5>
                                    <h5>{ServiceList.Name}</h5>
                                </div>
                                <p>
                                    {ServiceList.description.slice(0, 150)}
                                </p>
                                <div className="practiceArea_button">
                                    <button className="btn btn-outline-success">READ MORE <CgArrowLongRight/></button>
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
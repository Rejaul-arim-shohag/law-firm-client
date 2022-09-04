import React from 'react';
import "./OurTeam.css";
import { useSelector } from "react-redux";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from 'react';
import { AttorneyGetRequest } from '../../ApiRequest/APIRequest';
import curveImage2 from "../../Assets/images/curve-2.b04970a8.svg"
const OurTeam = () => {
    useEffect(() => {
        AttorneyGetRequest()
    }, [])
    const attorneyList = useSelector((state) => state.attorney.attorneyList);
    const team = attorneyList.slice(0, 8);
    return (
        <div className="ourTeam py-5 mb-5">
            <div className="container">
                <div className="mx-auto text-center mb-5">
                    <h2 className="text-center practiceAreaMainHeading">OUR TEAM</h2>
                    <img style={{ top: "-13px", width:"300px"}} className="position-relative" src={curveImage2} alt="" />
                    <h5>The Learned Counsels | Lawyers & Consultants</h5>
                </div>
            
                <div className="row">
                    {
                        team.map((t) => {
                            return (
                                <div className="col-12 col-md-3">
                                    <div className="card">
                                        <img src={t.photo} alt="Lawyer" />
                                        <div className="card-body">
                                            <h6 className="card-title">{t.Name}</h6>
                                            <p className="text-secondary mb-0 pb-0">{t.title}</p>
                                            <p style={{ marginBottom: "0px", marginTop: "0px" }}><AiOutlinePhone /><span style={{ marginLeft: "5px" }}>{t.mobile}</span></p>
                                            <p><HiOutlineMail /><span style={{ marginLeft: "5px" }}>{t.email}</span></p>
                                            {/* <p class="card-text">{t.description}</p> */}
                                        </div>
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

export default OurTeam;
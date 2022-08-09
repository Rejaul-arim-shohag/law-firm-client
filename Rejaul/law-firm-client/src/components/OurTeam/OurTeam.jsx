import React from 'react';
import "./OurTeam.css";
import { useSelector } from "react-redux";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from 'react';
import { AttorneyGetRequest } from '../../ApiRequest/APIRequest';

const OurTeam = () => {
    useEffect(() => {
        AttorneyGetRequest()
    },[])
    const attorneyList = useSelector((state) => state.attorney.attorneyList);
    const team = attorneyList.slice(0, 8);
    return (
        <div className="ourTeam py-5 mb-5">
            <div className="container">
                <h2 className="text-center">OUR TEAM</h2>
                <h6 className="text-center">The Learned Counsels | Lawyers & Consultants</h6>
                <div className="teams_container">
                    {
                        team.map((t) => {
                            return (
                                <div>
                                    <div class="card">
                                        <img class="card-img-top" src={t.photo} alt="Lawyer" />
                                        <div class="card-body">
                                            <h5 class="card-title">{t.Name}</h5>
                                            <p>{t.title}</p>
                                            <p><AiOutlinePhone />{t.mobile}</p>
                                            <p><HiOutlineMail />{t.email}</p>
                                            <p class="card-text">{t.description}</p>
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
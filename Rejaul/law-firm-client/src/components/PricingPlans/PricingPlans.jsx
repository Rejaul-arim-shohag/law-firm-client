import React from 'react';
import "./PringingPlans.css";
import { ImCross } from "react-icons/im";
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { planGetRequest } from '../../ApiRequest/APIRequest';
import curveImg from "../../Assets/images/curve-2.b04970a8.svg"

const PricingPlans = () => {
    useEffect(() => {
        planGetRequest()
    }, [])
    const ourPlanList = useSelector((state) => state.plans.plansList);
    const ServiceListSlice = ourPlanList.slice(0, 3);
    return (
        <div className="priceing_plans">
            <div className="container">
                <div className="priceing_content mx-auto text-center">
                    <h2 className="text-center text-uppercase font-weight-bold">OUR PLAN</h2>
                    <img src={curveImg} style={{ top: "-13px", width:"25%" }} className="position-relative " alt="" />
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil <br /> modi ipsum facilis deserunt eveniet explicabo, tenetur impedit iste ea.</p>
                </div>
                <div className="plansGridContainer pt-5">

                {
                    ServiceListSlice.map((service) => {
                        return (
                                <div key={service._id} className="single_plan shadow">
                                    <h4 >{service.planName}</h4>
                                    <p>$<span className="h4">{service.fee}</span> <span>{service.benifit}</span></p>
                                    <h6><AiOutlineCheck />{service.extraBenifit1}</h6>
                                    <h6><AiOutlineCheck />{service.extraBenifit2}</h6>
                                    <h6><AiOutlineCheck />{service.extraBenifit3}</h6>
                                    <h6><AiOutlineCheck />{service.extraBenifit4}</h6>
                                    <h6><AiOutlineCheck />{service.extraBenifit5}</h6>
                                    <button className="navbarButton mt-1">Book Now</button>
                                </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;
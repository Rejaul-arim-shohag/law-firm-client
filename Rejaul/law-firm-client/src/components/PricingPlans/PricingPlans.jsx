import React from 'react';
import "./PringingPlans.css";
import { ImCross } from "react-icons/im";
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { planGetRequest } from '../../ApiRequest/APIRequest';

const PricingPlans = () => {
    useEffect(() => {
        planGetRequest()
    }, [])
    const ourPlanList = useSelector((state) => state.plans.plansList);
    const ServiceListSlice = ourPlanList.slice(0, 3);
    console.log(ServiceListSlice)
    return (
        <div className="priceing_plans">
            <div className="container">
                <div className="priceing_content">
                    <h2 className="text-center">Choose Your Plan</h2>
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
                                    <button className="mainButton2 mt-1">Sign up</button>
                                </div>
                            
                        )
                    })
                }
                </div>
                {/* <div className="single_plan shadow">
                        <h4 className="active_plan">Flat Fee</h4>
                        <p>$<span className="planing_price h4">3,500</span> <span>Great for big cases</span></p>
                        <h6><AiOutlineCheck />Lawyer Advice</h6>
                        <h6><AiOutlineCheck />24/7 Access to lawyer phone</h6>
                        <h6><AiOutlineCheck />Upfront cost and expectancy</h6>
                        <h6><AiOutlineCheck />Payment plans available</h6>
                        <h6><AiOutlineCheck />No overcharges</h6>
                        <button className="mainButton2 mt-1">Sign up</button>
                    </div> */}
                {/* <div className="single_plan shadow">
                        <h4>Hourly Fee</h4>
                        <p>$<span className=" h4">500</span> <span>Many Questions</span></p>
                        <h6><AiOutlineCheck />Lawyer Advice</h6>
                        <h6><AiOutlineCheck />24/7 Access to lawyer phone</h6>
                        <h6><AiOutlineCheck />Upfront cost and expectancy</h6>
                        <h6><AiOutlineCheck />Payment plans available</h6>
                        <h6><AiOutlineCheck />No overcharges</h6>
                        <button className="mainButton2 mt-1">Sign up</button>
                    </div> */}

            </div>
        </div>
    );
};

export default PricingPlans;
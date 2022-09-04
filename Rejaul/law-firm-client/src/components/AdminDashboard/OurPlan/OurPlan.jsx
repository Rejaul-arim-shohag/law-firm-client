import React, { useEffect } from 'react';
import { PlanDeleteRequest, planGetRequest } from '../../../ApiRequest/APIRequest';
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import { useNavigate } from 'react-router-dom';

const OurPlan = () => {
    let navigate = useNavigate()
    useEffect(() => {
        planGetRequest()
    }, [])
    const ourPlanList = useSelector((state) => state.plans.plansList);
    const handleDeletePlan = (id) => {
        DeleteAlert().then((res) => {
            if (res) {
                PlanDeleteRequest(id)
                .then((result)=>{
                    if(result===true){
                        planGetRequest()
                    }
                })
                
            }
        })
    }
    const handleNavigate=(id)=>{
        navigate("/planEdit/"+id)
    }
    return (
        <>
            <div className="container">
                <div className="col-12">
                    <div className="d-flex justify-content-between py-3">
                        <h5>Our Plans</h5>
                        <button onClick={()=>navigate("/AddOurPlan")} className="btn btn-success">Add Plan</button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive data-table">
                                        <table className="table ">
                                            <thead className="sticky-top bg-white">
                                                <tr>
                                                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Plan Name</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Fee</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ourPlanList.map((item, i) =>
                                                        <tr key={item._id}>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item?.planName}</p>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item?.fee}</p>
                                                            </td>
                                                            <td className="text-center">
                                                                <p className="text-xs font-weight-bold mb-0">{item?.benifit}</p>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="float-right h-auto">
                                                                    <div className="user-dropdown">
                                                                        <button type="button" class="icon-nav btn btn-success btn-sm actionBtn"><BsThreeDotsVertical /></button>
                                                                        <div className="action-dropdown-content">
                                                                            <a className="side-bar-item-user">
                                                                                <span onClick={()=>handleNavigate(item._id)}  className="side-bar-item-caption">Edit</span>
                                                                            </a>

                                                                            <a className="side-bar-item-user">
                                                                                <span onClick={() => handleDeletePlan(item._id)} className="side-bar-item-caption">Delete</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default OurPlan;
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { serviceDeleteRequest, servicesGetRequest } from '../../../ApiRequest/APIRequest';
import { BsThreeDotsVertical } from "react-icons/bs";
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import { useNavigate } from 'react-router-dom';

const ServiceList = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        servicesGetRequest()
    }, [])
    const ServiceList = useSelector((state) => state.services.serviceList);
    const handleDeleteService=(id)=>{
        DeleteAlert().then((result)=>{
            if(result){
                serviceDeleteRequest(id)
                .then((result)=>{
                    if(result===true){
                        servicesGetRequest()
                    }
                })
            }
        })

    }
    const handleNavigateToUpdate=(id)=>{
        navigate("/admin/editService/"+id)
    }
    return (
        <>
            <div className="container">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive data-table">
                                        <table className="table ">
                                            <thead className="sticky-top bg-white">
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ServiceList.map((item, i) =>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src={item.icon} className="iconAvatar me-3" />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0  text-xs">{item.Name}</h6>

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.description.slice(0, 60)+"..."}</p>
                                                            </td>
                                                            <td>
                                                                <div className="float-right h-auto">
                                                                    <div className="user-dropdown">
                                                                    <button type="button" class="icon-nav btn btn-success btn-sm actionBtn"><BsThreeDotsVertical /></button>
                                                                        <div className="action-dropdown-content">
                                                                            <a className="side-bar-item-user">
                                                                             {/* onClick={()=>navigateToEditProduct(item._id)} */}
                                                                                <span onClick={()=>handleNavigateToUpdate(item.serviceID)} className="side-bar-item-caption">Edit</span>
                                                                            </a>
                                                                            <a className="side-bar-item-user">
                                                                                <span onClick={()=>handleDeleteService(item.serviceID)} className="side-bar-item-caption">Delete</span>
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

export default ServiceList;
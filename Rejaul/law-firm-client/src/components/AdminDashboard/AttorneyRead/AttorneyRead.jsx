import React from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { AttorneyDeleteRequest, AttorneyGetRequest } from '../../../ApiRequest/APIRequest';
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { DeleteAlert } from '../../../Helper/DeleteHelper';
const AttorneyRead = () => {
    let navigate= useNavigate()
    useEffect(() => {
        AttorneyGetRequest()
    }, [])
   let attorneyList = useSelector((state) => state.attorney.attorneyList);
    const navigateToEditProduct = (Id) => {
        navigate("/updateAttorney"+"/"+Id)
    }

    const handleDeleteAttorney=(id)=>{
        DeleteAlert().then((res)=>{
            if(res){
                AttorneyDeleteRequest(id)
            }
        })
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
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">lawyer</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">email</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">mobile</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">title</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    attorneyList.map((item, i) =>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src={item.photo} className="avatar me-3" />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0  text-xs">{item.Name}</h6>

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.email}</p>
                                                            </td >
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.mobile}</p>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.title}</p>
                                                            </td>
                                                            <td>
                                                                <div className="float-right h-auto d-flex">
                                                                    <div className="user-dropdown">
                                                                    <button type="button" class="icon-nav btn btn-success btn-sm actionBtn"><BsThreeDotsVertical /></button>
                                                                        <div className="action-dropdown-content">
                                                                            <a className="side-bar-item-user">
                                                                                <span onClick={()=>navigateToEditProduct(item._id)} className="side-bar-item-caption">Edit</span>
                                                                            </a>
                                                                            <a className="side-bar-item-user">
                                                                                <span onClick={()=>handleDeleteAttorney(item._id)} className="side-bar-item-caption">Delete</span>
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

export default AttorneyRead;
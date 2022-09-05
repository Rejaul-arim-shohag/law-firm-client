import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ChooiceUsList } from '../../../ApiRequest/APIRequest';
import ReviewModal from "../../ReviewModal/ReviewModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux"
const ChoiceUsList = () => {
    let navigate = useNavigate()
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        ChooiceUsList()
    }, [])
    const chooiceUsList = useSelector((state) => state.chooiceUs.chooiceUsList);
    console.log(chooiceUsList)
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between mx-2 py-4">
                    <h5 className="font-weight-bold">List of Why choose us</h5>
                    <button onClick={() => setModalShow(true)} className="btn btn-success">Add item</button>
                    <ReviewModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive data-table">
                                        <table className="table ">
                                            <thead className="sticky-top bg-white">
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">icon</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    chooiceUsList.map((item, i) =>
                                                        <tr>
                                                            <td>

                                                                <div>
                                                                    <img src={item.image} className="avatar me-3" />
                                                                </div>


                                                            </td>
                                                            <td>
                                                                <h6 className="mb-0  text-xs">{item.title}</h6>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.description}</p>
                                                            </td >
                                                            <td>
                                                                <div className="float-right h-auto d-flex">
                                                                    <div className="user-dropdown">
                                                                        <button type="button" class="icon-nav btn btn-success btn-sm actionBtn"><BsThreeDotsVertical/></button>
                                                                        <div className="action-dropdown-content">
                                                                            <a className="side-bar-item-user py-2">
                                                                                <span className="side-bar-item-caption">Edit</span>
                                                                            </a>
                                                                            <a className="side-bar-item-user py-2">
                                                                                <span className="side-bar-item-caption">Delete</span>
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
        </div>
    );
};

export default ChoiceUsList;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { readAllAppointmentList } from '../../../ApiRequest/APIRequest';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';
const AppointmentList = () => {
    let [fromDate, setFromdate] = useState("0");
    let [toDate, setToDate] = useState("0");

    let [perPage, setPerPage] = useState(5);
    let [status, setStatus] = useState("NEW")
    useEffect(() => {
        readAllAppointmentList(fromDate, toDate, 1, perPage, status)
    }, [])

    const allAppointmentList = useSelector((state) => (state.allAppointment.All));
    const TotalCount = useSelector((state) => (state.allAppointment.Total))

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }
    const handlePerPage = (e) => {
        setPerPage(e.target.value)
    }
    const handleDateChange = (e) => {
        setToDate(e.target.value)
    }
    const handleFormDateChange = (e) => {
        setFromdate(e.target.value)
    }
    const handleSearchBtn = () => {
        if (fromDate == 0) {
            ErrorToast("From-date and To-date require")
        } else if (toDate == 0) {
            ErrorToast("From-ate and To-date require")
        } else {
            readAllAppointmentList(fromDate, toDate, 1, perPage, status)
        }
    }
    const handleOnchangeStatus = (e) => {
        readAllAppointmentList(fromDate, toDate, 1, perPage, e.target.value)
    }

    const statusColor = (status) => {
        if (status === "NEW") {
            return <button className="btn btn-warning btn-sm">NEW</button>
        } else if (status === "COMPLETED") {
            return <button className="btn btn-primary btn-sm">COMPLETED</button>
        } else {
            return <button className="btn btn-info btn-sm">CANCELED</button>
        }
    }

    const handlePageClick = (event) => {
        // GetProductList(event.selected+1,perPage,searchKeyword)
        readAllAppointmentList(fromDate, toDate, event.selected + 1, perPage, status)
    };
    return (
        <>
            <div className="container">
                <h4>Appointment List</h4>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row d-flex justify-content-between ">
                                        <div className="col-2">
                                            <select onChange={handleOnchangeStatus} onClick={handleChangeStatus} className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                                <option selected value="NEW">NEW</option>
                                                <option value="COMPLETED">COMPLETED</option>
                                                <option value="CANCELED">CANCELED</option>
                                                <option value="0">All</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <select onChange={handlePerPage} className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                                <option value="5">5 Per Page</option>
                                                <option value="10">10 Per Page</option>
                                                <option value="20">20 Per Page</option>
                                                <option value="30">30 Per Page</option>
                                                <option value="50">50 Per Page</option>
                                                <option value="100">100 Per Page</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <div className="input-group mb-3">
                                                <span className="mt-2  mx-1">From</span>
                                                <input onChange={handleFormDateChange} placeholder="From Date" type="date" className="form-control form-control-sm" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="input-group mb-3">
                                                <span className="mt-2 mx-1">To</span>
                                                <input onChange={handleDateChange} placeholder="To Date" type="date" className="form-control form-control-sm" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            </div>

                                        </div>
                                        <div className="col-2 mb-3">
                                            <button onClick={handleSearchBtn} className="btn btn-outline-primary btn-sm mb-0" type="button">Search</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {
                                                allAppointmentList.length > 0 ? <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Phone</th>
                                                            <th scope="col">Service</th>
                                                            <th scope="col">Time</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            allAppointmentList.map((item, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.phone}</td>
                                                                        <td>{item.serviceName}</td>
                                                                        <td>{item.slot}</td>
                                                                        <td>{item.apointmentDate.slice(0, 10)}</td>
                                                                        <td><span className="text-success">{item.status}</span></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table> : <h4 className="my-5 text-center text-warning">No Appointment Found on This Date</h4>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <nav aria-label="Page navigation example">
                            <ReactPaginate
                                previousLabel="<"
                                nextLabel=">"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                pageCount={TotalCount / perPage}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentList;
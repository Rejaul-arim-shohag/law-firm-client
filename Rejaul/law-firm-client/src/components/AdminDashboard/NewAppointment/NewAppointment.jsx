import React from 'react';
import { useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { readAppointmentList, updateAppointment } from '../../../ApiRequest/APIRequest';
import Dropdown from 'react-bootstrap/Dropdown';
import { SuccessToast } from '../../../Helper/FormHelper';
const NewAppointment = () => {
    useEffect(() => {
        readAppointmentList("NEW")
    }, [])
    const NewAppointment = useSelector((state) => state.appointment.New);
    const handleUpdateAppointment=(status, id)=>{
        updateAppointment(status, id)
        .then((result)=>{
            if(result===true){
                SuccessToast("Update success")
                readAppointmentList("NEW")
            }
        })
    }
    return (
        <div className="container">
            <div className=" card">
                <div className="card-body">
                    <h4 className="text-bold">NEW APPOINTMENTS</h4>
                    <table className="table table-hover">
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
                                NewAppointment.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.serviceName}</td>
                                            <td>{item.slot}</td>
                                            <td>{item.apointmentDate}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="warning" size="sm" id="dropdown-basic">
                                                        {/* <BsThreeDotsVertical /> */}
                                                        <span >new</span>
                                                       {/* <p> NEW</p> */}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={()=>handleUpdateAppointment("COMPLETED",item._id)}>Completed</Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>handleUpdateAppointment("CANCELED",item._id)}>Cancel</Dropdown.Item>               
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewAppointment;
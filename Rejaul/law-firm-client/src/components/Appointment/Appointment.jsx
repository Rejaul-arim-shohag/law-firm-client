import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { createAppointment, readSlots, servicesGetRequest } from '../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty } from '../../Helper/FormHelper';
import { SuccessAlertHelper } from '../../Helper/SuccessHelper';

const Appointment = () => {
    let nameRef, emailRef, phoneRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
        readSlots()
        servicesGetRequest()
    }, [])
    const slots = useSelector((state) => (state.slot.slotList));

    const ServiceList = useSelector((state) => state.services.serviceList);

    const [serviceName, setServiceName] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const handleServiceChange = (e) => {
        setServiceName(e.target.value)
    }
    const handleSlotChange = (e) => {
        setTime(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleCreateAppointment = () => {
        const name = nameRef.value;
        const email = emailRef.value;
        const phone = phoneRef.value;
        const dateString = new Date(date)
        if (IsEmpty(name)) {
            ErrorToast("Name require")
        }
        else if (IsEmail(email)) {
            ErrorToast("valid email require")
        }
        else if (IsEmpty(phone)){
            ErrorToast("phone number require")
        }
        else if (IsEmpty(serviceName)) {
            ErrorToast("Select your service")
        }
        else if (IsEmpty(time)) {
            ErrorToast("Choose your time")
        }
        else if (IsEmpty(date)) {
            ErrorToast("Choose your Date")
        }
        else {
            createAppointment(name,email,phone,serviceName,time,dateString)
            .then((result)=>{
                if(result===true){
                    nameRef.value=""
                    emailRef.value=""
                    phoneRef.value=""
                    setServiceName("")
                    setTime("")
                    setDate("")
                    SuccessAlertHelper()
                }
            })
        }
    }
    return (
        <div className="mt-5">
            <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-12">
                        <div className="card py-3 px-2 border-0 mb-5">
                            <h1 className="text-center mt-4 mb-5">Book Appointment</h1>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Name</label>
                                        <input required ref={(input) => nameRef = input} className="form-control outline: none" type="text" style={{ boxShadow: "none", borderRadius: "20px" }} />
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Email</label>
                                        <input required ref={(input) => emailRef = input} className="form-control outline: none" type="text" style={{ boxShadow: "none", borderRadius: "20px" }} />
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Phone</label>
                                        <input required ref={(input) => phoneRef = input} className="form-control outline: none" type="text" style={{ boxShadow: "none", borderRadius: "20px" }} />
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Choose Service</label>
                                        <select onChange={handleServiceChange} className="form-select outline: none" type="text" style={{ boxShadow: "none", borderRadius: "20px" }}>
                                            <option selected></option>
                                            {
                                                ServiceList.map((service, index) => {
                                                    return (
                                                        <option key={index} value={service.Name}>{service.Name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Time</label>
                                        <select onChange={handleSlotChange} className="form-select outline: none" type="text" style={{ boxShadow: "none", borderRadius: "20px" }}>
                                            <option selected>Choose Time</option>
                                            {
                                                slots.map((slot) => {
                                                    return (
                                                        <option key={slot._id} value={slot.slotTime}>{slot.slotTime}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="col-md-4 col-12 mt-3">
                                        <label className="mb-1">Date</label>
                                        <input onChange={handleDateChange} className="form-control outline: none" type="date" style={{ boxShadow: "none", borderRadius: "20px" }} />
                                    </div>
                                    <div className="col-md-4 col-12 mt-4">
                                        <button onClick={handleCreateAppointment} className="btn btn-success w-100" style={{ boxShadow: "none", borderRadius: "20px" }}>Book Now</button>
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

export default Appointment;
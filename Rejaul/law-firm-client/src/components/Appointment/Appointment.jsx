import React, { useState } from 'react';
import "./Appointment.css";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApointmentModal from './ApointmentModal';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [modalShow, setModalShow] = useState(false);
    // const toggleModal = () => {
    //     setModalShow(!modalShow)
    // }
    const today = new Date();
    let footer = <p>Please pick a day.</p>;
    const appointmentData = [
        {
            name: "Family Law",
            slots: "6",
            bill: "70$"

        },
        {
            name: "Commercial Law",
            slots: "6",
            bill: "100$"

        },
        {
            name: "Banking Law",
            slots: "6",
            bill: "80$"

        },
        {
            name: "Property Law",
            slots: "6",
            bill: "120$"

        },
        {
            name: "Construction Law",
            slots: "6",
            bill: "100$"

        },
        {
            name: "Investment Law",
            slots: "3",
            bill: "30$"

        },
        {
            name: "Family Law",
            slots: "6",
            bill: "70$"

        },
    ]
    const css = `
    .my-selected:not([disabled]) { 
        font-weight: bold; 
        border: 2px solid  #169156;
        color:#169156;
    }
    .my-selected:hover:not([disabled]) { 
        border-color: #000133;
        color: #000133;
    }
    .my-today { 
        font-weight: bold;
        font-size: 20px;
        color: #169156;
    }
    `;
    return (
        <div className="appointment my-5 py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 px-3">
                        <style>{css}</style>
                        <DayPicker
                            mode="single"
                            selected={date}
                            disabled={{ before: today }}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                            modifiersStyles={{
                                disabled: { fontSize: '75%' }
                            }}
                        // footer={footer}
                        />
                    </div>
                    <div className="col-md-8 px-3">
                        <h2>SET A APPOINTMENT</h2>
                        <h6 className="mt-3">AVAILABLE APPOINTMENT ON {moment(date).format('Do MMMM, YYYY')}</h6>
                        <Row>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Company Law</h6>
                                    <p>10 slots available</p>
                                    <p> $120</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Commercial Law</h6>
                                    <p>10 slots available</p>
                                    <p> $123</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Banking Law</h6>
                                    <p>10 slots available</p>
                                    <p> $240</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Property Law</h6>
                                    <p>10 slots available</p>
                                    <p> $120</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Construction Law</h6>
                                    <p>3 slots available</p>
                                    <p> $199</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="bg-light px-4 py-3">
                                    <h6>Investment Services</h6>
                                    <p>10 slots available</p>
                                    <p> $99</p>
                                    <button onClick={() => setModalShow(true)} className="mainButton3">Book Now</button>
                                    <ApointmentModal
                                      show={modalShow} close={() => setModalShow(false)} 
                                    />                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
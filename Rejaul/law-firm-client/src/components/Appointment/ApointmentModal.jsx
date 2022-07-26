import React from 'react';
import moment from 'moment';
import { useState } from 'react';
import { GiClawHammer } from "react-icons/gi";
import { Col, Modal, Row, Button, Form } from 'react-bootstrap';
import { AiOutlineFieldTime, AiOutlineScissor,AiOutlineClose } from 'react-icons/ai';
import { BsCalendar2Day, BsFillEnvelopeFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { TbOld } from 'react-icons/tb';
const ApointmentModal = (props) => {
    console.log(props)
    return (
        <>
            <Modal
                {...props}
                className='border-0 mt-5'
                show={props.show}
                // cancel={props.close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="d-flex justify-content-between">
                    <h4 className="modal_title"> Set an appointment</h4> 
                    <h3> <AiOutlineClose  onClick={props.close}/></h3>
                   
                </Modal.Header>
                <Modal.Body>
                    <form className="row gap-3 was-validated" novalidate>
                        <Row xs={1} md={2} className="mx-auto">
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Service :</label>
                                <div className="input-group">
                                    <span class="input-group-text" id="basic-addon1"> <GiClawHammer /> </span>
                                    <input type="text" className="form-control" value="Commercial Law" readOnly aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Date :</label>
                                <div className="input-group">
                                    <span class="input-group-text" id="basic-addon1"> <IoCalendarNumberOutline /> </span>
                                    <input type="text" className="form-control" value={moment(props.date).format('Do MMMM, YYYY')} readOnly aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Weekday :</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"> <BsCalendar2Day /> </span>
                                    <input type="text" className="form-control" value={moment(props.date).format('dddd')} readOnly aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Slot :</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"> <AiOutlineFieldTime /> </span>
                                    {/* <input type="text" class="form-control" value="Haircuts and Styling" readOnly aria-label="Username" aria-describedby="basic-addon1" /> */}
                                    <select id="inputState" className="form-select">
                                        {/* {
                                            props.slots.map((slot, index) => (
                                                <option key={index}>{slot}</option>
                                            ))
                                        } */}

                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} className=" mx-auto">
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Name :</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"> <BsFillPersonFill /> </span>
                                    <input type="text" className="form-control" placeholder="Rabbil Hasan" required aria-label="name" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Age :</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"> <TbOld /> </span>
                                    <input type="text" className="form-control" min="1" placeholder="33" required aria-label="age" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group   ">
                                <label htmlFor="" className="form-label appointLabel">Phone Number :</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"> <BsFillTelephoneFill /> </span>
                                    <input type="number" className="form-control" placeholder="0123456789" required aria-label="phone" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col class="input-group  ">
                                <label htmlFor="" className="form-label appointLabel">Email :</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"> <BsFillEnvelopeFill /> </span>
                                    <input type="email" className="form-control" placeholder="rabbil.hasan@gmail.com" required aria-label="email" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <button className='navBtn mt-4 appointBtn btn btn-success  px-3 py-2' >Confirm the appointment</button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default ApointmentModal;
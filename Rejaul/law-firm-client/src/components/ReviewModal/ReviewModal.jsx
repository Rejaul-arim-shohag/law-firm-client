import React from 'react';
import Swal from "sweetalert2";
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { createReview } from '../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty } from '../../Helper/FormHelper';

const ReviewModal = (props) => {
    let nameRef, emailRef, commentRef = useRef()
    const handelcreateReview = () => {
        let name = nameRef.value;
        let email = emailRef.value;
        let comment = commentRef.value;
        if (IsEmpty(name)){
            ErrorToast("Name Is Required")
        }
        else if (IsEmail(email)) {
            ErrorToast("Valid email Required")
        }
        else if (IsEmpty(comment)) {
            ErrorToast("comment Is Required")
        }
        else{
            createReview(name,email,comment)
            .then((res)=>{ 
                if(res===true){
                    props.onHide()
                    Swal.fire(
                        'Thank You!',
                        'For share your exprience!',
                        'success',
                      )
                }
            })
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div className="d-flex justify-content-between">
                    <h5>Share Your Experience</h5>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div className="row">
                    <div className="p-2  col-6">
                        <label>Your Name</label>
                        <input ref={(input) => nameRef = input} placeholder="Enter Your Name" className="form-control animated fadeInUp" type="text" />
                    </div>
                    <div className="p-2  col-6">
                        <label>Your Email</label>
                        <input ref={(input) => emailRef = input} placeholder="Enter Your Email" className="form-control animated fadeInUp" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="p-2">
                        <label>Comment</label>
                        <textarea ref={(input) => commentRef = input} placeholder="Comment Here" className="form-control" rows="6" ></textarea>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handelcreateReview}>submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ReviewModal;
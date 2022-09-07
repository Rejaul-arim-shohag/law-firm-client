import React from 'react';
import Swal from "sweetalert2";
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { ChooiceUsList, createChoiceUsItem, createReview } from '../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmail, IsEmpty, SuccessToast } from '../../Helper/FormHelper';

const ReviewModal = (props) => {
    let  iconRef, titleRef, descriptionRef, imgViewRef = useRef()
    const previewImage = () => {
        let imageFile = iconRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            imgViewRef.src = base64Image
        })
    }
    const handelcreateReview = () => {
        let title = titleRef.value;
        let description = descriptionRef.value;
        let icon = imgViewRef.src;
        if (IsEmpty(title)){
            ErrorToast("Name Is Required")
        }
        else if (IsEmpty(description)) {
            ErrorToast("comment Is Required")
        }
        else{
            createChoiceUsItem(icon,title,description)
            .then((res)=>{ 
                if(res===true){
                    ChooiceUsList()
                    props.onHide()
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

            <Modal.Body className="px-5 py-5">
                <div className="d-flex justify-content-between">
                    <h5>Insert an Item</h5>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div className="row">
                    <div className="p-2  col-6">
                        <label className="mb-1">Icon</label>
                        <input onChange={previewImage} ref={(input) => iconRef = input} type="file" className="form-control" alt="" />
                    </div>
                    <div className="p-2  col-6">
                        <label className="mb-1">Title</label>
                        <input ref={(input) => titleRef = input} placeholder="Support Title" className="form-control animated fadeInUp" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="p-2">
                        <label className="mb-1">Description</label>
                        <textarea ref={(input) => descriptionRef = input} placeholder="Support Description" className="form-control" rows="6" ></textarea>
                    </div>
                </div>
                <Button className="btn-success" onClick={handelcreateReview}>Save</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ReviewModal;
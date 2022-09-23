import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { insertLogo, readLogo } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, SuccessToast } from '../../../Helper/FormHelper';
const LogoUploadModal = (props) => {
    let logoRef, logoPrivewRef = useRef()
    const previewLogo = () => {
        let imageFile = logoRef.files[0]
        console.log("imageFile", imageFile)
        getBase64(imageFile).then((base64Image) => {
            logoPrivewRef.src = base64Image
        })
    }
    const henldeUploadLogo = () => {
        const mainLogo = logoPrivewRef.src;
        if(logoRef.files[0]===undefined){
            ErrorToast("File not select")
        }
        else{
            insertLogo(mainLogo).then((result) => {
                if (result) {
                    props.onHide()
                    SuccessToast("Logo Change Success")
                }
            })
        }
    }
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body className="px-5 py-5">
            <div className="d-flex justify-content-between">
                <h5>Upload Logo</h5>
                <h5 onClick={props.onHide}><ImCross /></h5>
            </div>
            <div className="row">
                <div className="p-2  col-12">
                    <label className="mb-1">Logo</label>
                    <input onChange={previewLogo} ref={(input)=>logoRef=input} type="file" className="form-control" placeholder='11am-12am' alt="" />
                </div>
            </div>
            <Button onClick={henldeUploadLogo} className="btn-success">Save</Button>
        </Modal.Body>
    </Modal>
    );
};

export default LogoUploadModal;
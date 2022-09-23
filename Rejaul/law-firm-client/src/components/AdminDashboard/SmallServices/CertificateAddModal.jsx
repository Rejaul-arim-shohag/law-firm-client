import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';
import { ErrorToast, getBase64, IsEmpty } from '../../../Helper/FormHelper';
import { certificateList, insertCertificate } from '../../../ApiRequest/APIRequest';
const CertificateAddModal = (props) => {
    let titleRef, imgRef, imageBase64Ref = useRef()

    const previewImage = () => {
        let imageFile = imgRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            imageBase64Ref.src = base64Image
        })
    }
    const handleInsertCertificate=()=>{ 
        let title = titleRef.value;
        let image = imageBase64Ref.src;
        if(imgRef.files[0]===undefined){
            ErrorToast("Image require")
        } else if(IsEmpty(title)){
            ErrorToast("Company Name require")
        }
        else{
            insertCertificate(image,title)
            .then((res)=>{
                certificateList()
                props.onHide()
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
                    <h6>Insert certificate</h6>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div>
                    <div className="p-2">
                        <label className="mb-1">Image</label>
                        <input onChange={previewImage} ref={(input) => imgRef = input} placeholder="Support Title" className="form-control animated fadeInUp" type="file" />
                    </div>
                    <div className="p-2">
                        <label className="mb-1">Name</label>
                        <input ref={(input) => titleRef = input} placeholder="Company Name" className="form-control" ></input>
                    </div>
                    <div className="p-2">
                        <Button onClick={handleInsertCertificate} className="btn-success">Save</Button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}

export default CertificateAddModal;

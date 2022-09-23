import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { insertHeroImage } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, SuccessToast } from '../../../Helper/FormHelper';
const BannerImageModal = (props) => {
    let bannerImageRef, bannerImagaePreviewRef = useRef()    
    const previewLogo = () => {
        let heroImageFile = bannerImageRef.files[0]
        getBase64(heroImageFile).then((base64Image) => {
            bannerImagaePreviewRef.src = base64Image
           
        })
    }
    const henldeUploadImage = () => {
        const Heroimage = bannerImageRef.src;
        if(bannerImageRef.files[0]===undefined){
            ErrorToast("File not select")
        }
        else{
            insertHeroImage(Heroimage).then((result)=>{
                if(result===true) {
                    SuccessToast("Hero image Change Success")
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
                    <h5>Hero Image</h5>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div className="row">
                    <div className="p-2  col-12">
                        <label className="mb-1">Picture</label>
                        <input onChange={previewLogo} type="file" ref={(input)=>bannerImageRef=input} className="form-control" placeholder='11am-12am' alt="" />
                    </div>
                </div>
                <Button onClick={henldeUploadImage} className="btn-success">Save</Button>
            </Modal.Body>
        </Modal>
    );
};

export default BannerImageModal;
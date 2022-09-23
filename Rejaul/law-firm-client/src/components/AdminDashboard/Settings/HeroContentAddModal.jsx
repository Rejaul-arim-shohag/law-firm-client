import React, { useRef } from 'react';
import { ImCross } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';
import { insertHeroContent, readHeroContent } from '../../../ApiRequest/APIRequest';
const HeroContentAddModal = (props) => {
    let mainTitleRef, subTitleRef = useRef();
    const handleCreateTitle=()=>{
        const mainTitle = mainTitleRef.value;
        const subTitle = subTitleRef.value;
        if(IsEmpty(mainTitle)){
            ErrorToast("Main Title require")
        } else if(IsEmpty(mainTitle)){
            ErrorToast("Sub Title require")
        } else{
            debugger;
            insertHeroContent(mainTitle,subTitle)
            .then((res)=>{
                if(res===true){
                    readHeroContent()
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
                    <h5>Create Slot</h5>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div className="row">
                    <div className="p-2  col-12">
                        <label className="mb-1">Main Title</label>
                        <input ref={(input) => mainTitleRef = input} type="text" className="form-control" alt="" />
                    </div>
                    <div className="p-2  col-12">
                        <label className="mb-1">Sub Title</label>
                        <input ref={(input) => subTitleRef = input} type="text" className="form-control" alt="" />
                    </div>
                </div>
                <Button onClick={handleCreateTitle} className="btn-success">Save</Button>
            </Modal.Body>
        </Modal>
    );
};

export default HeroContentAddModal;
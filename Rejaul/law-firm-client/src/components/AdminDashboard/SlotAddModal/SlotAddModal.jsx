import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { CreateSLot, readSlots } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';
const SlotAddModal = (props) => {
   let slotTimeRef = useRef();
   const handleCreateSlot=()=>{
    const slotTime = slotTimeRef.value;
    if(IsEmpty(slotTime)){
        ErrorToast("TIme is require")
    }else{
        CreateSLot(slotTime).then((res)=>{
            if(res===true){
                readSlots()
                props.onHide()
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
                    <h5>Create Slot</h5>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div className="row">
                    <div className="p-2  col-12">
                        <label className="mb-1">Time</label>
                        <input ref={(input)=>slotTimeRef=input}  type="text" className="form-control" placeholder='11am-12am' alt="" />
                    </div>
                </div>
                <Button onClick={handleCreateSlot} className="btn-success">Save</Button>
            </Modal.Body>
        </Modal>
    );
};

export default SlotAddModal;
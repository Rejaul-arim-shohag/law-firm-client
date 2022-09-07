import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { ImCross } from "react-icons/im";
import { insertFooterItem } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';

const FooterAddModal = (props) => {
    let nameRef, linkRef = useRef();
    const handleInsertCertificate = () => {
        let name = nameRef.value;
        let link = linkRef.value;
        if (IsEmpty(name)) {
            ErrorToast("Name require")
        } else if (IsEmpty(name)) {
            ErrorToast("link require")
        }
        else {
            insertFooterItem(name, link)
                .then((res) => {
                    // certificateList()
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
                    <h6>insert an Footer item</h6>
                    <h5 onClick={props.onHide}><ImCross /></h5>
                </div>
                <div>
                    <div className="p-2">
                        <label className="mb-1">Name</label>
                        <input ref={(input) => nameRef = input} placeholder="Footer Name" className="form-control animated fadeInUp" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="mb-1">Link</label>
                        <input ref={(input) => linkRef = input} placeholder="Link" className="form-control" rows="6" ></input>
                    </div>
                    <div className="p-2">
                        <Button onClick={handleInsertCertificate} className="btn-success">Save</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default FooterAddModal;

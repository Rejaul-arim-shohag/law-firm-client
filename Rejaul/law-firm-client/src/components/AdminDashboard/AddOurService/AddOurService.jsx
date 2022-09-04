import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceAddRequest } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmpty } from '../../../Helper/FormHelper';
const AddOurService = () => {
    let navigate = useNavigate()
    let  nameRef,  userImgRef, descriptionRef, userImgView = useRef();
    const previewImage = () => {
        let imageFile = userImgRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            userImgView.src = base64Image
        })
    }
    const handleInsertAttorney = () => {
        let Name = nameRef.value;
        let photo = userImgView.src;
        let description = descriptionRef.value;
        if (IsEmpty(Name)) {
            ErrorToast("Name Required !")
        }
        else if (IsEmpty(description)) {
            ErrorToast("title Required !")
        }
        else {
            ServiceAddRequest( Name,photo, description)
                .then((res) => {
                    if (res === true) {
                        // navigate("/")
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card py-3">
                        <div className="card-body w-60">
                            <div className="container-fluid ">
                                <h5>Service Add</h5>
                                {/* <img ref={(input) => userImgView = input} className="user-profile-img preview_icon" alt="" /> */}
                                <div className="row mx-1">
                                    <div className="col-6 p-2 col-md-6">
                                        <label>Icon</label>
                                        <input onChange={previewImage} ref={(input) => userImgRef = input} placeholder="Service Icon" className="form-control animated fadeInUp" type="file" />
                                    </div>
                                    <div className="col-4 col-md-6 p-2">
                                        <label>Service Name</label>
                                        <input ref={(input) => nameRef = input} placeholder="Service Name" className="form-control animated fadeInUp" type="email" />
                                    </div>
                                </div>
                                <div className="row mx-1">
                                    <label>Service Description</label>
                                    <textarea rows="4" ref={(input) => descriptionRef = input} className="form-control px-1 mx-1" />
                                </div>
                                <div className="row mx-1">
                                    <div className="p-2 col-4">
                                        <button onClick={handleInsertAttorney} className="btn w-100 float-end btn-success animated fadeInUp">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOurService;
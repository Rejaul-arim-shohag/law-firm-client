import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { attorneyAddRequest } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile } from '../../../Helper/FormHelper';

const AttorneyAdd = () => {
    let navigate = useNavigate()
    let emailRef, nameRef, mobileRef, titleRef, userImgRef, descriptionRef, userImgView = useRef();

    const previewImage = () => {
        let imageFile = userImgRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            userImgView.src = base64Image
        })
    }
    const handleInsertAttorney = () => {
        let email = emailRef.value;
        let Name = nameRef.value;
        let mobile = mobileRef.value;
        let title = titleRef.value;
        let photo = userImgView.src;
        let description = descriptionRef.value;
        if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required !")
        }
        else if(userImgRef.files[0]===undefined){
            ErrorToast("Image Require !")
        }
        else if (IsEmpty(Name)) {
            ErrorToast("Name Require !")
        }
        else if (IsMobile(mobile)) {
            ErrorToast("Valid Mobile  Require !")
        }
        else if (IsEmpty(title)) {
            ErrorToast("title Require !")
        }
        else {
            attorneyAddRequest(email, Name, mobile, title, photo, description)
                .then((res) => {
                    if (res === true) {
                        navigate("/AllAttorney")
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-12">
                    <h5 className="mx-2 py-3">Add New Attorney</h5>
                    <div className="card py-2">
                        <div className="card-body">
                            <div className="container-fluid">
                                {/* <img  ref={(input)=>userImgView=input} className="user-profile-img preview_icon" alt=""/> */}
                                <div className="row">
                                    <div className="col-6 p-2">
                                        <label>Picture</label>
                                        <input onChange={previewImage} ref={(input) => userImgRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Name</label>
                                        <input ref={(input) => nameRef = input} placeholder="Name" className="form-control animated fadeInUp" type="text" />
                                    </div>

                                    <div className="col-6 p-2">
                                        <label>Mobile</label>
                                        <input ref={(input) => mobileRef = input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Title</label>
                                        <input ref={(input) => titleRef = input} placeholder="Title" className="form-control animated fadeInUp" type="text" />
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 mt-2">
                                        <label>Description</label>
                                        <textarea ref={(input) => descriptionRef = input} placeholder="Something" rows="5" className="form-control animated fadeInUp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 mt-2">
                                        <button onClick={handleInsertAttorney} className="btn w-50 mx-auto btn-success animated fadeInUp">SAVE</button>
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

export default AttorneyAdd;
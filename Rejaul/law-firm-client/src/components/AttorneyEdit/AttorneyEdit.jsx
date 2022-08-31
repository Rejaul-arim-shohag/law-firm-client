import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { attorneyUpdateRequest, SingleAttorneyGetRequest } from '../../ApiRequest/APIRequest';
import { useSelector } from "react-redux";
import { ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile } from '../../Helper/FormHelper';

const AttorneyEdit = () => {
    let navigate = useNavigate()
    let { id } = useParams();
    let emailRef, NameRef, mobileRef, titleRef, descriptionRef, userImgRef, userImgView = useRef();
    useEffect(() => {
        SingleAttorneyGetRequest(id)
    }, [])
    const singleAttorny = useSelector((state) => state.singleAttorney.singleattorney);
    const previewImage = () => {
        let imageFile = userImgRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            userImgView.src = base64Image
        })
    }
    const handleUpdateProfile = () => {
        let email = emailRef.value;
        let Name = NameRef.value;
        let title = titleRef.value;
        let mobile = mobileRef.value;
        let description = descriptionRef.value;
        let photo = userImgView.src;
        if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required !")
        }
        else if (IsEmpty(Name)) {
            ErrorToast("Name Name Required !")
        }
        else if (IsEmpty(title)) {
            ErrorToast("title Required !")
        }
        else if (IsMobile(mobile)) {
            ErrorToast("Valid Mobile Required!")
        }
        else if (IsEmpty(description)) {
            ErrorToast("description Required !")
        }
        else {
            attorneyUpdateRequest(email, Name, mobile, title, photo, description, id).then((result) => {
                if (result === true) {
                    navigate("/AllAttorney")
                }
            })
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img ref={(input) => userImgView = input} src={singleAttorny["photo"]} className="preview_icon" alt="" />
                                <hr />
                                <div className="row">
                                    <div className="col-12 col-md-6 p-2">
                                        <label>Profile Picture</label>
                                        <input onChange={previewImage} ref={(input) => userImgRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                                    </div>
                                    <div className="col-12 col-md-6 p-2">
                                        <label>Email Address</label>
                                        <input defaultValue={singleAttorny['email']} ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                    </div>
                                    <div className="col-12 col-md-6 p-2">
                                        <label>Name</label>
                                        <input defaultValue={singleAttorny['Name']} ref={(input) => NameRef = input} placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                                    </div>

                                    <div className="col-12 col-md-6 p-2">
                                        <label>Mobile</label>
                                        <input defaultValue={singleAttorny['mobile']} ref={(input) => mobileRef = input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                                    </div>
                                    <div className="col-12 col-md-6 p-2">
                                        <label>Title</label>
                                        <input defaultValue={singleAttorny['title']} ref={(input) => titleRef = input} placeholder="Title" className="form-control animated fadeInUp" />
                                    </div>
                                    <div className="col-12 p-2">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <label>Description</label>
                                                <textarea defaultValue={singleAttorny['description']} ref={(input) => descriptionRef = input} placeholder="Description" className="form-control animated fadeInUp" rows="4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-2 p-2">
                                        <button onClick={handleUpdateProfile} className="btn w-100 float-end btn-success animated fadeInUp">Update</button>
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

export default AttorneyEdit;
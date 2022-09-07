import React, { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readServiceById, ServiceUpdateRequest } from '../../../ApiRequest/APIRequest';
import { getBase64 } from '../../../Helper/FormHelper';
const UpdateService = () => {
    let { id } = useParams();
    let navigate = useNavigate()
    let nameRef, descriptionRef, iconRef, previewIconRef = useRef();
    useEffect(() => {
        readServiceById(id)
        .then((result)=>{
            nameRef.value = result?.Name
            previewIconRef.src=result?.icon
            descriptionRef.value = result?.description

        })
    }, [])
    const previewImage = () => {
        let imageFile = iconRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            previewIconRef.src = base64Image
        })
    }
    // const service = useSelector((state) => state.singleService.value)
    const handleUpdateService=()=>{
        const icon = previewIconRef.src;
        const name=nameRef.value;
        const description = descriptionRef.value
        ServiceUpdateRequest(icon,name,description,id)
        .then((result)=>{
            if(result){
                navigate("/Services-list")
            }
        })
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-6 p-2 d-flex justify-content-start">
                                        <div>

                                            <img
                                                ref={(input) => previewIconRef = input}
                                                className="preview_icon" alt="" />
                                        </div>
                                        <div className="iconAdd ms-3">
                                            <label>Add Icon</label>
                                            <input
                                                onChange={previewImage}
                                                ref={(input) => iconRef = input}
                                                placeholder="Icon" className="form-control animated fadeInUp" type="file" />
                                        </div>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Service Name</label>
                                        <input
                                            ref={(input) => nameRef = input} placeholder="Name" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-12 p-2">
                                        <label>Description</label>
                                        <textarea
                                            ref={(input) => descriptionRef = input}
                                            placeholder="Description" className="form-control animated fadeInUp" rows="4" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={handleUpdateService} className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
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

export default UpdateService;
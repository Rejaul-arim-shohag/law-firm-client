import React, { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readServiceById } from '../../../ApiRequest/APIRequest';
import { getBase64 } from '../../../Helper/FormHelper';
const UpdateService = () => {
    let nameRef, descriptionRef, iconRef, previewIconRef = useRef()
    let { id } = useParams();
    useEffect(() => {
        readServiceById(id)
    }, [])
    const previewImage = () => {
        let imageFile = iconRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            previewIconRef.src = base64Image
        })
    }
    const service = useSelector((state) => state.singleService.value)
    console.log("service", service)
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

                                            ref={(input) => nameRef = input}
                                            placeholder="Description" className="form-control animated fadeInUp" rows="4" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <button className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
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
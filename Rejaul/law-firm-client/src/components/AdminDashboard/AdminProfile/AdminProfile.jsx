import React, { useRef } from 'react';
import { useEffect } from 'react';
import userImage from "../../../Assets/images/user.png"
import { readAdminData, updateAdminProfile } from '../../../ApiRequest/APIRequest';
import { useState } from 'react';
import { ErrorToast, getBase64, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';
import { removeSession } from '../../../Helper/SessionHelper';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
    let navigate = useNavigate()
    let previousPassRef, newPassRef, userImgRef, userImgPreview = useRef();
    const [profile, setProfile] = useState({email:"", photo:""})
    useEffect(()=>{
        readAdminData()
        .then((res)=>{
            setProfile(res?.data[0])
        })
    }, [])
    const previewImage = () => {
        let imageFile = userImgRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            userImgPreview.src = base64Image
        })
    }

    const handleUpdateProfile=()=>{
        let photo = userImgPreview.src;
        let password = previousPassRef.value;
        let newPass = newPassRef.value;
        if(IsEmpty(password)){
            ErrorToast("Previous password is reuired")
        }else if(IsEmpty(newPass)){
            ErrorToast("New password reuired")
        }
         else{
            updateAdminProfile(photo,password,newPass).then((res)=>{
                if(res===true){
                    SuccessToast("Profile Update success")
                    removeSession()
                }
            })
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card py-5 px-3">
                            <h4 className="text-center">EDIT ADMIN PROFILE</h4>
                            <div className="card-body mb-5">
                                <div className="row ">
                                    <div className="mt-2 mb-3 col-12 d-flex justify-content-center">
                                        <img src={profile["photo"]} ref={(input) => userImgPreview = input} style={{ width: "150px", height: "150px", borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="mt-2 col-12 col-md-6">
                                        <label >Upload Profile Image</label>
                                        <input onChange={previewImage} ref={(input) => userImgRef = input} className="form-control" type="file" name="" id="" />
                                    </div>
                                    <div className="mt-2 col-12 col-md-6">
                                        <label >Email</label>
                                        <input readOnly value={profile?.email} className="form-control" type="text" name="" id="" />
                                    </div>
                                    <div className="mt-2 col-12 col-md-6">
                                        <label >Your Previous Password</label>
                                        <input ref={(input) => previousPassRef = input} className="form-control" type="text" name="" id="" />
                                    </div>
                                    <div className="mt-2 col-12 col-md-6">
                                        <label >New Password</label>
                                        <input ref={(input) => newPassRef = input} className="form-control" type="text" name="" id="" />
                                    </div>
                                    <div className="mt-4 col-12 col-md-6">
                                        <button onClick={handleUpdateProfile} className="btn btn-success w-100">save</button>
                                    </div>
                                    <div className="mt-4 col-12 col-md-6">
                                        <button onClick={()=>navigate("/adminDashboard")} className="btn btn-primary">Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminProfile;
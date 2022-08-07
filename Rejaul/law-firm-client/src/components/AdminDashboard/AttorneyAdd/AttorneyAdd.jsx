import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { attorneyAddRequest } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile } from '../../../Helper/FormHelper';

const AttorneyAdd = () => {
    let navigate=useNavigate()
    let emailRef,nameRef,mobileRef,titleRef,userImgRef, descriptionRef, userImgView=useRef();
    
    const previewImage=()=>{
        let imageFile=userImgRef.files[0]
        getBase64(imageFile).then((base64Image)=>{
            userImgView.src=base64Image
        })
       }

    const handleInsertAttorney=()=>{
        let email=emailRef.value;
        let Name=nameRef.value;
        let mobile=mobileRef.value;
        let title= titleRef.value;
        let photo= userImgView.src;
        let description=descriptionRef.value;
        debugger;
        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(Name)){
            ErrorToast("Name Required !")
        }
        else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(title)){
            debugger;
            ErrorToast("title Required !")
        }
         
        else{
            attorneyAddRequest(email,Name,mobile,title,photo,description)
            .then((res)=>{
            debugger;
                if(res===true){
                    navigate("/")
                }
            })
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card py-5">
                        <div className="card-body">
                            <div className="container-fluid">
                            <img ref={(input)=>userImgView=input} className="user-profile-img preview_icon" alt=""/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture</label>
                                        <input onChange={previewImage} ref={(input)=>userImgRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Name</label>
                                        <input  ref={(input)=>nameRef=input} placeholder="Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input  ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Title</label>
                                        <input  ref={(input)=>titleRef=input} placeholder="Title" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Description</label>
                                        <textarea ref={(input)=>descriptionRef=input} placeholder="Something" rows="1" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={handleInsertAttorney} className="btn w-100 float-end btn-primary animated fadeInUp">SAVE</button>
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
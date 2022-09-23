import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertAddress } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';

const AddressInsert = () => {
    let navigate = useNavigate()
    let dayRef, locationRef, phoneRef, emailRef, aboutUsRef, facebookRef, twitterRef, instagramRef, linkedinRef, youtubeRef=useRef() 
    const handleUpdateAddress=(id)=>{ 
        const day = dayRef.value;
        const location  = locationRef.value;
        const phone  = phoneRef.value;
        const email = emailRef.value;
        const about = aboutUsRef.value;
        const facebook = facebookRef.value;
        const twitter = twitterRef.value;
        const instagram = instagramRef.value;
        const linkedin = linkedinRef.value;
        const youtube = youtubeRef.value;
        if(IsEmpty(day)){
            ErrorToast("Works day is require")
        } else if (IsEmpty(location)){
            ErrorToast("Location  is require")
        }
        else if (IsEmpty(phone)){
            ErrorToast("phone  is require")
        }
        else if (IsEmail(email)){
            ErrorToast("valid email  is require")
        } 
        else if (IsEmpty(about)){
            ErrorToast("about us content email  is require")
        } 
        else{
            insertAddress(day,location,phone,email,about,facebook,twitter,instagram,linkedin,youtube)
            .then((res)=>{
                if(res===true){
                    navigate("/allSettings")
                    SuccessToast("Address insert success")
                }
            })
        } 
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Works Day</label>
                            <input ref={(input)=>dayRef=input} placeholder="Sunday-Friday" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Location</label>
                            <input ref={(input)=>locationRef=input} placeholder="location" className="form-control" type="text" />
                        </div> 
                     
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Phone</label>
                            <input ref={(input)=>phoneRef=input} placeholder="Phone Number" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Email</label>
                            <input ref={(input)=>emailRef=input} placeholder="Email Address" className="form-control" type="text" />
                        </div>
                        <div className="col-12 mt-2">
                            <label className="mb-1">About Us</label> 
                            <textarea ref={(input)=>aboutUsRef=input} placeholder="Write something about us" className="form-control" rows="2"></textarea>
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Facebook</label>
                            <input ref={(input)=>facebookRef=input} placeholder="Facebook Link" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Twitter</label>
                            <input ref={(input)=>twitterRef=input} placeholder="Twitter Link" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Instagram</label>
                            <input ref={(input)=>instagramRef=input} placeholder="Instagram Link" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Linkedin</label>
                            <input ref={(input)=>linkedinRef=input} placeholder="Linkedin Link" className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Youtube</label>
                            <input ref={(input)=>youtubeRef=input} placeholder="Youtube Link" className="form-control" type="text" />
                        </div>
                        <div className="col-12 mt-4">
                            <div className="col-md-3">
                                <button onClick={handleUpdateAddress} className="btn btn-success w-100">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressInsert;

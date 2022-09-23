import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { readAddress, UpdateAddress } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';

const AddressUpdate = () => {
    let navigate = useNavigate()
    let dayRef, locationRef, phoneRef, emailRef, aboutUsRef, facebookRef, twitterRef, instagramRef, linkedinRef, youtubeRef=useRef() 
    useEffect(() => {
        readAddress()
    }, [])
    const address = useSelector((state) => (state.address.addressList));

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
            UpdateAddress(id,day,location,phone,email,about,facebook,twitter,instagram,linkedin,youtube)
            .then((res)=>{
                if(res===true){
                    navigate("/allSettings")
                    SuccessToast("Update success")
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
                            <input ref={(input)=>dayRef=input} defaultValue={address[0]?.address.worksDay} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Location</label>
                            <input ref={(input)=>locationRef=input} defaultValue={address[0]?.address.location} className="form-control" type="text" />
                        </div> 
                     
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Phone</label>
                            <input ref={(input)=>phoneRef=input} defaultValue={address[0]?.address.phone} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Email</label>
                            <input ref={(input)=>emailRef=input} defaultValue={address[0]?.address.email} className="form-control" type="text" />
                        </div>
                        <div className="col-12 mt-2">
                            <label className="mb-1">About Us</label> 
                            <textarea ref={(input)=>aboutUsRef=input} defaultValue={address[0]?.aboutUs} className="form-control" rows="2"></textarea>
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Facebook</label>
                            <input ref={(input)=>facebookRef=input} defaultValue={address[0]?.socialLink.facebook} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Twitter</label>
                            <input ref={(input)=>twitterRef=input} defaultValue={address[0]?.socialLink.linkedin} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Instagram</label>
                            <input ref={(input)=>instagramRef=input} defaultValue={address[0]?.socialLink.instagram} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">F
                            <label className="mb-1">Linkedin</label>
                            <input ref={(input)=>linkedinRef=input} defaultValue={address[0]?.socialLink.twitter} className="form-control" type="text" />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label className="mb-1">Youtube</label>
                            <input ref={(input)=>youtubeRef=input} defaultValue={address[0]?.socialLink.youtube} className="form-control" type="text" />
                        </div>
                        <div className="col-12 mt-4">
                            <div className="col-md-3">
                                <button onClick={()=>handleUpdateAddress(address[0]?._id)} className="btn btn-success w-100">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressUpdate;

import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLoginRequest } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty } from '../../../Helper/FormHelper';

const AdminLogin = () => {
    let navigate = useNavigate();
    let adminEmailRef, adminPassRef = useRef()
    const handleAdminLogin=()=>{
        const adminEmail = adminEmailRef.value;
        const adminPass = adminPassRef.value;
        if(IsEmail(adminEmail)){
            ErrorToast("Valid email address required")
        } else if(IsEmpty(adminPass)){
            ErrorToast("Password is required")
        } else{
            AdminLoginRequest(adminEmail, adminPass).then((res)=>{
                if(res===true){
                    // navigate("/adminDashboard")
                    window.location.href="/adminDashboard"
                }
            })
        }
    }
    return (
        <div className="container mt-5">
            <div className="row  justify-content-center">
                <div className="col-md-7 col-lg-6">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4 className="text-center">Admin Login</h4>
                            <hr />
                            <div className="container-fluid m-0 p-0">
                                <div className="m-0 p-0">
                                    <div className="p-2">
                                        <label>Admin-Email</label>
                                        <input defaultValue="lawfirmadmin@gmail.com" ref={(input)=>adminEmailRef=input} placeholder="Admin Email" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="p-2">
                                        <label>Password</label>
                                        <input defaultValue="lawfirmadmin" ref={(input)=>adminPassRef=input} placeholder="Password" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                </div>
                                <div className="row mt-2 p-0">
                                    <div className="p-2">
                                        <button onClick={handleAdminLogin} className=" mt-3 w-100 float-end mainButton3 animated fadeInUp">LOGIN</button>
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

export default AdminLogin;
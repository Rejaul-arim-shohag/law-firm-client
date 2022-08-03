import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row  justify-content-center">
                <div className="col-md-7 col-lg-6">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4 className="text-center">Sign In</h4>
                            <hr />
                            <div className="container-fluid m-0 p-0">
                                <div className="m-0 p-0">
                                    <div className="p-2">
                                        <label>Mobile Number</label>
                                        <input placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                                    </div>
                                    <div className="p-2">
                                        <label>Password</label>
                                        <input  placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                                    </div>
                                </div>
                                <div className="row mt-2 p-0">
                                    <div className="p-2">
                                        <button  className=" mt-3 w-100 float-end mainButton3 animated fadeInUp">LOGIN</button>
                                    </div>
                                </div>
                                <div className="row mt-2 p-0">
                                    <p className="text-center">Are You New? <Link  to="/sign-up">SignIn</Link></p>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
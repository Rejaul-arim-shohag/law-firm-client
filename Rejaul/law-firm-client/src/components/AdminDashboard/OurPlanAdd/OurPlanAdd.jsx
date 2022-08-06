import React from 'react';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { PlanAddRequest } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';

const OurPlanAdd = () => {
    let navigate=useNavigate()
    let planNameRef, feeRef, benifitRef, benifitRef1, benifitRef2,benifitRef3,benifitRef4,benifitRef5,benifitRef6=useRef()
    const handleInsertPlan=()=>{
        let planName = planNameRef.value;
        let fee = feeRef.value;
        let benifit = benifitRef.value;
        let benifit1 = benifitRef1.value;
        let benifit2 = benifitRef2.value;
        let benifit3 = benifitRef3.value;
        let benifit4 = benifitRef4.value;
        let benifit5 = benifitRef5.value;
        let benifit6 = benifitRef6.value;
        if(IsEmpty(planName)){
            ErrorToast("planName is required")
        } else if(IsEmpty(fee)){
            ErrorToast("fee is required")
        } else{
            PlanAddRequest(planName,fee,benifit,benifit1,benifit2,benifit3,benifit4,benifit5,benifit6)
            .then((res)=>{
                if(res===true){
                    navigate("/adminDashboard")
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
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Plan Name</label>
                                        <input  ref={(input) => planNameRef = input} placeholder="Plan Name" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Plan Fee</label>
                                        <input ref={(input) => feeRef = input} placeholder="Plan Fee" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Benifit</label>
                                        <input ref={(input) => benifitRef = input} placeholder="Benifit Title" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <h5 className="text-center">Plan Extra Benifits</h5>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                                        <input ref={(input) => benifitRef1 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                                        <input ref={(input) => benifitRef2 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                                        <input ref={(input) => benifitRef3 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                                       
                                        <input ref={(input) => benifitRef4 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                                       
                                        <input ref={(input) => benifitRef5 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Service</label>
                            
                                        <input ref={(input) => benifitRef6 = input} placeholder="Service" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-4 col-md-4 p-2">
                                        <button onClick={handleInsertPlan} className="btn w-100 float-end btn-primary animated fadeInUp">SAVE</button>
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

export default OurPlanAdd;
import axios from "axios";
import store from "../redux/store";
import {SetAttorney} from "../redux/stateSlice/attorneySlice"
import {SetServices} from "../redux/stateSlice/servicesSlice"
import { HideLoader, ShowLoader } from "../redux/stateSlice/settingSlice";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { setAdminToken, getAdminToken, setAdminDetails, setToken, setUserDetails } from "../Helper/SessionHelper";
import { SetPlans } from "../redux/stateSlice/ourPlanSlice";
const baseUrl = "http://localhost:5000/api/v1";
const AxiosHeader = { headers: { "adminToken": getAdminToken() } }

//admin login
export function AdminLoginRequest(adminEmail, adminPass) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/AdminLogin";
    const postBody = {
        email: adminEmail,
        password: adminPass
    }
    return axios.post(url, postBody)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                setAdminToken(res.data["admintoken"])
                setAdminDetails(res.data["data"])
                SuccessToast("Login Success")
                return true;
            }
            else {
                ErrorToast("Invalid email or password")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })

}

export function userRegistrationRequest(email,Name,mobile,password,photo){
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createUser";
    const postBody = {
        email: email,
        fullName: Name,
        mobile: mobile,
        password: password,
        photo: photo
    }
    return axios.post(url, postBody)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                if (res.data['status'] === "fail") {
                    if (res.data['data']['keyPattern']['email'] === 1) {
                        ErrorToast("Email Already Exist")
                        return false;
                    }
                    else {
                        ErrorToast("Something Went Wrong")
                        return false;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;
                }
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            return false;
        })
}

export function LoginRequest(email, password) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/loginUser";
    const postBody = {
        email: email,
        password: password
    }
    return axios.post(url, postBody)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                
                setToken(res.data["userToken"])
                setUserDetails(res.data["data"])
                SuccessToast("Login Success")
                return true;
            }
            else {
                ErrorToast("Invalid email or password")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })

}

export function attorneyAddRequest(email, Name, mobile, title, photo, description) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createAttoreny";
    const postBody = {
        email: email,
        Name: Name,
        mobile: mobile,
        title: title,
        photo: photo,
        description: description
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Attorney Insert Success")
                return true;
            }
            else {
                ErrorToast("Attorney Insert failed")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            // store.dispatch(HideLoader())
        })
}

export function AttorneyGetRequest(){
    const url = baseUrl + "/readAttorneys";
    return axios.get(url)
    .then((res)=>{
        if (res.status === 200) {
            store.dispatch(SetAttorney(res.data.data))
            return res.data
        }
        else {
            return false;
        }
    })
    .catch((err)=>{
        ErrorToast("Something Went Wrong")
    })
}

//service add request
export function ServiceAddRequest(Name, icon, description) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createService";
    const postBody = {
        Name: Name,
        icon: icon,
        description: description
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("service Insert Success")
                return true;
            }
            else {
                ErrorToast("service Insert failed")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })
}
//services get request
export function servicesGetRequest(){
     const url = baseUrl + "/readServiceAreas";
     return axios.get(url)
     .then((res)=>{
        if(res.status===200){
            store.dispatch(SetServices(res.data.data))
        }
     })
     .catch((err)=>{
        ErrorToast("Something went Wrong")
     })
}


//paln insert request
export function PlanAddRequest(planName, fee, benifit, extraBenifit1, extraBenifit2, extraBenifit3, extraBenifit4, extraBenifit5, extraBenifit6) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createOurPlan";
    const postBody = {
        planName: planName,
        fee: fee,
        benifit: benifit,
        extraBenifit1: extraBenifit1,
        extraBenifit2: extraBenifit2,
        extraBenifit3: extraBenifit3,
        extraBenifit4: extraBenifit4,
        extraBenifit5: extraBenifit5,
        extraBenifit6: extraBenifit6,
    }
   
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Plan Insert Success")
                return true;
            }
            else {
                ErrorToast("Plan Insert failed")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })
}

export function planGetRequest(){
    const url = baseUrl + "/readOurPlans";
    return axios.get(url)
        .then((res)=>{
            if(res.status===200){
                store.dispatch(SetPlans(res.data.data))
            }
        })
}

export function CreateMessageRequest(name,email,mobile,subject,message) {
    // store.dispatch(ShowLoader())
    const url = baseUrl + "/CreateMessage";
    const postBody = {
        name: name,
        email: email,
        mobile: mobile,
        subject: subject,
        message: message,
    }
    return axios.post(url, postBody)
        .then((res) => {
            // store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Message Send Success")
                return true;
            }
            else {
                ErrorToast("Message Send failed")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            // store.dispatch(HideLoader())
        })
}

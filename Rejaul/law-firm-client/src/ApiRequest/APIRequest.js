import axios from "axios";
import store from "../redux/store";
import { HideLoader, ShowLoader } from "../redux/stateSlice/settingSlice";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { setAdminToken,getAdminToken,setAdminDetails } from "../Helper/SessionHelper";
const baseUrl = "http://localhost:5000/api/v1";
const AxiosHeader={headers:{"adminToken":getAdminToken()}}

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
        }).catch((err)=>{
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })

}

export function attorneyAddRequest(email,Name,mobile,title,photo,description){
    // store.dispatch(ShowLoader())
    const url = baseUrl + "/createAttoreny";
    const postBody = {
        email: email,
        Name: Name,
        mobile:mobile,
        title:title,
        photo:photo,
        description:description
    }
    return axios.post(url,postBody,AxiosHeader)
        .then((res) => {
            // store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Attorney Insert Success")
                return true;
            }
            else {
                ErrorToast("Attorney Insert failed")
                return false;
            }
        }).catch((err)=>{
            ErrorToast("Something Went Wrong")
            // store.dispatch(HideLoader())
        })
}

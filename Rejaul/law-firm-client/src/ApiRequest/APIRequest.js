import axios from "axios";
import store from "../redux/store";
import { SetAttorney } from "../redux/stateSlice/attorneySlice"
import { setNewReviews, setCompletedReviews, SetCanceledTask } from "../redux/stateSlice/reviewSlice"
import { SetSingleAttorney } from "../redux/stateSlice/singleAttorneySlice"
import { SetSingleService } from "../redux/stateSlice/singleServiceSlice"
import { SetServices } from "../redux/stateSlice/servicesSlice"
import { HideLoader, ShowLoader } from "../redux/stateSlice/settingSlice";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { setOTP, setAdminToken, getAdminToken,setEmail, setAdminDetails, setToken, setUserDetails, removeSession } from "../Helper/SessionHelper";
import { SetPlans } from "../redux/stateSlice/ourPlanSlice";
import { SetchooiceUs } from "../redux/stateSlice/chooiceUsSlice";
import { Setblogs } from "../redux/stateSlice/blogSlice";
import { SetSingleBlog } from "../redux/stateSlice/singleBlogSlice";
import { Setcertificate } from "../redux/stateSlice/certificateSlice";
import { setNewAppointment, setCompletedAppointment, SetCanceledAppointment } from "../redux/stateSlice/appointmentSlice";
import { SetTotal, setAllAppointment, setAllNewAppointment, setAllCompletedAppointment, SetAllCanceledAppointment } from "../redux/stateSlice/AllAppointmentSlice";
import { SetAddress } from "../redux/stateSlice/addressSlice";
import {SetSlotList} from "../redux/stateSlice/slotSlice"

// const baseUrl = "https://karim-law-firm.onrender.com/api/v1";
const baseUrl="http://localhost:8080/api/v1"

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

export function readAdminData() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/AdminProfileDetails";
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
        })
}


export function updateAdminProfile(photo, password, newPassword) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateAdminProfile";
    const postBody = {
        photo: photo,
        password: password,
        newPassword: newPassword
    }
    return axios.post(url,postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
        })
}


export function userRegistrationRequest(email, Name, mobile, password, photo) {
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
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
        })
}

export function AttorneyGetRequest(progress) {
    const url = baseUrl + "/readAttorneys";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(HideLoader())
                store.dispatch(SetAttorney(res.data.data))
                return res.data
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
        })
}
export function SingleAttorneyGetRequest(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readSingleAttorney" + "/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            if (res.status === 200) {
                store.dispatch(HideLoader())
                store.dispatch(SetSingleAttorney(res.data.data[0]))
                // return res.data
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            return false
        })
}
export function attorneyUpdateRequest(email, Name, mobile, title, photo, description, id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateAttorney" + "/" + id;
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
            if (res.status === 200) {
                store.dispatch(HideLoader())
                SuccessToast("Saved Success")
                return true;
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            return false
        })
}

export function AttorneyDeleteRequest(id) {
    store.dispatch(ShowLoader())
    let url = baseUrl + "/deleteAttorney/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Delete Successful")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
            return false;
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
export function servicesGetRequest() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readServiceAreas";
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetServices(res.data.data))
            }
        })
        .catch((err) => {
            ErrorToast("Something went Wrong")
        })
}

export function readServiceById(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readServiceById" + "/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                // store.dispatch(SetSingleService(res.data.data))
                return res.data.data
            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong2")
            store.dispatch(HideLoader())
            return false;
        })
}

export function serviceDeleteRequest(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/deleteServiceArea" + "/" + id;

    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Delete Success")
                return true;
            }
            else {
                ErrorToast("Delete failed")
                return false;
            }
        }).catch((err) => {
            ErrorToast("Something Went Wrong")
            store.dispatch(HideLoader())
        })
}

export function ServiceUpdateRequest(icon, Name, description, id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateServiceArea" + "/" + id;
    const postBody = {
        icon: icon,
        Name: Name,
        description: description
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            if (res.status === 200) {
                store.dispatch(HideLoader())
                SuccessToast("Saved Success")
                return res;
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            return false
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

export function PlanReadById(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readPlanById/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data.data;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            console.log(err)
            ErrorToast("Something Went Wrongsss")
            store.dispatch(HideLoader())
        })
}
export function planUpdate(id, planName, fee, benifit, extraBenifit1, extraBenifit2, extraBenifit3, extraBenifit4, extraBenifit5, extraBenifit6) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateOurPlan/" + id;
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
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            console.log(err)
            ErrorToast("Something Went Wrongsss")
            store.dispatch(HideLoader())
        })
}
export function planGetRequest() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readOurPlans";
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetPlans(res.data.data))
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            console.log(err)
            ErrorToast("Something Went Wrongsss")
            store.dispatch(HideLoader())
        })
}
export function PlanDeleteRequest(id) {
    const url = baseUrl + "/deleteOurPlan" + "/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            if (res.status === 200) {
                SuccessToast("Delte Success")
                return true
            } else {
                ErrorToast("Something went wrong")
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
          
        })
}

export function CreateMessageRequest(name, email, mobile, subject, message) {
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
                // SuccessToast("Message Send Success")
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

//create review
export function createReview(name, email, comment) {
    const url = baseUrl + "/createUserComment";
    const postBody = {
        name: name,
        email: email,
        comment: comment
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Somrthing went wrong!")
        })
}

export function listReviewByStatus(status) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/listCommentByStatus/" + status;
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                if (status === "NEW") {
                    store.dispatch(setNewReviews(res.data["data"]))
                    return true;
                } else if (status === "COMPLETE") {
                    store.dispatch(setCompletedReviews(res.data["data"]))
                    return true;
                } else if (status === "CANCEL") {
                    store.dispatch(SetCanceledTask(res.data["data"]))
                    return true;
                }
            } else {
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something went wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function updateReviewStatus(id, status) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateCommentStatus/" + id + "/" + status;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Accept Success")
                store.dispatch(HideLoader())
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function deleteComment(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/deleteComment/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Delete Success")
                store.dispatch(HideLoader())
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}


//choice us 
export function createChoiceUsItem(image, title, description) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createChoiceUsItem";
    console.log(url)
    const postBody = {
        image: image,
        title: title,
        description: description
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Add Success")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function ChooiceUsList() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readChoiceUsItem";
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetchooiceUs(res.data["data"]))
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function deleteChooiceUsItem(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/deleteChoiceUsItem/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}



//blog
export function CreateBlog(image, title, content) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createBlog";
    const postBody = {
        authorName: "Rejaul karim",
        image: image,
        title: title,
        description: content
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("create success")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function readBlogList() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readBlogList";
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(Setblogs(res.data.data))
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}
export function readBlogById(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readSingleBlog/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetSingleBlog(res.data.data[0]))
                return res.data.data[0];
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

export function blogCommentsCreate(id, name, comments) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createBlogComment";
    const postBody = {
        blogId: id,
        name: name,
        comment: comments
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Comment add Success")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

export function delteBlogById(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/deleteBlog/" + id;

    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrongs")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}


export function updateBlog(id, image, title, description) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateBlog/" + id;
    console.log(url)
    const postBody = {
        image: image,
        title: title,
        description: description
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Update Success")
                store.dispatch(HideLoader())
                return true;
            }
            else {
                ErrorToast("Something Went Wrongs")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

export function insertCertificate(image, title) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/insertPortfolio";
    const postBody = {
        image: image,
        name: title,
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Create Success")
                store.dispatch(HideLoader())
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}


export function certificateList() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/portfolioList";
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(Setcertificate(res.data.data))
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function deleteCertificate(id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/deletePortfolio/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                console.log(res)
                SuccessToast("Delete Success")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}


//footer add

export function insertFooterItem(name, link) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/createLegalService";
    const postBody = {
        name: name,
        link: link
    }
    return axios.post(url, postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Footer Add Success")
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

export function readFooterList() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readFooterLegalService";
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data.data;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

export function deleteFooter(id) {
    const url = baseUrl + "/deleteLegalService/" + id;
    return axios.get(url, AxiosHeader)
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrongs")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}

//appointment

export function createAppointment(name, email, phone, serviceName, slot, apointmentDate) {
    const url = baseUrl + "/createAppointment";
    const postBody = {
        name: name,
        email: email,
        phone: phone,
        serviceName: serviceName,
        slot: slot,
        apointmentDate: apointmentDate,
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong")
        })
}

export function readAppointmentList(status) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/readAppointmentList/" + status;
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                if (status === "NEW") {
                    store.dispatch(setNewAppointment(res.data["data"]))
                }
                else if (status === "COMPLETED") {
                    store.dispatch(setCompletedAppointment(res.data["data"]))
                }
                else if (status === "CANCELED") {
                    store.dispatch(SetCanceledAppointment(res.data["data"]))
                }
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong")
            
        })
}

export function updateAppointment(status, id) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/updateAppointment/" + id;
    return axios.post(url, { status: status }, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            ErrorToast("Something Went Wrong")
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
        })
}


export function readAllAppointmentList(SearchEndDate,SearchStartDate, pageNo, ParPage, status) {
    const url = baseUrl + "/readAppointment/" + pageNo + "/" + ParPage + "/" + status;
    store.dispatch(ShowLoader())
    return axios.post(url, { SearchEndDate: SearchEndDate, SearchStartDate:SearchStartDate})
        .then((res) => {
            store.dispatch(HideLoader())

            if (res.status === 200) {
                if (res.data['data'][0]['Rows'].length > 0) {
                    console.log(res.data['data'])
                    store.dispatch(setAllAppointment(res.data['data'][0]['Rows']))
                    store.dispatch(SetTotal(res.data['data'][0]['total'][0]['count']))
                } else {
                    store.dispatch(setAllAppointment([]))
                    store.dispatch(SetTotal(0))
                }
            }
            else {
                ErrorToast("Something Went Wrong1")
                store.dispatch(HideLoader())
                return false;
            }
        })
        .catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}


//slots
export function readSlots() {
    const url = baseUrl + "/ReadSlot";
    store.dispatch(HideLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetSlotList(res?.data?.data))
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            console.log(err)
            ErrorToast("Something Went Wrong")
        })
}

export function CreateSLot(slotTime) {
    const url = baseUrl + "/CreateSlot";
    store.dispatch(HideLoader())
    return axios.post(url,{slotTime:slotTime}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
               return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            console.log(err)
            store.dispatch(HideLoader())
            // if (err.response.status === 401) {
            //     removeSession()
            //     window.location.href = "/admin-login"
            // }
            ErrorToast("Something Went Wrong")
        })
}

export function deleteSlot(id) {
    const url = baseUrl + "/deleteSlot/"+id;
    store.dispatch(HideLoader())
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
               return true;
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            ErrorToast("Something Went Wrong")
        })
}

//address
export function readAddress() {
    const url = baseUrl + "/FindAddress";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                store.dispatch(SetAddress(res.data?.data))
                return res.data.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
    
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function UpdateAddress(id,day,location,phone,email,about,facebook,twitter,instagram,linkedin,youtube) {
    const url = baseUrl + "/updateAddress/"+id;
   
    const postBody = {
        address:{
            worksDay:day,
            location:location,
            phone:phone,
            email:email,
        },
        aboutUs:about,
        socialLink:{
            facebook:facebook,
            linkedin:linkedin,
            instagram:instagram,
            twitter:twitter,
            youtube:youtube
        }
    }
   
    store.dispatch(ShowLoader())
    return axios.post(url,postBody,AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
           
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

export function insertAddress(day,location,phone,email,about,facebook,twitter,instagram,linkedin,youtube) {
    const url = baseUrl + "/insertAddress";
    const postBody = {
        address:{
            worksDay:day,
            location:location,
            phone:phone,
            email:email,
        },
        aboutUs:about,
        socialLink:{
            facebook:facebook,
            linkedin:linkedin,
            instagram:instagram,
            twitter:twitter,
            youtube:youtube
        }
    }
   
    store.dispatch(ShowLoader())
    return axios.post(url,postBody,AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
        .catch((err) => {
           
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
        })
}

//logo 
export function readLogo() {
    const url = baseUrl + "/readLogo";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
        
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function insertLogo(logo) {
    const url = baseUrl + "/insertLogo";
    store.dispatch(ShowLoader())
    return axios.post(url,{logo:logo}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res?.data?.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
        
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}


export function insertHeroImage(image) {
    const url = baseUrl + "/insertHeroImage";
    store.dispatch(ShowLoader())
    return axios.post(url,{photo:image}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function readHeroImage() {
    const url = baseUrl + "/findHeroImage";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res?.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function readHeroContent() {
    const url = baseUrl + "/findHeroContent";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res?.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

//HERO content: 
export function insertHeroContent(mainTitle, subTitle) {
    const url = baseUrl + "/insertHeroContent";
    store.dispatch(ShowLoader())
    const postBody={
        title1:mainTitle,
        title2:subTitle
    }
    return axios.post(url,postBody, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Insert Success")
                return true
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function deleteHeroContent(id) {
    const url = baseUrl + "/deleteHeroContent/"+id;
    store.dispatch(ShowLoader())
    return axios.get(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function findHeroContent() {
    const url = baseUrl + "/deleteHeroContent";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

//terms and condition
export function insertTermsAndCondition(data) {
    const url = baseUrl + "/createTerms";
    store.dispatch(ShowLoader())
    return axios.post(url,{content:data}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                SuccessToast("Insert Success")
                return true
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function readTermsAndCondition() {
    const url = baseUrl + "/readTerms";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function updateTermsAndCondition(data, id) {
    debugger
    const url = baseUrl + "/updateTerms/"+id;
    store.dispatch(ShowLoader())
    return axios.post(url,{content:data}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function deleteTermsAndCondition(id) {
    const url = baseUrl + "/deleteTerms";
    store.dispatch(ShowLoader())
    return axios.post(url, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}


export function readPrivacyAndPolicy() {
    const url = baseUrl + "/readPrivacy";
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return res.data;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}


export function createPrivacyAndPolicy(content) {
    const url = baseUrl + "/createPrivacy";
    store.dispatch(ShowLoader())
    return axios.post(url, {content:content}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}

export function updatePrivacyAndPolicy(id,content) {
    const url = baseUrl + "/updatePrivacy/"+id;
    store.dispatch(ShowLoader())
    return axios.post(url, {content:content}, AxiosHeader)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                return true;
            }
            else {
                ErrorToast("Something Went Wrong1")
                return false;
            }
        })
        .catch((err) => {
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/admin-login"
            }
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong2")
        })
}


// Recover Password Step 01 Send OTP
export function RecoverVerifyEmailRequest(email){
    store.dispatch(ShowLoader())
let URL=baseUrl+"/RecoverVerifyEmail/"+email
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            if(res.data['status']==="fail"){
                ErrorToast("No user found");
                return false;
            }
            else{
                setEmail(email)
                SuccessToast("A 6 Digit verification code has been sent to your email address. ");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Recover Password Step 02 Verify OTP
export function RecoverVerifyOTPRequest(email,OTP){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/RecoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("Code Verification Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}


export function RecoverResetPassRequest(email,OTP,password){
    store.dispatch(ShowLoader())
    let URL=baseUrl+"/RecoverResetPass";
    let PostBody={email:email,OTP:OTP,password:password}

    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){

            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("NEW PASSWORD CREATED");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}






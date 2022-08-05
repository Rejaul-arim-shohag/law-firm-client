class SessionHelper{
    setAdminToken(token){
        localStorage.setItem("adminToken",token)
    }
    getAdminToken(){
        return localStorage.getItem("adminToken")
    }

    setAdminDetails(AdminDetails){
        localStorage.setItem("AdminDetails",JSON.stringify(AdminDetails))
    }
    getAdminDetails(){
       return JSON.parse(localStorage.getItem("AdminDetails"))
    }

    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }

    setEmail(email){
        localStorage.setItem("email",email)
    }
    getEmail(){
        return localStorage.getItem("email")
    }
    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }

    setUserDetails(userDetails){
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
    }
    getUserDetails(){
       return JSON.parse(localStorage.getItem("userDetails"))
    }
    removeSession(){
        localStorage.clear();
        window.location.href="/"
    }
}
export const {
    setToken,getToken,setUserDetails,getUserDetails,setAdminDetails,getAdminDetails,
     removeSession,setEmail,getEmail,setOTP,getOTP, setAdminToken, getAdminToken
}=new SessionHelper;
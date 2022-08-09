import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { getEmail, getToken } from '../../Helper/SessionHelper';
const UserProtected = () => {
    return  getEmail() && getToken() ? <Outlet /> : <Navigate to="/login" />;

};

export default UserProtected;
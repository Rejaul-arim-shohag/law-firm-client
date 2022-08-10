import React from 'react';
import { Navigate,  useLocation } from "react-router-dom";
import { getEmail, getToken } from '../../Helper/SessionHelper';
const UserProtected = ({ children }) => {
    let location = useLocation()
    return (getToken() ? children : <Navigate to="/login" replace state={{ from: location}} />)
};

export default UserProtected;
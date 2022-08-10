import React from 'react';
import { Navigate,  useLocation } from "react-router-dom";
import { getAdminToken} from '../../Helper/SessionHelper';
const AdminProtect = ({ children }) => {
    let location = useLocation()
    return (getAdminToken() ? children : <Navigate to="/admin-login" replace state={{ from: location}} />)
};

export default AdminProtect;


import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const AdminLogin = lazy(() => import('../../components/AdminDashboard/AdminLogin/AdminLogin'));
const AdminLoginPage = () => {
    return (
        <>
            <Suspense fallback={<LazyLoader />}>
                <AdminLogin />
            </Suspense>
        </>
    );
};

export default AdminLoginPage;
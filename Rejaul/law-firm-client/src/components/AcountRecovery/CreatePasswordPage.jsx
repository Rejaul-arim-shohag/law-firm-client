import React, { lazy, Suspense } from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const CreatePassword = lazy(() => import('../../components/AcountRecovery/CreatePassword'));
const VerifyOTPPage = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <CreatePassword />
        </Suspense>
    );
};

export default VerifyOTPPage;
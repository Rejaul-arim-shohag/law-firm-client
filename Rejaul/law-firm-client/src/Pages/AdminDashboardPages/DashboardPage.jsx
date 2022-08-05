import React, { Suspense, lazy } from 'react';
import Dashboard from '../../components/AdminDashboard/Dashboard/Dashboard';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const DashboardPage = () => {
    return (
        <>
            <MasterLayout>
                <Dashboard/>
            </MasterLayout>
        </>
    );
};

export default DashboardPage;
import React, { Suspense, lazy } from 'react';
import Dashboard from '../../components/AdminDashboard/Dashboard/Dashboard';
import NewAppointment from '../../components/AdminDashboard/NewAppointment/NewAppointment';
import Comments from '../../components/Comments/Comments';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const DashboardPage = () => {
    return (
        <>
            <MasterLayout>
                <Dashboard/>
                <Comments/>
                {/* <NewAppointment/> */}
            </MasterLayout>
        </>
    );
};

export default DashboardPage;
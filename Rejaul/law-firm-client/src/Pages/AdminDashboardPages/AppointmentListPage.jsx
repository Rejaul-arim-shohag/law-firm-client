import React from 'react';
import AppointmentList from '../../components/AdminDashboard/AppointmentList/AppointmentList';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const AppointmentListPage = () => {
    return (
        <>
            <MasterLayout>
                <AppointmentList />
            </MasterLayout>
        </>
    );
}

export default AppointmentListPage;

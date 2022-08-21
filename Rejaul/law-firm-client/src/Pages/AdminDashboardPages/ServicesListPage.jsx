import React from 'react';
import ServiceList from '../../components/AdminDashboard/ServiceList/ServiceList';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ServicesListPage = () => {
    return (
        <>
            <MasterLayout>
                <ServiceList />
            </MasterLayout>
        </>
    );
};

export default ServicesListPage;
import React from 'react';
import AttorneyAdd from '../../components/AdminDashboard/AttorneyAdd/AttorneyAdd';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const AttorneyAddPage = () => {
    return (
        <>
          <MasterLayout>
            <AttorneyAdd/>
          </MasterLayout>  
        </>
    );
};

export default AttorneyAddPage;
import React from 'react';
import AttorneyRead from '../../components/AdminDashboard/AttorneyRead/AttorneyRead';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const AttorneyReadPage = () => {
    return (
        <>
            <MasterLayout>
                <AttorneyRead/>
            </MasterLayout>
        </>
    );
};

export default AttorneyReadPage;
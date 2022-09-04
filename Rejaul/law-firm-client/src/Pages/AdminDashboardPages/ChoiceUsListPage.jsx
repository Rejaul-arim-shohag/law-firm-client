import React from 'react';
import ChoiceUsList from '../../components/AdminDashboard/ChoiceUsList/ChoiceUsList';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ChoiceUsListPage = () => {
    return (
        <>
            <MasterLayout>
                <ChoiceUsList />
            </MasterLayout>
        </>
    );
};

export default ChoiceUsListPage;
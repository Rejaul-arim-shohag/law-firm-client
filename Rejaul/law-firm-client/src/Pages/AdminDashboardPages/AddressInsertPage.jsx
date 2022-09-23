import React from 'react';
import AddressInsert from '../../components/AdminDashboard/AddressInsert/AddressInsert';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const AddressInsertPage = () => {
    return (
        <>
            <MasterLayout>
                <AddressInsert/>
           </MasterLayout>
        </>
    );
};

export default AddressInsertPage;
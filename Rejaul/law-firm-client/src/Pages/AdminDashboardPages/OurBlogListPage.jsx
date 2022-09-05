import React from 'react';
import OurBlogList from '../../components/AdminDashboard/OurBlogList/OurBlogList';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const OurBlogListPage = () => {
    return (
        <>
            <MasterLayout>
                <OurBlogList/>
            </MasterLayout>
        </>
    );
};

export default OurBlogListPage;
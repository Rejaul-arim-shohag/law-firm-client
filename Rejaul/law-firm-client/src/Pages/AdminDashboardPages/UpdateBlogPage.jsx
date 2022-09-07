import React from 'react';
import UpdateBlog from '../../components/AdminDashboard/UpdateBlog/UpdateBlog';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const UpdateBlogPage = () => {
    return (
        <>
            <MasterLayout>
                <UpdateBlog/>
            </MasterLayout>
        </>
    );
};

export default UpdateBlogPage;
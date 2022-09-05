import React from 'react';
import WriteBlog from '../components/AdminDashboard/WriteBlog/WriteBlog';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const WriteBlogPage = () => {
    return (
        <>
            <MasterLayout> 
                <WriteBlog/>
            </MasterLayout>
        </>
    );
};

export default WriteBlogPage;
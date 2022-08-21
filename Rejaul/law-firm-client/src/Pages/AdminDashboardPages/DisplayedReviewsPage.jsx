import React from 'react';
import DisplayedReviews from '../../components/AdminDashboard/DisplayedReviews/DisplayedReviews';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const DisplayedReviewsPage = () => {
    return (
        <div>
            <MasterLayout>
                <DisplayedReviews/>
            </MasterLayout>
        </div>
    );
};

export default DisplayedReviewsPage;
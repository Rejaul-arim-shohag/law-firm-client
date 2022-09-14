import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { listReviewByStatus, readAppointmentList, readBlogList, servicesGetRequest } from '../../../ApiRequest/APIRequest';

const Dashboard = () => {
    useEffect(() => {
        readAppointmentList("NEW")
        listReviewByStatus("NEW")
        readBlogList()
        servicesGetRequest()
    }, [])

    const NewReviewList = useSelector((state) => state.reviews.New);
    const NewAppointment = useSelector((state) => state.appointment.New);
    const blogList = useSelector(state => state.blogs.blogList);
    const ServiceList = useSelector((state) => state.services.serviceList);
    return (
        <div>
            <div className="container">
                <div className="row px-1">
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="animated fadeInUp text-center">New Appointment</h5>
                                <h3 className="text-secondary animated fadeInUp text-center text-success">{NewAppointment.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="animated fadeInUp text-center">New Review</h5>
                                <h3 className="text-secondary animated fadeInUp text-center text-success">{NewReviewList.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card h-100">
                            <div className="card-body">
                            <h5 className="animated fadeInUp text-center">Blog</h5>
                                <h3 className="text-secondary animated fadeInUp text-center text-success">{blogList.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card h-100">
                            <div className="card-body">
                            <h5 className="animated fadeInUp text-center">Service</h5>
                                <h3 className="text-secondary animated fadeInUp text-center text-success">{ServiceList.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
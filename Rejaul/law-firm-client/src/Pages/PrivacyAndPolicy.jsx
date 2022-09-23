import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from "../components/Footer/Footer"
import Appointment from "../components/Appointment/Appointment"

import { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { readPrivacyAndPolicy } from '../ApiRequest/APIRequest';

const PrivacyAndPolicy = () => {
    const [privacy, setPrivacy] = useState([])

    useEffect(() => {
        readPrivacyAndPolicy()
            .then((result) => {
                setPrivacy(result?.data)
            })
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavBar />
            <div className="mt-5">
                <h1 className="text-center">Privacy Policy</h1>
                <h5 className="text-center">The statement or a legal document</h5>
                <div className="card mt-4 ">
                    <div className="card-body container">
                    <h6 className=" mt-2 mb-3">Privacy Policy</h6>
                        {
                            ReactHtmlParser(privacy[0]?.content)
                        }
                    </div>
                </div>
            </div>
            
            {/* <Appointment /> */}
            <Footer />
        </>
    );
};

export default PrivacyAndPolicy;
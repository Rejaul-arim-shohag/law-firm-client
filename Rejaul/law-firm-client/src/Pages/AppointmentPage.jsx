import React from 'react';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const AppintmentPage = () => {
    return (
        <div>
            <NavBar/>
            <Appointment/>
            <Footer/>
        </div>
    );
};

export default AppintmentPage;
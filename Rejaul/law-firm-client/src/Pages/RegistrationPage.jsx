import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import Registration from '../components/Registration/Registration';

const RegistrationPage = () => {
    return (
        <div>
            <NavBar/>
            <Registration/>
            <Footer/>
        </div>
    );
};

export default RegistrationPage;
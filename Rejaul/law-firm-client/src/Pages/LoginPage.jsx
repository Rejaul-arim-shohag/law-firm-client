import React from 'react';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import NavBar from '../components/NavBar/NavBar';

const loginPage = () => {
    return (
        <>
            <NavBar />
            <Login />
            <Footer />
        </>
    );
};

export default loginPage; 
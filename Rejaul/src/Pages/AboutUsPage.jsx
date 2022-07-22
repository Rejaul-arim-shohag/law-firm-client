import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import ClientTestimonial from '../components/AboutUs/ClientTestimonial';
import OurClient from '../components/AboutUs/OurClient';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const AboutUsPage = () => {
    return (
        <div>
            <NavBar/>
            <AboutUs/>
            <OurClient/>
            <ClientTestimonial/>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;
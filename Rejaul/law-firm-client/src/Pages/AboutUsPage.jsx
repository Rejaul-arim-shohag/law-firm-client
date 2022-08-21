import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import ClientTestimonial from '../components/AboutUs/ClientTestimonial';
import OurClient from '../components/AboutUs/OurClient';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import PracticeArea from '../components/PracticeArea/PracticeArea';

const AboutUsPage = () => {
    return (
        <div>
            <NavBar/>
            <AboutUs/>
            <OurClient/>
            <PracticeArea/>
            <ClientTestimonial/>
            <ClientReview/>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;
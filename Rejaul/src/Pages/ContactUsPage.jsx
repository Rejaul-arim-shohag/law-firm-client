import React from 'react';
import Contact from '../components/Contact/Contact';
import ContactHero from '../components/ContactHero/ContactHero';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const ContactUsPage = () => {
    return (
        <div>
            <NavBar/>
            <ContactHero/>
            <ContactUs/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default ContactUsPage;
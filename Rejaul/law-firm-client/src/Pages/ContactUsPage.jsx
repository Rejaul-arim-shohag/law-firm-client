import React from 'react';
import Contact from '../components/Contact/Contact';
import ContactHero from '../components/ContactHero/ContactHero';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const ContactUsPage = () => {
    return (
        <div>
            <NavBar/>
            <ContactHero/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default ContactUsPage;
import React from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import NavBar from '../components/NavBar/NavBar';
import PracticeArea from '../components/PracticeArea/PracticeArea';
import PricingPlans from '../components/PricingPlans/PricingPlans';
import Testimonial from '../components/Testimonial/Testimonial';
import TopRecomendaton from '../components/TopRecomendatons/TopRecomendaton';

const HomePage = () => {
    return (
        <div>
           <NavBar/>
           <HeroSection/>
           <TopRecomendaton/>
           <PracticeArea/>
           <Testimonial/>
           <PricingPlans/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default HomePage;
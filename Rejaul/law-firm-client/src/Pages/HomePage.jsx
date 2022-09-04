import React from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import NavBar from '../components/NavBar/NavBar';
import OurBlog from '../components/OurBlog/OurBlog';
import PracticeArea from '../components/PracticeArea/PracticeArea';
import PricingPlans from '../components/PricingPlans/PricingPlans';
import Testimonial from '../components/Testimonial/Testimonial';
import TopRecomendaton from '../components/TopRecomendatons/TopRecomendaton';
import WhyChooiceUs from '../components/WhyChooiceUs/WhyChooiceUs';

const HomePage = () => {
    return (
        <div>
           <NavBar/>
           <HeroSection/>
           {/* <TopRecomendaton/> */}
           <PracticeArea/>
           <WhyChooiceUs/>
           <Testimonial/>
           <PricingPlans/>
           <OurBlog/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default HomePage;
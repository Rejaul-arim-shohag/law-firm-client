import React, { lazy, Suspense } from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";

// import Contact from '../components/Contact/Contact';
// import Footer from '../components/Footer/Footer';
// import HeroSection from '../components/HeroSection/HeroSection';
// import NavBar from '../components/NavBar/NavBar';
// import OurBlog from '../components/OurBlog/OurBlog';
// import PracticeArea from '../components/PracticeArea/PracticeArea';
// import PricingPlans from '../components/PricingPlans/PricingPlans';
// import Testimonial from '../components/Testimonial/Testimonial';
// import TopRecomendaton from '../components/TopRecomendatons/TopRecomendaton';
// import WhyChooiceUs from '../components/WhyChooiceUs/WhyChooiceUs';


const Contact = lazy(() => import('../components/Contact/Contact'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const HeroSection = lazy(() => import('../components/HeroSection/HeroSection'));
const NavBar = lazy(() => import('../components/NavBar/NavBar'));
const OurBlog = lazy(() => import('../components/OurBlog/OurBlog'));
const PracticeArea = lazy(() => import('../components/PracticeArea/PracticeArea'));
const PricingPlans = lazy(() => import('../components/PricingPlans/PricingPlans'));
const Testimonial = lazy(() => import('../components/Testimonial/Testimonial'));
const TopRecomendaton = lazy(() => import('../components/TopRecomendatons/TopRecomendaton'));
const WhyChooiceUs = lazy(() => import('../components/WhyChooiceUs/WhyChooiceUs'));


const HomePage = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
           <NavBar/>
           <HeroSection/>
           <PracticeArea/>
           <WhyChooiceUs/>
           <Testimonial/>
           <PricingPlans/>
           <OurBlog/>
           <Contact/>
           <Footer/>
        </Suspense>
    );
};

export default HomePage;
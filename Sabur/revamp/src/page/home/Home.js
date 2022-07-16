import React, {Component, Fragment} from 'react';

// Include Component
import AppNavbar from "../../components/navbar/AppNavbar";
import Hero from "../../components/hero/Hero";
import TopRecomendations from "../../components/top_recomendations/TopRecomendations";
import WhyChooseUs from "../../components/why_choose_us/WhyChooseUs";
import OurCourse from "../../components/our-course/OurCourse";
import BrowseCourses from "../../components/browse-courses/BrowseCourses";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact_Section from "../../components/contact/Contact_Section";
import Footer from "../../components/footer/Footer";

// Include Style
import './home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <Hero/>
                <TopRecomendations/>
                <WhyChooseUs/>
                <OurCourse/>
                <BrowseCourses/>
                <Testimonial/>
                <Contact_Section/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;
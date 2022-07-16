import React, {Component, Fragment} from 'react';

// Include Component
import Hero from "../../components/hero/Hero";
import TopRecomendations from "../../components/top_recomendations/TopRecomendations";
import WhyChooseUs from "../../components/why_choose_us/WhyChooseUs";
import OurCourse from "../../components/our-course/OurCourse";
import BrowseCourses from "../../components/browse-courses/BrowseCourses";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact_Section from "../../components/contact/Contact_Section";

// Include Style
import './home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Hero/>
                <TopRecomendations/>
                <WhyChooseUs/>
                <OurCourse/>
                <BrowseCourses/>
                <Testimonial/>
                <Contact_Section/>
            </Fragment>
        );
    }
}

export default Home;
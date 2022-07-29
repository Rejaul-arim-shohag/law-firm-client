import React, {Component, Fragment} from 'react';

// Include Component
import Hero from "../../components/hero/Hero";
import TopRecomendations from "../../components/top_recomendations/TopRecomendations";
import WhyChooseUs from "../../components/why_choose_us/WhyChooseUs";
import BrowseCourses from "../../components/browse-courses/BrowseCourses";
import Testimonial from "../../components/testimonial/Testimonial";
import ContactSection from "../../components/contact/ContactSection";

// Head Image
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";

// Include Style
import './home.css';
import {Helmet} from "react-helmet";
import OurCoursesCard from "../../components/our-courses-card/OurCoursesCard";

// Home Page / Landing Page - Almost Done

class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title>লার্ন উইথ রাব্বিল হাসান</title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta charSet="UTF-8"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta name="keywords"
                          content="Rabbil Hasan,Learn With Rabbil Hasan,Mobile App Development Tutorial Bangla, Web Development Tutorial Bangla, Software Development Tutorial Bangla,Laravel Tutorial bangla, React Tutorial Bangla, Android Tutorial Bangla, React Native Tutorial Bangla, Programming Tutorial Bangla, JavaScript Tutorial Bangla"/>
                    <meta name="author" content="Rabbil Hasan"/>
                    <meta name="application-name" content="রাব্বিল হাসান"/>
                    <meta name="apple-mobile-web-app-title" content="লার্ন উইথ রাব্বিল হাসান"/>
                    <meta property="og:site_name" content="Rabbil.com"/>
                    <meta property="og:url" content=""/>
                    <meta property="og:title" content="লার্ন উইথ রাব্বিল হাসান"/>
                    <meta property="og:description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image} />
                </Helmet>

                <Hero/>
                <TopRecomendations/>
                <WhyChooseUs/>
                <div className="pt-5 pb-5">
                    <div className="container position-relative">
                        <p className="small-section-title fw-bold themeColor mb-2 headline-2"> Our Course </p>
                        <div className="d-flex justify-content-center">
                            <h2 className="section-title fw-bold mb-4"> Our Top-Picked Courses </h2>
                        </div>
                        <div className="row coursesBG">
                            <OurCoursesCard/>
                            <OurCoursesCard/>
                            <OurCoursesCard/>
                            <OurCoursesCard/>
                        </div>
                    </div>
                </div>
                <BrowseCourses/>
                <Testimonial/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Home;
import React, {Component, Fragment} from 'react';

// React Helmet
import {Helmet} from "react-helmet";

// Images
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";

// Component Include
import SmallHero from "../../components/small-hero/SmallHero";
import CourseGallery from "../../components/course-gallery/CourseGallery";
import Testimonial from "../../components/testimonial/Testimonial";
import ContactSection from "../../components/contact/ContactSection";
import OurCoursesCard from "../../components/our-courses-card/OurCoursesCard";

class CoursesPageTwo extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title> Our Courses Page 02 </title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image}/>
                </Helmet>

                <SmallHero/>
                <CourseGallery/>
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
                <Testimonial/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default CoursesPageTwo;
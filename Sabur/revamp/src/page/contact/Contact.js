import React, {Component, Fragment} from 'react';

// Include Style
import './contact.css';
import {Helmet} from "react-helmet";
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";
import {Link} from "react-router-dom";
import ContactSection from "../../components/contact/ContactSection";
import Testimonial from "../../components/testimonial/Testimonial";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title> Contact with us </title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image} />
                </Helmet>

                {/* Hero Section */}
                <div className="small-hero-bg lightDeepBG-2 pb-lg-0 pt-lg-0 pt-5 pb-3 d-flex align-items-center">
                    <div className="container-fluid my-50">
                        <div className="container">
                            <div className="row">
                                <div className="mx-auto col-12 col-md-8 col-md-6 text-center">
                                    <p className="small-section-title mb-2 headline-2 breadcrumb-link"><Link
                                        className="darkColor" to="/home"> Home </Link> / <Link className="darkColor" to="/mentor"> Contact </Link></p>
                                    <h2 className="themeDarkColor fw-bold headline-1 hero-headline-1-res"> Have Questions? <br/> <span className="text-uppercase themeColor dot section-title headline-1-important-min-992">Contact us</span>
                                    </h2>
                                    <p className="themeDarkColor fs-5 my-4 opacity-80 mb-0"> Are you looking for
                                        amazing e-course platform? <br className="d-none d-sm-block"/> Don't
                                        worry! We got it for you! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bg-transparent p-0 m-0"/>
                <ContactSection/>
                {/* Google Map (API Key didn't get it) */}
                <Testimonial/>
            </Fragment>
        );
    }
}

export default Contact;
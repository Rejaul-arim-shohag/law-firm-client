import React, {Component, Fragment} from 'react';

// Include Style
import './courses.css';
import {Helmet} from "react-helmet";
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                {/* React Helmet = head title include */}
                <Helmet>
                    <title> Our Courses </title>

                    <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                    <link rel="icon" href={favicon} type="image/x-icon"/>
                    <meta name="description"
                          content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>
                    <meta property="og:image" content={og_image} />
                </Helmet>

                <h2> Courses </h2>
            </Fragment>
        );
    }
}

export default Courses;
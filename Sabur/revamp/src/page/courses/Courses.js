import React, {Component, Fragment} from 'react';

// Include Style
import './courses.css';

// Rect Helmet
import {Helmet} from "react-helmet";

// Images
import favicon from "../../assets/images/title-icon.ico";
import og_image from "../../assets/images/og-image.png";

// React Dom
import {Link} from "react-router-dom";

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

                <div className="min-100-vh d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-md-4 mb-4 mb-md-0"> <Link to="/courses-page-one"> <div className="w-100 bg-warning p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 01 </div> </Link> </div>
                            <div className="col-md-4 mb-4 mb-md-0"> <Link to="/courses-page-two"> <div className="w-100 bg-info p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 02 </div> </Link> </div>
                            <div className="col-md-4 mb-4 mb-md-0"> <Link to="/courses-page-three"> <div className="w-100 bg-success p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 03 </div> </Link> </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Courses;
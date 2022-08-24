import React from 'react';
import "./Testimonial.css";
import clinet1 from "../../Assets/images/clinet1.jpg"
import clinet2 from "../../Assets/images/client2.jpg"
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import ClientTestimonial from '../AboutUs/ClientTestimonial';

const Testimonial = () => {
    
    return (
        <div className="testimonial">
           <ClientTestimonial/>
            
        </div>
    );
};

export default Testimonial;
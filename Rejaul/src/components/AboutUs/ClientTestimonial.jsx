import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { GoQuote } from "react-icons/go";
import { useRef } from 'react';

const ClientTestimonial = () => {
    const [testimonial, setTestimonial] =  useState([]);
    const slider = useRef()
    useEffect(()=>{
        axios.get("https://testimonialapi.toolcarton.com/api")
        .then((data)=>{
            setTestimonial(data.data)
        })
    })
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="py-5">
            <div data-aos="fade-left" className="container">
                    <div className="d-flex justify-content-between flex-wrap gap-5">
                        <div className="col-md-2 col-12 text-center d-flex justify-content-center align-items-center">
                            <div className="">
                                <h3 className='text-dark'>Testimonial</h3>
                                <h6 className='text-uppercase'>What out customer says</h6>
                                <div className=" mt-3 d-flex gap-3 justify-content-center">
                                    <button onClick={() => slider.current.slickPrev()} className='testimonialNav rounded-circle bg-light border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                                    <button onClick={() => slider.current.slickNext()} className='testimonialNav rounded-circle bg-light  border-0'> <HiOutlineChevronRight className='m-2' /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-12  testimonialCardSlider ">
                            <Slider ref={c => (slider.current = c)} {...settings}>
                                {
                                    testimonial?.map((item, index) => {
                                        return (
                                            <div className="p-1 w-100 " key={index}>
                                                <div key={index} className="card  testimonialCard border-start border-top h-100" >
                                                    <div className="card-body h-100 d-flex flex-column justify-content-between">
                                                        <div className="header">
                                                            <GoQuote className='display-7 text-muted' />
                                                            <p className='testimonialMessage' style={{ fontSize: "1.3ch" }}>{item.message}</p>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-center gap-3 card-text">
                                                            
                                                            <img src={item.avatar} alt="" height={50} width={50} className="rounded-circle " />
                                                            <h5>{item.name}</h5>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </div>
              
            </div>
        </div>
    );
};

export default ClientTestimonial;
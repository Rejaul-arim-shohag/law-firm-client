import React from 'react';
import curveImg from "../../Assets/images/curve-2.b04970a8.svg"
import cardImg from "../../Assets/images/accident.jpg"
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useRef } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
const OurBlog = () => {
    const slider = useRef()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
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
            <div className="container">
                <div className="mx-auto text-center mb-5">
                    <h5 className="text-secondary">Blog</h5>
                    <h2 className="text-center text-uppercase font-weight-bold">OUR Latest Blog</h2>
                    <img src={curveImg} style={{ top: "-13px", width: "25%" }} className="position-relative " alt="" />
                </div>
                <div className="row">
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        <div className="p-2 w-100">
                            <div className="card shadow-sm">
                                <img style={{ objectFit: "cover", height: "250px" }} className="card-img-top" src={cardImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-link">Read More <HiArrowNarrowRight /></button>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-100">
                            <div className="card shadow-sm ">
                                <img style={{ objectFit: "cover", height: "250px" }} className="card-img-top" src={cardImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-link">Read More <HiArrowNarrowRight /></button>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-100">
                            <div className="card shadow-sm ">
                                <img style={{ objectFit: "cover", height: "250px" }} className="card-img-top" src={cardImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-link">Read More <HiArrowNarrowRight /></button>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-100">
                            <div className="card shadow-sm ">
                                <img style={{ objectFit: "cover", height: "250px" }} className="card-img-top" src={cardImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-link">Read More <HiArrowNarrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button  onClick={() => slider.current.slickPrev()} className='rounded-circle bg-secondary text-white border-0' style={{marginRight:"15px", width:"50px", height:"50px", fontSize:"20px"}}> <HiOutlineChevronLeft className='m-2' /></button>
                    <button  onClick={() => slider.current.slickNext()} className='rounded-circle bg-secondary text-white  border-0' style={{marginRight:"15px", width:"50px", height:"50px", fontSize:"20px"}}> <HiOutlineChevronRight className='m-2' /></button>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
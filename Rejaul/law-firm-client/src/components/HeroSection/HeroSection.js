import React from 'react';
import "./heroSection.css";
import Marquee from "react-fast-marquee";
import heroMainImage from "../../Assets/images/heroLawyear.svg";
import image1 from "../../Assets/images/citybank-removebg-preview.png"
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    let navigate = useNavigate()
    const handleNavigateToAppoinment = () => {
        navigate("/contact-us")
    }
    return (
        <div className="heroSection">
            <div className="leftBg"></div>
            <div className="rightbg"></div>
            <div className="container pt-4">
                <div className="row heroContentAndImage">
                    <div className="heroContent pt-5 col-md-6">
                        <div>
                            <h1 style={{fontWeight:"700"}} className="text-uppercase">Protecting businesses</h1>
                            <h1 style={{fontWeight:"800"}} className="highlightName">IN BANGLADESH.</h1>
                            <h5 className="my-2">Napoli Shkolnik is a national law firm working for victims of personal  injuries and wrongs.</h5>
                            {/* <div className="serviceCounted d-flex justify-content-between">
                                <div>
                                    <h4 className="text-center">98%</h4>
                                    <p className="text-center">SUCCESSFUL CASES</p>
                                </div>
                                <div>
                                    <h4 className="text-center">1700+</h4>
                                    <p className="text-center">TRUSTED CLIENTS</p>
                                </div>
                                <div>
                                    <h4 className="text-center">10,600</h4>
                                    <p className="text-center">INJURY CASES</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="serchBox">
                            {/* <input className="serviceSearchField w-100" placeholder="Search" type="text" />
                            <button className="serviceSearchButton">Search</button> */}
                            <button onClick={handleNavigateToAppoinment} className="navbarButton mt-4">Make an Appointment</button>
                        </div>
                        <Marquee className="mt-5" gradient={false}>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                            <div className='w-20 ms-5'>
                                <img className="opacity-75" style={{ height: '50px'}} src={image1} alt="" />
                            </div>
                        </Marquee>

                    </div>
                    <div className="heroMainImage pb-5 d-flex col-md-6  justify-content-end">
                        <img src={heroMainImage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
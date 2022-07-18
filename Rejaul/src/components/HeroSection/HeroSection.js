import React from 'react';
import "./heroSection.css";
import heroMainImage from "../../Assets/images/heroLawyear.svg";
import lawImage from "../../Assets/images/law-book.webp";
import NavBar from '../NavBar/NavBar';
import { VscLaw } from "react-icons/vsc";
import { GiClawHammer } from "react-icons/gi";
const HeroSection = () => {
    return (
        <div className="heroSection">
            <div className="leftBg"></div>
            <div className="rightbg"></div>
            <div className="container pt-4">
                <div className="row heroContentAndImage">
                    <div className="heroContent pt-5 col-md-6">
                        <div>
                            <h1><span className="heroSpan">Legal Attony  Help In</span> </h1>
                            <h1 className="highlightName">BANGLADESH.</h1>
                            <p className="my-2">Appareat reformidans his te. Mundi erroribus <br /> ad eum, mea ut dicam nostro copiosae. </p>
                            <div className="serviceCounted d-flex justify-content-between">
                                <div>
                                    <h4 className="text-center">98%</h4>
                                    <p  className="text-center">SUCCESSFUL CASES</p>
                                </div>
                                <div>
                                    <h4 className="text-center">1700+</h4>
                                    <p  className="text-center">TRUSTED CLIENTS</p>
                                </div>
                                <div>
                                    <h4 className="text-center">10,600</h4>
                                    <p  className="text-center">INJURY CASES</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="serchBox">
                            <input className="serviceSearchField w-100" placeholder="Search" type="text" />
                            <button className="serviceSearchButton">Search</button>
                        </div>
                        <div className="heroServices my-3">
                                <div className="singleService">
                                   <img src={lawImage} alt="" />
                                </div>
                                <div className="singleService">
                                <img src={lawImage} alt="" />
                                </div>
                                <div className="singleService">
                                <img src={lawImage} alt="" />
                                </div>
                                <div className="singleService">
                                   <p className="servicePlus">10+</p>
                                </div>
                            </div>
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
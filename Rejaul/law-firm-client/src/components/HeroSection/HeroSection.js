import React, { useEffect, useState } from 'react';
import "./heroSection.css";
import Marquee from "react-fast-marquee";
import heroMainImage from "../../Assets/images/heroLawyear.svg";
import image1 from "../../Assets/images/citybank-removebg-preview.png"
import { useNavigate } from 'react-router-dom';
import { certificateList, readHeroContent, readHeroImage } from '../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';

const HeroSection = () => {
    const [heroImage, setHeroImage] = useState([])
    const [heroContent, setHeroContent] = useState([])

    let navigate = useNavigate()
    const handleNavigateToAppoinment = () => {
        navigate("/appointment")
    }
    useEffect(() => {
        certificateList()
        readHeroImage().then((res)=>{
            setHeroImage(res?.data)
        })
        readHeroContent()
        .then((result)=>{
            setHeroContent(result.data);
        })
    }, [])
    const certificates = useSelector((state) => state.certificate.certificateList);
    return (
        <div className="heroSection">
            <div className="leftBg"></div>
            <div className="rightbg"></div>
            <div className="container pt-4">
                <div className="row heroContentAndImage">
                    <div className="heroContent pt-5 col-md-6">
                        <div>
                            {/* <h1 style={{ fontWeight: "800" }} className="text-uppercase"> {heroContent[0]?.title1}</h1> */}
                            <h1 style={{ fontWeight: "700" }} className="highlightName">{heroContent[0]?.title1}</h1>
                            <h5 className="my-2">{heroContent[0]?.title2}</h5>
                        </div>
                        <div className="serchBox">
                            <button onClick={handleNavigateToAppoinment} className="navbarButton mt-4">Make an Appointment</button>
                        </div>
                        <Marquee className="mt-5" gradient={false}>
                            {
                                certificates.map((item, index) => {
                                    return (
                                        <div key={index} className='w-20 ms-5'>
                                            <img className="opacity-75" style={{ height: '50px' }} src={item.image} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Marquee>

                    </div>
                    <div className="heroMainImage pb-5 d-flex col-md-6  justify-content-end">
                        <img src={heroImage[0]?.photo} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
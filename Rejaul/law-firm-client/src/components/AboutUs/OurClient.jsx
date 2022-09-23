import React from 'react';
import customer1 from "../../Assets/images/customer1.webp"
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import { certificateList } from '../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';

const OurClient = () => {
    useEffect(()=>{
        certificateList()
    },[])
    const certificates = useSelector((state) => state.certificate.certificateList);

    return (
        <div className="ourClient py-5 bg-light">
            <div className="container">
                <div className="card border-0 p-5">
                <Marquee className="mt-5" gradient={false}>
                            {
                                certificates.map((item, index) => {
                                    return (
                                        <div key={index} className='w-20 ms-5'>
                                            <img  style={{ height: '100px' }} src={item.image} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Marquee>
                </div>
            </div>
        </div>
    );
};

export default OurClient;
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import "./HeroSlider.scss";
export default function HeroSlider() {
    const [heroSlider, setHeroSlider] = useState([]);
    const slider = useRef()
    const { isLoading, error, data, isFetching } = useQuery("heroSliderImg", () => axios.get("/data/sliderBanner.json").then(({ data }) => data));

    useEffect(() => setHeroSlider(data), [data])


    // if (testimonial?.length === 0) {
    //     return <Loader isLoading={true} />
    // }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,

    };





    return (
        <div className="slider_card h-full w-full">
            <div className="relative">
                <div className="w-full flex justify-center items-center" >
                    <div className=" outline outline-offset-8 outline-primary w-72 h-72 md:w-[35rem] md:h-[35rem]  rounded-full p-5 md:p-10">
                        <div className="h-full w-full rounded-full bg-primary md:p-10 p-5">
                            <div className="relative">
                                <Slider ref={c => (slider.current = c)} {...settings}>
                                    {
                                        heroSlider?.map((item, index) => (
                                            <div className="rounded-full w-full h-full md:p-12 p-5">
                                                <img src="/images/recent/1.jpg" alt="" className='rounded ' />
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>

                        </div>
                        <div className="ml-2 flex gap-3 justify-center">
                            <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-primary text-white border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                            <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-primary text-white border-0'> <HiOutlineChevronRight className='m-2' /></button>
                        </div>

                    </div>


                </div>





            </div>
        </div>
    )
}

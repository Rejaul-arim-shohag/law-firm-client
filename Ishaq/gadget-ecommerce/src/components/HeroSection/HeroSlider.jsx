import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import "./HeroSlider.scss";
export default function HeroSlider() {
    const [heroSlider, setHeroSlider] = useState([]);
    const slider = useRef()
    const { isLoading, error, data, isFetching } = useQuery("heroPhoto", () =>
        axios.get(
            "/data/interior.json"
        ).then(({ data }) => data)
    );

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
        <div className="slider_card h-96 w-96">
            <Slider ref={c => (slider.current = c)} {...settings}>
                {
                    heroSlider?.map((item, index) => {
                        return (
                            <div className=" h-full w-full relative ">
                                <img src={item.src} alt="" className='h-100 w-100 rounded' />
                                <div className="slider_badge bg-primary  d-flex  ">
                                    <h6 className='text-light my-auto mx-auto text-uppercase mw-bold'>{item.name}</h6>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>


            <div className=" mt-3 d-flex gap-3 justify-content-center">
                <button onClick={() => slider.current.slickPrev()} className='testimonialNav rounded-pill px-1 py-1 fw-bold bg-primary text-light border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                <button onClick={() => slider.current.slickNext()} className='testimonialNav rounded-pill px-1 py-1 fw-bold  bg-primary text-light border-0'> <HiOutlineChevronRight className='m-2' /></button>
            </div>
        </div>
    )
}

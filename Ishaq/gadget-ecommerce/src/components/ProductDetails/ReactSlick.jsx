import { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import { data } from './data';
import "./productDetails.scss"
export default function ReactSlick() {
    const slider = useRef();

    // if (testimonial?.length === 0) {
    //     return <Loader isLoading={true} />
    // }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        customPaging: function (i) {
            return (
                <div className="hidden md:block">
                    <img src={data[i]} alt="" className='w-16 h-16 rounded-2xl ' />
                </div>
            );
        },
        dotsClass: "slick-dots slick-thumb custom-slick-dots",



    };

    return (
        <div className="slider_card h-full w-full">
            <div className="relative">
                <div className="relative w-full h-[60vh] mx-auto p-1 border-0  bg-gradient-to-r from-primary via-dark to-secondary rounded-md" >
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className="w-full h-full">
                                    <img src={item} alt="" className='w-full h-[59vh]' />
                                </div>
                            ))
                        }

                    </Slider>
                    <div className="mt-5 flex gap-3 justify-center">
                        <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-primary text-white border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                        <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-primary text-white border-0'> <HiOutlineChevronRight className='m-2' /></button>
                    </div>


                </div>





            </div>
        </div>
    )
}

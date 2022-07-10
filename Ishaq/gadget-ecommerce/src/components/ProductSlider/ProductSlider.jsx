import React, { useRef } from 'react'
import DropDown from './DropDown'
import ProductCard from './ProductCard'
import Slider from 'react-slick';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function ProductSlider() {
    const slider = useRef()

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <>
            <div className="relative container py-16 bg-[#F4F4F6] flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
                        Top Selling
                    </h3>
                    <DropDown />
                </div>
                {/* grid grid-cols-2 md:grid-cols-5 gap-3 */}
                <div className="mt-16 relative w-full">
                    <div className="bg-hero-spiral bg-no-repeat bg-contain absolute -top-[10%] -left-[15%] md:-top-1/4  md:-left-[5%]  w-1/2 h-1/2 md:w-full md:h-full"></div>
                    <Link to="/" className="bg-hero-spiral bg-no-repeat bg-contain absolute -top-10 right-0 flex justify-center items-center   gap-2 text-sm rounded-sm text-primary border border-primary px-3"> <span>See all</span> <HiOutlineChevronRight className='' /> </Link>
                    <Slider ref={c => (slider.current = c)} {...settings}>

                        {
                            [...Array(12)].map((item, index) => {
                                return (
                                    <ProductCard />
                                )
                            })


                        }

                    </Slider>
                    <div className="mt-10 flex gap-3 justify-center">
                        <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-slate-300 hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                        <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-slate-300 hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronRight className='m-2' /></button>
                    </div>

                </div>
            </div>
        </>
    )
}

import { useQuery } from 'react-query';
import axios from 'axios';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
export default function ShopByBrands() {
    const { isLoading, error, data, isFetching } = useQuery("shopByBrands", () => axios.get("/data/brands.json").then(({ data }) => data));
    const slider = useRef()

    const settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
        speed: 500,
        // autoplaySpeed: 5000,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]

    };

    return (
        <div className='bg-[#F4F4F6]'>
            <div className="relative container py-16  flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
                        Shop By Brands
                    </h3>
                </div>
                {/* grid grid-cols-2 md:grid-cols-5 gap-3 */}
                <div className="mt-16 relative w-full">
                {/* <div className="bg-hero-spiral bg-no-repeat bg-contain absolute -top-[10%] -left-[15%] md:-top-1/4  md:-left-[5%]  w-1/2 h-1/2 md:w-full md:h-full"></div> */}
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className="p-2 ">
                                    <Link to="/" className="rounded w-full h-full shadow-md    md:p-12 p-5 flex items-center justify-center" key={index}>
                                        <img src={item.src} alt="" className='rounded w-full' />
                                    </Link>
                                </div>
                            ))
                        }

                    </Slider>
                    <div className="mt-10 flex gap-3 justify-center">
                        <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-slate-300 hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                        <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-slate-300 hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronRight className='m-2' /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

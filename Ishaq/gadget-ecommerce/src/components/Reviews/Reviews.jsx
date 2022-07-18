import axios from 'axios';
import { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import HappyCustomers from './HappyCustomers';
export default function Reviews() {
    const { isLoading, error, data, isFetching } = useQuery("shopByBrands", () => axios.get("/data/brands.json").then(({ data }) => data));
    const slider = useRef()

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


    };


    return (
        <div className='bg-primary '>
            <div className="relative container py-16 md:max-h-96 flex flex-col  md:flex-row gap-3 items-start justify-center md:justify-start flex-wrap overflow-hidden">
                <div className="flex-1 text-white">
                    <p className='text-xs font-bold  text-white flex justify-start items-center bg-hero-vector bg-contain bg-left bg-no-repeat   w-24  h-8  '>Testimonial</p>
                    <h3 className='text-xl font-bold w-2/3'>What customers say about Gadget Shop</h3>
                    <p className='text-xs'>12.6k+ happy customers</p>
                    <HappyCustomers />
                </div>

                <div className="flex-1 w-96 relative">
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className="">
                                    <div className="grid grid-cols-12   grid-rows-6  max-h-96 w-full pr-5">
                                        {/* <div className="chevrons col-start-1 col-end-3 ">

                                        </div> */}
                                        <div className="comment col-start-1 col-end-12 row-start-2 row-end-7 md:col-start-2  md:h-2/3 md:col-end-7 md:row-start-3 md:row-end-7 bg-white p-5 z-20 rounded-md flex flex-col flex-wrap">
                                            <div className="">
                                                <div className="flex justify-between ">
                                                    <div className="">
                                                        <h3 className='font-bold '>Rabbil Hasan</h3>
                                                        <p className='text-xs font-bold text-primary'>Software Engineer</p>
                                                    </div>
                                                    <img src="/images/review/right-quote.svg" alt="" className='w-20 h-8  xl:w-20 xl:h-16 opacity-40' />
                                                    {/* <GoQuote className='rotate-180'/> */}
                                                </div>
                                                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia rem iusto neque eum, ipsa saepe unde architecto aperiam vel culpa!</p>
                                            </div>
                                        </div>
                                        <div className="img z-10 hidden md:block col-start-1 col-end-12 row-start-4 row-end-7  md:col-start-6 md:col-end-10 md:row-start-1 md:row-end-4">
                                            <img src="/images/review/1.jpg" alt="" className='w-full h-full rounded-lg' />
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </Slider >

                    <div className="mt-10 flex gap-3 justify-center absolute -bottom-10 left-28 md:bottom-auto  md:top-0 md:left-20">
                        <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-transparent hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                        <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-transparent hover:bg-emerald-100 duration-150 text-white hover:text-primary border-0'> <HiOutlineChevronRight className='m-2' /></button>
                    </div>


                </div>



            </div>
        </div>
    )
}

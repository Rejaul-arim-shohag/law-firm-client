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
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className='bg-[#F4F4F6]'>
            <div className="relative container pt-10  flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
                        Recommended Brands
                    </h3>
                </div>
                {/* grid grid-cols-2 md:grid-cols-5 gap-3 */}
                <div className="mt-16 relative w-full">
                    {/* <div className="bg-hero-spiral bg-no-repeat bg-contain absolute -top-[10%] -left-[15%] md:-top-1/4  md:-left-[5%]  w-1/2 h-1/2 md:w-full md:h-full"></div> */}
                    <Slider ref={c => (slider.current = c)} {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className="p-2 ">
                                    <Link to="/" className="rounded w-full h-full shadow-md bg-white   md:p-12 p-5 flex items-center justify-center" key={index}>
                                        <div className="flex gap-3">
                                        <img src={item.src} alt="" className=' p-1 h-10 w-10 border rounded-full border-primary' />
                                            <div className="">
                                                <p className='text-xs font-semibold '>{item.title}</p>
                                                <p className='text-xs line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, hic? Tenetur ipsum dolorum necessitatibus officia!</p>
                                            </div>
                                           
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </Slider>
                    <div className="mt-10 flex gap-3 justify-center">
                        <button onClick={() => slider.current.slickPrev()} className=' rounded-full px-1 py-1 fw-bold bg-blue-grey-300 hover:bg-emerald-100 duration-150 text-white  border-0'> <HiOutlineChevronLeft className='m-2' /></button>
                        <button onClick={() => slider.current.slickNext()} className=' rounded-full px-1 py-1 fw-bold  bg-blue-grey-300 hover:bg-emerald-100 duration-150 text-white  border-0'> <HiOutlineChevronRight className='m-2' /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

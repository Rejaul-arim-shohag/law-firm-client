import axios from 'axios';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import "./HeroSlider.scss";
export default function HeroSlider() {
    const slider = useRef();
    const { isLoading, error, data, isFetching } = useQuery("heroSliderImg", () => axios.get("/data/sliderBanner.json").then(({ data }) => data));


    // if (testimonial?.length === 0) {
    //     return <Loader isLoading={true} />
    // }

 

    return (
        <div className="slider_card h-full w-full">
            <div className="relative">
                <div className="w-full flex justify-center items-center" >
                    <div className=" outline outline-offset-8 outline-primary w-72 h-72 md:w-[35rem] md:h-[35rem]   rounded-full p-5 md:p-10">
                        <div className="h-full w-full rounded-full bg-primary md:p-10 p-5 ">
                            <div className="rounded-full w-full -mt-12 md:-mt-24 z-30">
                                <img src="/images/recent/3.png" alt="" className='rounded-3xl w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

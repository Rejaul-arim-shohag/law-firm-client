import { useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./productDetails.scss";
import ProductTabs from "./ProductTabs";
import ReactSlick from "./ReactSlick";
import Specifications from "./Specifications";
export default function ProductDetails() {
    const breadcrumbs = ['Smartphones', 'Apple', 'IPhone 13 Pro Max 128GB']
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="bg-light pt-16 md:pt-0 ">
            <div className="bg-primary opacity-50 w-[35em]  rounded-bl-full h-24 ml-auto hidden md:block"></div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="flex flex-col md:flex-row gap-3  container ">
                <div className="w-full md:w-1/2 relative ">
                    <ReactSlick />
                </div>
                <div className="w-full md:w-1/2 ">
                    <Specifications />
                </div>
            </div>
            <div className=" pb-10 px-5 pt-10 container">
                <h2 className="text-base md:text-3xl font-bold text-center">IPhone 13 Pro Max 128GB</h2>
                <div className="flex border-t-2 pt-3 flex-wrap border-secondary justify-center">
                    <div className=" text-center border-r border-secondary px-5 md:px-10">
                        <p className="text-xs md:text-sm text-primary">Brand</p>
                        <p className="font-bold text-base">Apple</p>
                    </div>
                    <div className=" text-center border-r border-secondary px-5 md:px-10">
                        <p className="text-xs md:text-sm text-primary">Warranty</p>
                        <p className="font-bold text-base">1 Year</p>
                    </div>
                    <div className="  text-center  px-5 md:px-10 ">
                        <p className="text-xs md:text-sm text-primary">Review</p>
                        <p className="font-bold text-base">5 star</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ProductTabs />
            </div>
        </div>
    )
}

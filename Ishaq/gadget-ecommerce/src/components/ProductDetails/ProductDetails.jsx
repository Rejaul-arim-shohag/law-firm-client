import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./productDetails.scss";
import ProductTab from "./ProductTab";
import ReactSlick from "./ReactSlick";
import Specifications from "./Specifications";
export default function ProductDetails() {
    const breadcrumbs = ['Smartphones', 'Apple', 'IPhone 13 Pro Max 128GB']
    return (
        <div className=" bg-slate-100 pt-16 md:pt-0">
            <div className="bg-primary opacity-50 w-[34em] rounded-bl-full h-24 ml-auto hidden md:block"></div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="flex flex-col md:flex-row gap-3  py-16 container ">
                <div className="w-full md:w-1/2 relative ">
                    <ReactSlick />
                </div>
                <div className="w-full md:w-1/2 ">
                    <Specifications />
                </div>
            </div>
            <div className="container pb-10">
                <h2 className="text-3xl font-bold">IPhone 13 Pro Max 128GB</h2>
                <div className="   ">
                    <div className="flex border-t-2 pt-3 max-w-fit border-secondary">
                        <div className=" text-center border-r border-secondary px-10">
                            <p className="text-sm text-primary">Brand</p>
                            <p className="font-bold text-base">Apple</p>
                        </div>
                        <div className=" text-center border-r border-secondary px-10">
                            <p className="text-sm text-primary">Warranty</p>
                            <p className="font-bold text-base">1 Year</p>
                        </div>
                        <div className="  text-center  px-10 ">
                            <p className="text-sm text-primary">Review</p>
                            <p className="font-bold text-base">5 star</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ProductTab />
            </div>
        </div>
    )
}

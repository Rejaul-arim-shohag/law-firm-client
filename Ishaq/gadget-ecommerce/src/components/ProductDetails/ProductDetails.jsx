import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./productDetails.scss";
import ReactSlick from "./ReactSlick";
import Specifications from "./Specifications";
export default function ProductDetails() {
    const breadcrumbs = ['Smartphones', 'Apple', 'IPhone 13 Pro Max 128GB']
    return (
        <div className=" bg-slate-200 pt-16 md:pt-0">
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
        </div>
    )
}

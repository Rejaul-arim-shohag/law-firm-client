import "./productDetails.scss";
import ReactSlick from "./ReactSlick";
import Specifications from "./Specifications";
import { Link } from "react-router-dom"
import { BsHouse } from 'react-icons/bs'
export default function ProductDetails() {



    return (
        <div className=" bg-slate-200">

            <div className="breadcrumbs">
                <div class="flex items-center py-4 overflow-y-auto whitespace-nowrap">
                    <Link to="#" class="text-gray-600 dark:text-gray-200">

                        <BsHouse />
                    </Link>

                    <span class="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <Link to="#" class="text-gray-600 dark:text-gray-200 hover:underline">
                        Account
                    </Link>

                    <span class="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <Link to="#" class="text-gray-600 dark:text-gray-200 hover:underline">
                        Profile
                    </Link>

                    <span class="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <Link to="#" class="text-blue-600 dark:text-blue-400 hover:underline">
                        Settings
                    </Link>
                </div>
            </div>
            <div className="flex gap-3 py-16 container ">
                <div className=" w-1/2 relative ">
                    <ReactSlick />
                </div>
                <div className="w-1/2 ">
                    <Specifications />
                </div>

            </div>
        </div>
    )
}

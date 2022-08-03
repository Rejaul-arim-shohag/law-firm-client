import React, { useEffect, useState } from 'react'
import { GetItemList } from '../../../../api/ApiRequest';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Loader from '../../../../utilities/Loading';
import Pagination from '../../../../utilities/pagination/Pagination';
export default function BrandList() {
    // pageNo, perPage, searchKeyword
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(3);
    const [searchKeyword, setSearchKeyword] = useState(0);
    useEffect(() => {
        GetItemList(pageNo, perPage, searchKeyword);
    }, [])

    let allBrand = useSelector((state) => state.brand.allBrand)
    let total = useSelector((state) => state.brand.total)
    let loading = useSelector((state) => state.loader.loading)

    function handlePageClick(e){
        GetItemList((e.selected + 1), perPage, searchKeyword);
    }

    if (loading) {
        return <Loader isLoading={loading} />;
    }

    return (

        <>
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl mt-10">

                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight">
                            Brands
                        </h2>
                        <div className="text-end">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-grey-300 w-full py-2 px-4 bg-white text-grey-700 placeholder-grey-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal">
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal">
                                            Description
                                        </th>


                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        allBrand?.map((item, i) => (
                                            <tr key={i}>
                                                <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <Link to="/" className="block relative">
                                                                <img alt="profil" src={item.img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                            </Link>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-grey-900 whitespace-no-wrap">
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <p className="text-grey-900 whitespace-no-wrap">
                                                        {item.des}
                                                    </p>
                                                </td>


                                                <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <button className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </button>
                                                </td>
                                                <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <button className="text-indigo-600 hover:text-indigo-900">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                            <div className="px-5 bg-white py-5 flex flex-col   xs:flex-row items-center xs:justify-between ">
                                <Pagination pageNo={pageNo} total={total} handlePageClick={handlePageClick}/>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

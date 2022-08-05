import React, { useEffect, useRef, useState } from 'react'
import { Option, Select } from '@material-tailwind/react'
import { GetItemList } from '../../../../api/ApiRequest';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Pagination from '../../../../utilities/pagination/Pagination';
import Modal from '../../../../utilities/model/Modal';
import CreateBrand from "./CreateBrand"
export default function BrandList() {
    const slug = 'brandList'
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(8);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const searchRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        GetItemList(slug, 1, perPage, searchKeyword);
    }, [slug, perPage, searchKeyword])


    let allBrand = useSelector((state) => state.brand.allBrand)
    let total = useSelector((state) => state.brand.total)

    function handlePageClick(e) {
        let paNo = +e.selected + 1;
        setPageNo(paNo)
        GetItemList(slug, paNo, perPage, searchKeyword);
    }

    function handleAllData() {
        GetItemList(slug, 1, perPage, null);

    }



    function onChangeHandler() {
        if (searchRef.current?.value === "") {
            setSearchKeyword(null)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    return (

        <>
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl mt-10">
                <Modal open={open} setOpen={setOpen} item={<CreateBrand/>}/>
                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight cursor-pointer" onClick={handleAllData}>
                            Brand List <span className='text-xs'>({"Showing " + perPage + " of " + total})</span>
                        </h2>
                        <div className="w-2/3 ">

                            <div className="flex flex-col md:flex-row  w-full md:w-full  md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className="">
                                    <Select
                                        label="Brands per page"
                                        animate={{
                                            mount: { y: 0 },
                                            unmount: { y: 25 },
                                        }}
                                        color="grey"
                                        className='bg-white border-0 ring-0'
                                        onChange={(e) => setPerPage(+e)}
                                    >
                                        <Option value="3">3 PER PAGE</Option>
                                        <Option value='4'>4 PER PAGE</Option>
                                        <Option value='6'>6 PER PAGE</Option>
                                        <Option value='8'>8 PER PAGE</Option>

                                    </Select>
                                </div>

                                <div className=" relative ">
                                    <input type="text" ref={searchRef} onChange={() => onChangeHandler()} className=" rounded-lg border-transparent flex-1 appearance-none border border-grey-300 w-full py-2 px-4 bg-white text-grey-700 placeholder-grey-400 shadow-sm text-base focus:outline-none focus:ring-0 focus:border-transparent" placeholder="name" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-blue-grey-500 focus:outline-none   focus:ring-0" type="button" onClick={() => setSearchKeyword(searchRef.current.value || "0")} >
                                    Search
                                </button>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-blue-grey-500 focus:outline-none   focus:ring-0" type="button" onClick={() => setOpen(s=>!s)} >
                                    Create New Brand
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto min-h-screen">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> No.</th>

                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal">
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal">
                                            Description
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> </th>
                                        {/* <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> </th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        // loading ? <Loader isLoading={loading} /> :
                                        allBrand?.map((item, i) => (
                                            <tr key={i}>
                                                <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <p className="text-grey-900 whitespace-no-wrap">
                                                        {((pageNo - 1) * perPage) + (i + 1)}
                                                    </p>
                                                </td>
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
                                                {/* <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                                                    <button className="text-indigo-600 hover:text-indigo-900">
                                                        Delete
                                                    </button>
                                                </td> */}
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                            <div className="px-5 bg-white py-5 flex flex-col   xs:flex-row items-center xs:justify-between ">
                                <Pagination perPage={perPage} total={total} handlePageClick={handlePageClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

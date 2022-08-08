import { Option, Select } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { DeleteMultipleItem, GetItemList } from '../../../../api/ApiRequest';
import { allChecked, setChecked } from '../../../../redux/state/brand.slice';
import store from '../../../../redux/store/store';
import Modal from '../../../../utilities/model/Modal';
import Pagination from '../../../../utilities/pagination/Pagination';
import BrandItem from './BrandItem';
import CreateBrand from "./CreateBrand";

export default function BrandList() {
    const slug = 'brandList'
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(8);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const searchRef = useRef(null);
    const [openCreate, setOpenCreate] = useState(false);

    useEffect(() => {
        GetItemList(slug, 1, perPage, searchKeyword);
    }, [slug, perPage, searchKeyword])

    let allBrand = useSelector((state) => state.brand.allBrand)
    let total = useSelector((state) => state.brand.total)
    let success = useSelector((state) => state.confetti.success)

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

    const selectRef = useRef();
    function checkBoxChangeHandler(e) {
        if (e.target.name === 'allItems') {
            store.dispatch(allChecked(selectRef.current.checked))

        } else {
            let { checked, id } = e.target
            store.dispatch(setChecked({ id, checked }))
        }


    }
    async function deleteMultipleBrand() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete all!',
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let selectedBrands = allBrand?.map(i => i?.isChecked && i.name).filter(Boolean)
                DeleteMultipleItem(slug, selectedBrands)
                    .then((data) => {
                        if (data.result.deletedCount > 0) {
                            toast.success(`${data.result.deletedCount} brands has been deleted.`)
                            handleAllData();
                        }
                    })
            }
        })


    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    let isAllChecked = allBrand?.filter(i => i?.isChecked !== true).length < 1
    let isAnyChecked = allBrand?.filter(i => i?.isChecked === true).length > 1


    return (

        <>
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl mt-10">
                {/* {success ? <Confetti /> : <></>} */}
                <Modal open={openCreate} setOpen={setOpenCreate} item={<CreateBrand slug={slug} perPage={perPage} />} />

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
                                    <input type="text" ref={searchRef} onChange={() => onChangeHandler()} className="rounded-lg border-transparent flex-1 appearance-none border border-grey-300 w-full py-2 px-4 bg-white text-grey-700 placeholder-grey-400 shadow-sm text-base focus:outline-none focus:ring-0 focus:border-transparent" placeholder="name" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-blue-grey-500 focus:outline-none   focus:ring-0" type="button" onClick={() => setSearchKeyword(searchRef.current.value || "0")} >
                                    Search
                                </button>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-blue-grey-500 focus:outline-none   focus:ring-0" type="button" onClick={() => setOpenCreate(s => !s)} >
                                    Create New Brand
                                </button>
                                {isAnyChecked && <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-blue-grey-500 focus:outline-none   focus:ring-0" type="button" onClick={deleteMultipleBrand} >
                                    Delete Selected
                                </button>}
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto min-h-screen">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white flex items-center border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal">
                                            <label className="flex items-center space-x-3 ">
                                                <input type="checkbox" ref={selectRef} name="allItems" className="form-tick appearance-none bg-white bg-check h-4 w-4 border border-grey-300 rounded-md checked:bg-primary hover:bg-primary  checked:border-transparent focus:ring-0 focus:outline-none" onChange={checkBoxChangeHandler} checked={isAllChecked} />
                                                <span className="text-grey-700 dark:text-white font-normal">
                                                    All
                                                </span>
                                            </label>

                                        </th>
                                        {/* <th scope="col" className="px-5 py-3 bg-white  border-b border-grey-200 text-grey-800  text-left text-sm uppercase font-normal"> No.</th> */}

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
                                        // loading ? <Loader isLoading={loading} /> :
                                        allBrand?.map((item, i) => <BrandItem key={i} i={i} checkBoxChangeHandler={checkBoxChangeHandler} handleAllData={handleAllData} item={item} pageNo={pageNo} perPage={perPage} slug={slug} />)
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

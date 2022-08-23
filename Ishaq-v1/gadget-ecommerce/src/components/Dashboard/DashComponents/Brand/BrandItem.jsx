import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { DeleteItem } from '../../../../api/ApiRequest'
import Modal from '../../../../utilities/model/Modal'
import UpdateBrand from './UpdateBrand'
import {toast} from 'react-toastify'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
export default function BrandItem({ i, item, pageNo, perPage, slug, handleAllData, checkBoxChangeHandler }) {
    const [openEdit, setOpenEdit] = useState(false);

    function deleteHandler(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                DeleteItem(slug, id)
                    .then((data) => {
                        if (data.result.deletedCount > 0) {
                            toast.success(`${item.name} has been deleted.`)
                            handleAllData();
                        }
                    })
            }
        })

    }
    return (
        <tr >
            <Modal open={openEdit} setOpen={setOpenEdit} item={<UpdateBrand slug={slug} perPage={perPage} item={item} setOpen={setOpenEdit}/>} />
            <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                <div className="text-grey-900 whitespace-no-wrap">
                    <label className="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name={item.name} className="form-tick appearance-none bg-white bg-check h-4 w-4 border border-grey-300 rounded-md checked:bg-primary hover:bg-primary  checked:border-transparent focus:ring-0 focus:outline-none" onChange={checkBoxChangeHandler} id={item._id} checked={item?.isChecked || false} />
                        <span className="text-grey-700 dark:text-white font-normal">
                            {((pageNo - 1) * perPage) + (i + 1)}
                        </span>
                    </label>
                </div>
            </td>

            <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="block relative">
                            <img alt="profil" src={item.img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </Link>
                    </div>
                   
                </div>
            </td>
            <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                <div className="flex items-center">
                  
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
                <button className="text-indigo-600 text-2xl hover:text-pink-300" onClick={() => deleteHandler(item._id)}>
                    <AiOutlineDelete/>
                </button>
            </td>
            <td className="px-5 py-5 border-b border-grey-200 bg-white text-sm">
                <button className="text-indigo-600 text-2xl hover:text-pink-300" onClick={() => setOpenEdit(s => !s)}>
                    <AiOutlineEdit/>
                </button>
            </td>

        </tr>
    )
}

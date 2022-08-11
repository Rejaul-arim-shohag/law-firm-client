import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import GetItemList from '../../../../api/GetItemList';
import { privateAxios } from '../../../../api/privateAxios';
import { brandUpdateSchema } from '../../../../Schema/Brand/brandUpdateSchema';
export default function UpdateBrand({ slug, perPage, item, setOpen }) {

    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({ resolver: yupResolver(brandUpdateSchema), defaultValues: { name: item.name, des: item.des }, mode: "onBlur" });
    const [imgFile, setImgFile] = useState(item.img);
    const watchImage = watch("img");
    const convert2base64 = file => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImgFile(reader.result.toString())
        }
        let bro = reader.readAsDataURL(file)
        console.log('bro', bro);
    }
    useEffect(() => {
        if (watchImage?.length > 0) {
            convert2base64(watchImage[0])
        }
    }, [watchImage])
    const navigate = useNavigate();
    const onSubmitHandler = (value) => {
        value.img = imgFile
        privateAxios.put(`/{slug}/${item._id}`, value)
            .then(({ data }) => {
                if (data.success) {
                    toast.success("Brand update successfully!")
                    reset();
                    setImgFile();
                    GetItemList(slug, 1, perPage, null)
                    setOpen(s => !s)
                } else {
                    toast.error(data.result.errors.name.message)
                }

            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (


        <div className="p-8 pt-0 bg-white rounded-lg   w-full">
            <p href="" className="text-xl font-bold text-primary mb-5">Update {slug}</p>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800" placeholder="Name" type="text" id="name" required {...register("name")} />
                </div>
                <div>
                    <label className="sr-only" htmlFor="description">Description</label>
                    <textarea
                        className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                        placeholder="Description"
                        rows="3"
                        id="description"
                        required
                        {...register("des")}
                    ></textarea>
                </div>
                <div className='relative'>
                    <label className="block text-sm font-medium text-slate-500">Image <span className='text-xs'>(Only SVG file up to 100KB)</span></label>
                    <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            {imgFile ? <img src={imgFile} alt="brand" /> : <></>}
                        </span>

                        <label
                            htmlFor='file-upload'
                            className="ml-5 bg-white py-2 px-3  rounded-sm shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
                        >
                            <div className="py-2 px-4 flex justify-center items-center cursor-pointer  bg-primary hover:bg-grey-500 focus:ring-secondary focus:ring-offset-secondary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                    </path>
                                </svg>
                                Upload
                            </div>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"  {...register("img")} />
                        </label>
                    </div>
                    <label className="block text-sm font-medium text-slate-500">{
                        !watchImage || watchImage.length === 0 ? <></> : <strong>{watchImage[0].name}</strong>}</label>

                    {errors?.img && <p className='text-sm'><span className='text-pink-500'>{errors?.img.message}</span></p>}
                </div>

                <div className="mt-4 flex gap-5 justify-end">
                    <button
                        type="submit"
                        className="inline-flex font-medium uppercase items-center  justify-center  px-5 py-2 text-white bg-pink-600 rounded-lg sm:w-auto focus:ring-0"
                        onClick={() => reset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="inline-flex font-medium uppercase items-center  justify-center  px-5 py-2 text-white bg-primary rounded-lg sm:w-auto focus:ring-0"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}



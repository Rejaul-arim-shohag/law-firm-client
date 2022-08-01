import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcDownload } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../../api/privateAxios';
import { brandSchema } from '../../../utilities/Schema/brandSchema';
import { toast } from "react-toastify"
export default function Brand() {
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({ resolver: yupResolver(brandSchema) });
  const [imgFile, setImgFile] = useState();
  const watchImage = watch("img");


  const convert2base64 = file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgFile(reader.result.toString())
    }
    reader.readAsDataURL(file)

  }
  useEffect(() => {
    if (watchImage?.length > 0) {
      convert2base64(watchImage[0])
    }
  }, [watchImage])
  const navigate = useNavigate();
  const onSubmitHandler = (value) => {
    value.img = imgFile
    // console.log('value',value);
    privateAxios.post(`/brand`, value)
      .then(({ data }) => {
        console.log('Brand Result', data);
        if (data.success) {
          toast.success("Brand creates successfully!")
          reset();
          setImgFile();
          // navigate('/dashboard/manageProduct')
        }

      })
  }

  return (


    <section className="">
      <div className="max-w-screen-sm px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
            <p href="" className="text-xl font-bold text-primary mb-5">Create new brand</p>
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
                <label className="block text-sm font-medium text-slate-500">Image</label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {imgFile ? <img src={imgFile} alt="doctor" /> :
                      <>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg></>
                    }
                  </span>

                  <label
                    htmlFor='file-upload'
                    className="ml-5 bg-white py-2 px-3 border  border-gray-300 rounded-sm shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
                  >
                    <div className="flex gap-3">
                      <FcDownload />
                      <span>Upload a image</span>
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
                  Save


                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}



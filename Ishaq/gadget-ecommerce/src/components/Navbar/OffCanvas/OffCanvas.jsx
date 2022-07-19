import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function OffCanvas({ title,items }) {

    return (
        <div className="relative z-40 ">
            <div id={`hs-offcanvas-${title}`} className=" hs-offcanvas hs-offcanvas-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-72 h-full w-full bg-white border-b dark:bg-grey-800 dark:border-grey-700" tabindex="-1">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-grey-700">
                    <h3 className="font-bold text-sm text-grey-800 dark:text-white">
                        {title}
                    </h3>
                    <AiOutlineClose />

                </div>
                <div className="p-4">
                    <nav className="flex justify-center gap-2 flex-wrap items-center bg-white ">
                        {
                            items?.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    className="flex items-center shadow-md justify-center pt-2 w-1/4  rounded"
                                >
                                    <p className='text-primary  text-4xl rounded-full bg-white flex flex-col items-center justify-center'>
                                        <span>{item.icon}</span>
                                        <span className='text-[.65rem] font-bold text-dark'>{item.title}</span>
                                    </p>
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}

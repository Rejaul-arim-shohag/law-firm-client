import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

export default function CustomContainer({ children, title }) {
    const breadcrumbs = [title]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-light pt-20 pb-5 page_title_bg'>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="relative container   flex justify-center flex-col items-center ">
                <div className="flex flex-col items-center justify-center  rounded-full ">
                    <h3 className='font-extrabold md:text-4xl text-xl  text-primary bg-hero-vector flex justify-center items-end  bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center uppercase'>
                        <span>{title}</span> <span className='h-2 w-2 bg-dark'></span>
                    </h3>
                </div>
                <div className="mt-10 relative w-full bg-white p-3 rounded-xl shadow-lg">
                    {children}
                </div>
            </div>
        </div>

    )
}


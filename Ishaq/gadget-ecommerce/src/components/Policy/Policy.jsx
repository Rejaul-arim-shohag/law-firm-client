import React, { useEffect } from 'react'

export default function Policy({ children ,title}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-light'>
            <div className="relative container pt-20 pb-5   flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
                        {title}
                    </h3>
                </div>
                <div className="mt-5 relative w-full bg-white p-3 rounded-xl shadow-lg">

                    {children}


                </div>
            </div>
        </div>

    )
}


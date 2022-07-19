import React, { useEffect } from 'react'

export default function ComingSoonPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-[#F4F4F6]'>
      <div className="relative container pt-10  flex justify-center flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
            Coming Soon
          </h3>
        </div>
        <div className="mt-5 relative w-full">


        </div>
      </div>
    </div>
  )
}

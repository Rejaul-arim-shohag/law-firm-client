import React, { useEffect } from 'react'
import Contact from '../Contact/Contact'
import Reviews from '../Reviews/Reviews'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-light'>
      <div className="flex justify-center pt-20">
        <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
          Contact Us
        </h3>
      </div>
      <div className="mt-5">
        <Contact />
        <div className="">
          <iframe title='LocationMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.070133890102!2d90.35101528865492!3d23.76457835331697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1658414931045!5m2!1sen!2sbd" className='border-0 w-full h-96' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        




      </div>
    </div>

  )
}

import React from 'react'
import HeroSlider from './HeroSlider'

export default function HeroSection() {
  const data = [
    { title: "Happy Customers", state: 1200 },
    { title: "Products", state: 10 },
    { title: "Partners", state: 3 },
    { title: "Likes", state: 423423 }
  ]
  return (
    <div className='bg-secondary'>
      <div className="heroText">
        <h2><span>We are the number one high quality gadget shop in</span> <span>Bangladesh</span></h2>
        <p><span>Are you looking for a budget-friendly and best quality gadget?</span><span>Don't worry we have everything you need?</span> </p>
        <div className="search">
          <input type="text" placeholder='Search product' />
          <button>Search product</button>
        </div>
        <div className="stats">
          <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Total Sales
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      $4.8m
                    </dd>
                  </div>

                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Offical Addons
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                  </div>

                  <div
                    className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Total Addons
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
        <div className="resentProducts">

          <div className="flex items-center -space-x-4 hover:space-x-1">
            <button
              className="z-10 block p-4 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
              type="button"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>

            <button
              className="z-20 block p-4 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
              type="button"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>

            <button
              className="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
              type="button"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="heroSlider">
        {/* <HeroSlider/> */}
        <h2>Product add slider</h2>
      </div>
    </div>
  )
}

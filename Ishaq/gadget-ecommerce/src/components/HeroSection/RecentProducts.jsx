import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
export default function RecentProducts() {
  const [recentProducts, setRecentProducts] = useState([]);
  const { isLoading, error, data, isFetching } = useQuery("recentProducts", () => axios.get("/data/recentProducts.json").then(({ data }) => data));

  useEffect(() => setRecentProducts(data), [data])

  return (
    <div className="resentProducts mt-5">


      <div className="flex items-center -space-x-4 hover:space-x-1">
        {
          data?.map((item, index) => (
            <Link
              to="/" className={`z-10 block  h-16 w-16 text-green-700 transition-all border-2 border-white rounded-full  hover:scale-110 focus:outline-none focus:ring`}
              type="button" key={index}
            >
             <img src={item.src} alt="" className='rounded-full h-full w-full'/> 
            </Link>
          ))
        }


        {/* <button
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
        </button> */}
      </div>
    </div>
  )
}

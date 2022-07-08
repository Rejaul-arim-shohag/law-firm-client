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
              to="/" className={`z-10 block  md:h-16 md:w-16 h-12 w-12 text-green-700 transition-all border-2 border-white rounded-full  hover:scale-110 focus:outline-none focus:ring`}
              type="button" key={index}
            >
             <img src={item.src} alt="" className='rounded-full h-full w-full'/> 
            </Link>
          ))
        }


      </div>
    </div>
  )
}

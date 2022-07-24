import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
export default function OffCanvasCart({ title }) {
    const { isLoading, error, data, isFetching } = useQuery("cartProducts", () => axios.get("/data/cartProducts.json").then(({ data }) => data));
    // if(isLoading){
    //     return <Loader/>
    // }


    return (
        <div className="relative ">
            <div id={`hs-offCanvas-${title}`} className=" hs-offcanvas  hs-offcanvas-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-[35rem]  h-full w-full bg-white border-b dark:bg-grey-800 dark:border-grey-700" >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-grey-700">
                    <h3 className="font-bold text-sm text-grey-800 dark:text-white">
                        {title}
                    </h3>
                    <AiOutlineClose />

                </div>
                <div className=" relative mx-auto">
                    <div className="overflow-y-scroll h-[28rem]">
                        {
                            data?.map((item, i) => <CartItem key={i} item={item} />)
                        }
                    </div>
                    <div className="    ">
                        <div className="cart-footer py-3" >

                            <Link to="/checkout" className="">
                                <button className=" py-3 rounded mb-2 bg-primary w-full text-white text-sm flex justify-around">
                                    <span className="">Proceed to Checkout</span>
                                    <span className="border-l-2 pl-2">${21312}</span>
                                </button>

                            </Link>
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// {/* <div
// key={i}

// className=" shadow-md  pt-2 w-full  rounded"
// >
// <p className='text-primary  text-4xl rounded-full bg-white flex flex-col items-center justify-center'>
//     {/* <span>{item.icon}</span> */}
//     <span className='text-[.65rem] font-bold text-dark'>{name}</span>
//     <span className='text-[.65rem] font-bold text-dark'>{price}</span>
//     <span className='text-[.65rem] font-bold text-dark'>{quantity}</span>
//     <span className='text-[.65rem] font-bold text-dark'>{quantity * price}</span>
// </p>
// </div> */}
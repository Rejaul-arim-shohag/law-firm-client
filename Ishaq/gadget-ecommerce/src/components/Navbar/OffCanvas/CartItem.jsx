import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CartItem({ item }) {
    const { id, src, name, price, brand, quantity } = item

    const [productQtn, setProductQtn] = useState(quantity)

    const onChangeHandler = (value) => {
        if (value >= 0 && value % 1 === 0) {
            setProductQtn(value)
            // dispatch({ type: 'add_product', value: { item, productQtn: +value } })
        }
    }
    const onMinusHandler = () => {
        if (productQtn > 1) {
            setProductQtn((prev) => prev = (+prev) - 1)
            onChangeHandler(`${productQtn - 1}`)
        }
    }
    useEffect(() => {
        setProductQtn(quantity);
    }, [quantity])

    return (
        <div className="gap-2 m-2 flex text-dark p-3 shadow-md rounded">
            <div className="h-32 w-1/3">
                <img src={src} alt="product" className='h-full w-full rounded-md' />
            </div>
            <div className="w-2/3  space-y-2">
                <p className='text-xs   font-semibold line-clamp-2'>{name}</p>
                <p className='text-xs   font-semibold flex justify-between'><span>Color:</span> <span>Black</span></p>
                <div className='text-xs   font-semibold flex justify-between items-center'>
                    <span className='w-1/2'>Quantity:</span>
                    <div className=" flex w-1/2">
                        <button className="w-1/3  " title="Quantity Minus" onClick={() => onMinusHandler()}><FaMinus className='mx-auto' /></button>
                        <input onChange={(e) => onChangeHandler(e.target.value)} autoComplete="off" className="  w-1/3 text-xs text-center border-0" title="Quantity Number" type="number" name="quantity" value={productQtn} />
                        <button className="w-1/3 " title="Quantity Plus" ><FaPlus className='mx-auto' /></button>
                    </div>
                </div>
                <p className='text-xs   font-semibold flex justify-between'><span>Subtotal:</span> <span className='text-primary'>BDT. 130</span></p>
                <button className='text-xs  bg-red-500 text-white p-2 rounded-md ml-auto  font-semibold flex justify-between'><FaTrashAlt className='' /></button>

            </div>

        </div>
    )
}


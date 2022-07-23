import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartItem({ deleteHandler, item }) {
    const { id, src, name, price, brand, quantity } = item
    // const { state, dispatch } = useAppContext();
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
        <li className="cart-item">
            
            <div className="cart-media   overflow-hidden" style={{ height: "100px", width: "50%" }}>
                <Link to="/" className='relative  h-full w-full  all_center ' >
                    <img src={src} alt="product"  className='h-full w-full'/>
                </Link>
                <button className="cart-delete " onClick={() => deleteHandler(id)}>
                    <i className="  border-2"> <FaTrashAlt className='mx-auto mt-1'/></i>
                </button>
            </div>
            <div className="cart-info-group">
                <div className="cart-info ">
                    <h6><Link to="/details" className='text-sm font-semibold'>{name}</Link></h6>
                    <p className='text-xs opacity-50 font-semibold'>Unit - BDT.{price}</p>
                </div>
                <div className="cart-action-group ">
                    <div className="product-action justify-between items-center  gap-3">
                        <button className="action-minus" title="Quantity Minus" onClick={() => onMinusHandler()}>
                            <i className=""> <FaMinus /></i>
                        </button>
                        <input onChange={(e) => onChangeHandler(e.target.value)} autoComplete="off" className="action-input border-0 text-center" title="Quantity Number" type="number" name="quantity" value={productQtn} />
                        <button className="action-plus" title="Quantity Plus" >
                            <i className=""> <FaPlus /></i>
                        </button>
                    </div>
                    <h6 className='text-xs'>${price * productQtn}</h6>
                </div>
            </div>
        </li>
    )
}

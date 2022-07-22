import React, { useEffect, useState } from 'react';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image'
import { useAppContext } from '../../context/AppContext';

export default function CartItem({ deleteHandler, item }) {
    const { serial, img, name, price, brand, quantity } = item
    const { state, dispatch } = useAppContext();
    const [productQtn, setProductQtn] = useState(quantity)

    const onChangeHandler = (value) => {
        if (value >= 0 && value % 1 === 0) {
            setProductQtn(value)
            dispatch({ type: 'add_product', value: { item, productQtn: +value } })
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
            <div className="cart-media" style={{ height: "100px",width:"50%" }}>
                <a href="" className='position-relative d-block' style={{ height: "100px" }}>
                    <Image src={img} alt="product" layout='fill' />
                </a>
                <button className="cart-delete" onClick={() => deleteHandler(serial)}>
                    <i className="far fa-trash-alt"> <FaTrashAlt /></i>
                </button>
            </div>
            <div className="cart-info-group">
                <div className="cart-info">
                    <h6><a href="product-single.html">{name}</a></h6>
                    <p>Unit Price - ${price}</p>
                </div>
                <div className="cart-action-group">
                    <div className="product-action">
                        <button className="action-minus" title="Quantity Minus" onClick={() => onMinusHandler()}>
                            <i className=""> <FaMinus /></i>
                        </button>
                        <input onChange={(e) => onChangeHandler(e.target.value)} autoComplete="off" className="action-input" title="Quantity Number" type="number" name="quantity" value={productQtn} />
                        <button className="action-plus" title="Quantity Plus" onClick={() => dispatch({ type: 'add_product', value:{ item, productQtn : 1 } })}>
                            <i className=""> <FaPlus /></i>
                        </button>
                    </div>
                    <h6>${price * productQtn}</h6>
                </div>
            </div>
        </li>
    )
}

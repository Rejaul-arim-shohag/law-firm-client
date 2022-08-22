import React, { useState } from 'react';    
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './cart.scss'
import CartItem from './CartItem';

// let total = 0
function CartSidebar({ show, setShowCartSideBar }) {
    const [showCoupon, setShowCoupon] = useState(false);
    // const { state, dispatch, total, disDiv } = useAppContext();
    const { isLoading, error, data, isFetching } = useQuery("cartProducts", () => axios.get("/data/cartProducts.json").then(({ data }) => data));

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     setData([...state])

    // }, [state])



    const deleteHandler = (serial) => {
        // dispatch({ type: 'delete_product', value: serial })
        // setData([...state])

    }

    return (
        <>
            <aside className={`cart-sidebar ${show && 'active'} bg-white z-[60]`}>
                <div className="cart-header">
                    <div className="cart-total"><span>total item (10) </span></div>
                    <button className="cart-close" onClick={() => setShowCartSideBar(prev => !prev)}>
                        <span className="icofont-close  all_center shadow"> <FaTimes className=''/> </span>
                    </button>
                </div>
                <ul className="cart-list">
                    {

                        data?.map((item, index) => <CartItem key={index} item={item} deleteHandler={deleteHandler} />)
                    }

                </ul>
                <div className="cart-footer py-3" >

                    <Link to="/checkout" className="">
                        <button className="cart-checkout-btn mb-2 bg-primary w-full">
                            <span className="checkout-label">Proceed to Checkout</span>
                            <span className="checkout-price">${0}</span>
                        </button>

                    </Link>
                    <div  >
                        <button className="cart-checkout-btn w-full " style={false ? { pointerEvents: "none", opacity: ".5", background: "red" } : { background: "red" }}>
                            <span className="checkout-label font-semibold">Clear All Items</span>
                            {/* <span className="checkout-price">${0}</span> */}
                        </button>

                    </div>

                </div>



            </aside>
        </>
    )
}
export default CartSidebar;
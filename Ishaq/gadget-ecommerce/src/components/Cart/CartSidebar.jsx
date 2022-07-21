import React, { useState } from 'react';    
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './cart.scss'

// let total = 0
function CartSidebar({ show, setShowCartSideBar }) {
    const [showCoupon, setShowCoupon] = useState(false);
    // const { state, dispatch, total, disDiv } = useAppContext();
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     setData([...state])

    // }, [state])



    // const deleteHandler = (serial) => {
    //     dispatch({ type: 'delete_product', value: serial })
    //     setData([...state])

    // }

    return (
        <>
            <aside className={`cart-sidebar ${show && 'active'} bg-white`}>
                <div className="cart-header">
                    <div className="cart-total"><span>total item </span></div>
                    <button className="cart-close" onClick={() => setShowCartSideBar(prev => !prev)}><i className="icofont-close">
                        <FaTimes />
                    </i></button>
                </div>
                <ul className="cart-list">
                    {

                        // data?.map((item, index) => <CartItem key={index} item={item} deleteHandler={deleteHandler} />)
                    }

                </ul>
                <div className="cart-footer py-3" >

                    <Link to="/checkout" className="">
                        <button className="cart-checkout-btn mb-2">
                            <span className="checkout-label">Proceed to Checkout</span>
                            <span className="checkout-price">${0}</span>
                        </button>

                    </Link>
                    <div  >
                        <button className="cart-checkout-btn" style={0 === 0 ? { pointerEvents: "none", opacity: ".5", background: "red" } : { background: "red" }}>
                            <span className="checkout-label">Clear All Items</span>
                            <span className="checkout-price">${0}</span>
                        </button>

                    </div>

                </div>



            </aside>
        </>
    )
}
export default CartSidebar;
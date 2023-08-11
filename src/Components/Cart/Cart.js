import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from '../Navbar/Navbar'
import EmptyCart from "../../Constant/EmptyCart";
import { ToastContainer } from 'react-toastify';
import { NavLink } from "react-router-dom";
import CartValue from "./CartValue";
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'


const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const [totalPrice, setTotalPrice] = useState(0);
    // console.log(state);

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            count += i.price * i.quantity;
            setTotalPrice(count);
        })
    }, [state])

    return (
        <>
            <Navbar />
            {state.length === 0 ? <EmptyCart /> :
                <div className="cart-product">
                    <div className="cart-item">
                        <div className="cart-wrap">
                            {state.map((item, idx) => {
                                return (
                                    <>
                                        <CartValue item={item} idx={idx} />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cart-btn">
                        <div className="btn-left-side">
                            <NavLink to={'/buynow'} style={{ textDecoration: "none" }}>
                                <button style={{ width: "100%" }} className="button -salmon">Place Order</button>
                            </NavLink>
                        </div>
                        <div className="btn-right-side">
                            <p>Total Price :${totalPrice}</p>
                        </div>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    );
};

export default Cart;

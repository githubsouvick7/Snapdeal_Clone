import React from 'react'
import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="empty">
            <div className="empty-cart">
                <div className="empty-cont">
                    <img width={300} src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
                </div>
                <div className="text-empty">
                    <p>Your Cart is Empty !</p>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "150px" }} className="button -salmon">Shop Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart
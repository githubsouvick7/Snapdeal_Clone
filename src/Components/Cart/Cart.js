import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from 'react-icons/ai'
import { addCart, decreaseitem, delCart, increaseitem, remcart, removecart } from "../../Redux/action";
import Navbar from '../Navbar/Navbar'
import EmptyCart from "../../Constant/EmptyCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
import { NavLink } from "react-router-dom";


const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(state)

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            count += i.price * i.quantity;
            setTotalPrice(count);
        })
    }, [state])


    const removeCart = (state) => {
        dispatch(removecart(state));
    }
    const increaseCart = (state) => {
        dispatch(increaseitem(state));
    }
    const decreaseCart = (state) => {
        dispatch(decreaseitem(state));
    }

    const total = state.reduce((total, item) => {
        return (total + (item.price * 3) * item.quantity);
    }, 0);

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
                                        <div key={idx} className="onecomp">
                                            <img src={item.image} alt="snapdeal" style={{ marginRight: "15px" }} />
                                            <div className="desccomp">
                                                <p>{item.title}</p>
                                                {/* <p>Rating : {item.rating.rate}</p> */}
                                                <select name="Size" id="size">
                                                    <option value="">Select Size</option>
                                                    <option value="">S</option>
                                                    <option value="">M</option>
                                                    <option value="">L</option>
                                                    <option value="">XL</option>
                                                    <option value="">XXL</option>
                                                </select>
                                                <p className='my-2'><i class="fa-solid fa-rotate-left"></i> 14 days return available</p>
                                                <p className='my-2'>Price : ${item.price} X {item.quantity} Item</p>
                                            </div>
                                            <div className="count">
                                                <button onClick={() => increaseCart(item)}>+</button>
                                                <span style={{ fontSize: '20px' }}>{item.quantity}</span>
                                                <button onClick={() => {
                                                    if (item.quantity > 1) {
                                                        decreaseCart(item)
                                                    } else {
                                                        removeCart(item)
                                                    }
                                                }}>-</button>
                                            </div>
                                            <h1 className='dele' onClick={() => removeCart(item)}>
                                                <AiFillDelete />
                                            </h1>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cart-btn">
                        <div className="btn-left-side">
                            <NavLink to={'/buynow'} style={{ textDecoration: "none" }}>
                                <button style={{ width: "350px" }} className="button -salmon">Place Order</button>
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

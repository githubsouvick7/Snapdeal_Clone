import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { decreaseitem, increaseitem, removecart } from '../../Redux/action';
import { AiFillDelete } from 'react-icons/ai';

const CartValue = ({ item, idx }) => {
    const dispatch = useDispatch();

    const removeCart = (state) => {
        dispatch(removecart(state));
    }
    const increaseCart = (state) => {
        dispatch(increaseitem(state));
    }
    const decreaseCart = (state) => {
        dispatch(decreaseitem(state));
    }

    return (
        <>
            <div key={idx} className="onecomp">
                <img src={item.image} alt="snapdeal" style={{ marginRight: "15px" }} />
                <div className="cart-discomp">
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
                        <h1 className='dele' onClick={() => removeCart(item)}>
                            <AiFillDelete />
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartValue
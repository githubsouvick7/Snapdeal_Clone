import React, { useEffect, useState } from 'react'
import { FiTag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payments = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [gstPrice, setgstPrice] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [click, setClick] = useState(false);
    const state = useSelector((state) => state.handleCart);

    useEffect(() => {
        let count = 0;
        let gst = 0
        state.map((i) => {
            count += i.price * i.quantity;
            gst = (count * 18) / 100;
            setFinalPrice(count + gst);
            setTotalPrice(count);
            setgstPrice(gst);

        })
    }, [state])

    useEffect(() => {
        const coupon2 = finalPrice - finalPrice * 18 / 100;
        setCoupon(coupon2.toFixed(2))
    }, [state]);
    const handleClickCoupon = () => {
        setClick(true)
    }

    return (
        <div className='payment'>
            <h2>Payments Details</h2>
            <div className="coupon">
                <p><FiTag /> Apply Coupons</p>
                <p>15% Instant Discount on OneCard Credit Cards on a min spend of $100</p>
                <p>*Click on Apply button below to update the price</p>
            </div>
            <div className="paydetails">
                <div className="mrp">
                    <p>Total Product</p>
                    <p className='p1'>{state.length}</p>
                </div>
                <div className="mrp">
                    <p>MRP</p>
                    <p className='p1'>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="mrp">
                    <p>18% GST</p>
                    <p className='p1'>${gstPrice.toFixed(2)}</p>
                </div>
                <div className="mrp">
                    <p>Delivery Charge</p>
                    <p className='p1'>FREE</p>
                </div>
                <div className="Final">
                    <p>Total Price</p>
                    <p className='p1' style={{ color: "red" }}>${finalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Payments;
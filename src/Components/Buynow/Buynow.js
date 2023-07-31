import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import Addresspage from '../Addresspage/Addresspage'
import Payments from '../../Constant/Payment'
import './Buynow.css'
import Model from '../../Constant/Model'

const Buynow = () => {

    return (
        <>
            <Navbar />
            <div className="pages">
                <div className="address-page">
                    <Addresspage />
                </div>
                <div className="payment-page">
                    <Payments />
                </div>
            </div>
        </>
    )
}

export default Buynow;
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Allstyle.css'

const Model = ({ setShow }) => {
    return (
        <>
            <div className="model-wrapper"></div>
            <div className="model">
                <img className='zoom-in-out-box' src="https://png.pngtree.com/png-vector/20220521/ourlarge/pngtree-checkmark-right-icon-tick-circle-png-image_4647418.png" alt="image" width={120} />
                <div className='all-div'>
                    <h4>Your order Placed Successfully.</h4>
                    <NavLink style={{ textDecoration: "none" }} to='/'>
                        <button style={{ width: "200px" }} className='button -salmon' onClick={() => setShow(false)}>Go Home</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}


export default Model;

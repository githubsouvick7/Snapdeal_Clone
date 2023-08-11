import React, { createContext, useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Loading from '../Loading/Loading';
import './AllProduct.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/action';
import StarRatings from "react-star-ratings";
import Timer from '../../Constant/Timer';
import { useAuth0 } from '@auth0/auth0-react';
import { CartContext } from '../../Context/ContextApi';
import Productpage from './Productpage';


const AllProduct = () => {
    const [loading, setLoading] = useState(false);
    const { filter, data, setFilter, setData } = useContext(CartContext);

    const ShowProducts = () => {
        return (
            <>
                <div className="Product">
                    {
                        data.length > 0 ? data.map((product, index) => {
                            return (
                                <>
                                    <Productpage product={product} key={index} />
                                    <hr />
                                </>
                            );
                        }) : filter.map((product, index) => {
                            return (
                                <>
                                    <Productpage product={product} key={index} />
                                    <hr />
                                </>
                            );
                        })
                    }
                </div>
            </>
        );
    };


    return (
        <>
            <Navbar />
            <div className="timer">
                <Timer initialTimeInSeconds={60000} />
            </div>
            <div className="view">
                <div className="product-item">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};


export default AllProduct
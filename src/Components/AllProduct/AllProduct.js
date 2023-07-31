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
    const [selectedOption, setSelectedOption] = useState("All");
    const [sortOrder, setSortOrder] = useState();
    const { isAuthenticated } = useAuth0();
    const { filter, data, setFilter, setData } = useContext(CartContext);

    const filterProduct = (cat) => {
        const updatedList = filter.filter((x) => x.category === cat);
        setFilter(updatedList);
        setData(updatedList);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    const handleSortChange = (event) => {
        const selectedOrder = event.target.value;
        sortData(selectedOrder);
    };

    const sortData = (order) => {
        const sortedData =
            order === 'lowToHigh'
                ? [...filter].sort((a, b) => a.price - b.price)
                : [...filter].sort((a, b) => b.price - a.price);

        setFilter(sortedData);
        setSortOrder(order);
    };

    const handleClear = () => {
        setFilter(data);
        setSelectedOption('');
        setSortOrder('');
    }

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
                {/* <div className="sidebar">
                    <h3 className='clear' onClick={handleClear}>Clear</h3>
                    <div className="sortproduct">
                        <h3>Product category</h3>
                        <div className="radio">
                            <input
                                id='1'
                                type="radio"
                                value="men's clothing"
                                checked={selectedOption === "men's clothing"}
                                onChange={handleOptionChange}
                                onClick={() => filterProduct("men's clothing")}
                            />
                            <label htmlFor='1'>Men's clothing</label>
                        </div>
                        <div className="radio">
                            <input
                                id='2'
                                type="radio"
                                value="women's clothing"
                                checked={selectedOption === "women's clothing"}
                                onChange={handleOptionChange}
                                onClick={() => filterProduct("women's clothing")}
                            />
                            <label htmlFor='2'>Women's clothing</label>
                        </div>
                        <div className="radio">
                            <input
                                id='3'
                                type="radio"
                                value="jewelery"
                                checked={selectedOption === "jewelery"}
                                onChange={handleOptionChange}
                                onClick={() => filterProduct("jewelery")}
                            />
                            <label htmlFor='3'>Jewelery</label>
                        </div>
                        <div className="radio">
                            <input
                                id='4'
                                type="radio"
                                value="electronics"
                                checked={selectedOption === 'electronics'}
                                onChange={handleOptionChange}
                                onClick={() => filterProduct("electronics")}
                            />
                            <label htmlFor='4'>Electronics</label>
                        </div>
                    </div>
                    <div className="sortprice">
                        <h3>Price</h3>
                        <div className="radio">
                            <input
                                id='5'
                                type="radio"
                                value="lowToHigh"
                                checked={sortOrder === 'lowToHigh'}
                                onChange={handleSortChange}
                            />
                            <label htmlFor='5'>Low to High</label>
                        </div>
                        <div className="radio">
                            <input
                                id='6'
                                type="radio"
                                value="highToLow"
                                checked={sortOrder === 'highToLow'}
                                onChange={handleSortChange}
                            />
                            <label htmlFor='6'>High to Low</label>
                        </div>
                    </div>
                </div> */}
                <div className="product-item">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};


export default AllProduct
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addCart } from '../../Redux/action';
import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";
import './Product.css'
import Loading from '../Loading/Loading';

const api = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth0();
    var qty = "quantity";
    var val = 1;
    product[qty] = val;

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    const getProduct = (api) => {
        setLoading(true);
        fetch(api)
            .then((response) => response.json())
            .then(data => { setProduct(data) })
        setLoading(false);
    };

    useEffect(() => {
        getProduct(`${api}/${id}`);
    }, []);



    const ShowProduct = () => {
        const added = (i) => {
            addProduct(i);
            toast.success("Added . . .", {
                position: "top-center",
                autoClose: 2000,
                theme: "light",
            })
        }
        return (
            <>
                <section className="comp-section" key={product.id}>
                    <div className="comp-card">
                        <figure>
                            <img src={product.image} className='listimage' alt='image' />
                        </figure>
                        <div className="card-content">
                            <div className="alldisc">
                                <h2 className="title">{product.title}</h2>
                                <h6 className="card-text">About :-{product.description}</h6>
                                <h1 className="card-text">Price ${product.price}</h1>
                                <p className="card-text">About :-{product.description}</p>
                            </div>
                            <div className="allbtn">
                                {
                                    isAuthenticated ? (<>
                                        {
                                            state.some((i) => i.id === product.id) ? (
                                                <NavLink style={{ textDecoration: "none" }} to={'/cart'}>
                                                    <button className="button -salmon">
                                                        Go to Cart <i class="fa-solid fa-xmark"></i>
                                                    </button>
                                                </NavLink>
                                            ) : (
                                                <button className="button -salmon" onClick={added}>
                                                    Add To Cart <i class="fa-solid fa-cart-shopping"></i>
                                                </button>
                                            )
                                        }
                                    </>) : (
                                        <button className='button -salmon'
                                            onClick={() => {
                                                toast.warning('Please Login ', {
                                                    position: "top-center",
                                                    autoClose: 2000,
                                                    theme: "light",
                                                })
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    )
                                }
                                <NavLink to="/" style={{ textDecoration: "none" }}>
                                    <button className="button -salmon"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section >
                <ToastContainer />
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product
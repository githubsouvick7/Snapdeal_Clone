import React from 'react'
import { NavLink } from 'react-router-dom'


const Catagory = () => {
    return (
        <>
            <div className="catagory">
                <div className="catagory-item">
                    <img src="https://cdn.trendhunterstatic.com/thumbs/menswear-ecommerce.jpeg?auto=webp" height={200} width={300} alt="" />
                    <h3>All</h3>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "250px" }} className='button -salmon'>
                            Checkout
                        </button>
                    </NavLink>
                </div>
                <div className="catagory-item">
                    <img src="https://www.ecommerce-mag.com/hubfs/h-ng-nguy-n-256537-unsplash%20%281%29.jpg" height={200} width={300} alt="" />
                    <h3>women's</h3>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "250px" }} className='button -salmon'>
                            Checkout
                        </button>
                    </NavLink>
                </div>
                <div className="catagory-item">
                    <img src="https://cdn.trendhunterstatic.com/thumbs/menswear-ecommerce.jpeg?auto=webp" height={200} width={300} alt="" />
                    <h3>Man's</h3>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "250px" }} className='button -salmon'>
                            Checkout
                        </button>
                    </NavLink>
                </div>
                <div className="catagory-item">
                    <img src="https://www.shift4shop.com/2015/images/sell-online/digital-downloads/jewelrytop.jpg" height={200} width={300} alt="" />
                    <h3>Jewelery</h3>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "250px" }} className='button -salmon'>
                            Checkout
                        </button>
                    </NavLink>
                </div>
                <div className="catagory-item">
                    <img src="https://pagefly.io/cdn/shop/articles/website_design.png?v=1646237170" height={200} width={300} alt="" />
                    <h3>Electronics</h3>
                    <NavLink to={'/allproduct'} style={{ textDecoration: "none" }}>
                        <button style={{ width: "250px" }} className='button -salmon'>
                            Checkout
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Catagory
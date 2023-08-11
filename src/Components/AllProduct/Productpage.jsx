import React from 'react'
import StarRatings from 'react-star-ratings'
import { NavLink } from 'react-router-dom';

const Productpage = ({ product }) => {
    let num = Math.round(product.rating.rate);
    return (
        <div className="item" key={product.id}>
            <div className="img">
                <NavLink to={`/product/${product.id}`}>
                    <img src={product.image} alt="" />
                </NavLink>
            </div>
            <div className="info">
                <p>{product.title}</p>
                <h4>$ {product.price}</h4>
                <div className="rating">
                    <StarRatings
                        rating={num}
                        starRatedColor="gold"
                        starDimension="16px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                    />
                    <p style={{ fontSize: "14px" }}>{product.rating.count} Ratings</p>
                </div>
                <div className="check">
                    <NavLink style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
                        <button className='button -salmon'>
                            Check out
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Productpage
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FiUserPlus } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../../Context/ContextApi";

const Header = () => {
    const [click, setClick] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const handleClick = () => setClick(!click);
    const state = useSelector((state) => state.handleCart);
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const context = useContext(CartContext);
    // console.log(context);
    const navigation = useNavigate();


    const handleSearchQuary = () => {
        navigation('/allproduct')
        const filterProduct = context.filter.filter(
            (ele) =>
                ele.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                ele.description.toLowerCase().includes(searchValue.toLowerCase())
        );
        console.log(filterProduct)
        context.setData(filterProduct);
    }

    return (
        <div className="header" >
            <div className="logo-container">
                <NavLink to={'/'}>
                    <img className="logowidth" src="https://download.logo.wine/logo/Snapdeal/Snapdeal-Logo.wine.png" alt="" />
                </NavLink>
            </div>
            <div className="logo-nav">
                <div className={click ? "nav-options active" : "nav-options"}>
                    <div className="option-one">
                        <input type="text"
                            placeholder="Search here"
                            className="input"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <div>
                            <button onClick={handleSearchQuary} className="button -salmon">Search</button>
                        </div>
                    </div>
                    <div className="option-three">
                        <ul>
                            <NavLink to={"/"} activeClassName="abc" >
                                <li>Home</li>
                            </NavLink>
                            <NavLink to={'/allproduct'} activeClassName="abc" >
                                <li>Products</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="option mobile-option" >
                        {
                            isAuthenticated ?
                                (<>
                                    <button className='button -salmon' onClick={() =>
                                        logout({ logoutParams: { returnTo: window.location.origin } })
                                    }>
                                        <FiUserPlus /><p style={{ marginLeft: "10px" }}>Logout</p>
                                    </button>
                                    <div className="setuser-data">
                                        <img src={user.picture} width={50} alt='user' />
                                    </div>
                                </>) :
                                (<button className='button -salmon' onClick={() => loginWithRedirect()} >
                                    <FiUserPlus /><p style={{ marginLeft: "10px" }}>Login</p>
                                </button>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="signin-up">
                {
                    isAuthenticated ?
                        (<>
                            <NavLink to={'/cart'} style={{ textDecoration: "none" }}>
                                <button className="set-cart">
                                    <p style={{ marginRight: "10px" }}>Cart</p>
                                    <img width={25} src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
                                    <div className="p">{state.length}</div>
                                </button>
                            </NavLink>
                            <button className='button -salmon' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                <FiUserPlus /><p style={{ marginLeft: "10px" }}>Logout</p>
                            </button>
                            <div className="setuser-data">
                                <img src={user.picture} alt='user' />
                            </div>
                        </>) :
                        (<button className='button -salmon' onClick={() => loginWithRedirect()} >
                            <FiUserPlus /><p style={{ marginLeft: "10px" }}>Login</p>
                        </button>
                        )
                }
            </div>

            <div className="mobile-menu">
                {
                    isAuthenticated ? <>
                        <div className="menu-item">
                            <button className="set-cart1">
                                <NavLink to={'/cart'} style={{ textDecoration: "none" }}>
                                    <img width={25} src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
                                    <div className="p">{state.length}</div>
                                </NavLink>
                            </button>
                        </div>
                        <div style={{ marginTop: '8px' }} onClick={handleClick}>
                            {click ? (
                                <RxCross2 />
                            ) : (
                                <HiOutlineBars3BottomRight />
                            )}
                        </div>
                    </> : <>
                        <div style={{ marginTop: '8px' }} onClick={handleClick}>
                            {click ? (
                                <RxCross2 />
                            ) : (
                                <HiOutlineBars3BottomRight />
                            )}
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;


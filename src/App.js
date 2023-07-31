import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Buynow from './Components/Buynow/Buynow';
import Home from './Components/Home/Home';
import AllProduct from './Components/AllProduct/AllProduct';
import Product from './Components/Product/Product';
import './App.css';
import './Constant/Allstyle.css'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/buyNow' element={<Buynow />} />
          <Route path='/allproduct' element={<AllProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
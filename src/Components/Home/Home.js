import React from 'react'
import Navbar from '../Navbar/Navbar'
import Salesbanner from '../Banner/Salesbanner'
import Timer from '../../Constant/Timer'
import './Home.css'
import Catagory from '../Banner/Catagory'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="timer">
                <Timer initialTimeInSeconds={60000} />
            </div>
            <div className="banner">
                <Salesbanner />
            </div>
            <Catagory />
            <Footer />
        </>
    )
}

export default Home
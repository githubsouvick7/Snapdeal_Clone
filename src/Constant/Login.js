import React, { useEffect, useState } from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { auth, Provider } from '../Fitebase/Firebase'
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, Provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('Email'));
    })

    return (
        <div>
            <button className='custom-btn btn' onClick={handleClick}>
                <FiUserPlus /><p style={{ marginLeft: "10px" }}>Login</p>
            </button>
        </div>
    )
}

export default Login
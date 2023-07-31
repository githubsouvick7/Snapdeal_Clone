import React, { useEffect, useState } from 'react';
import './Address.css';
import AddressData from './AddressData';
import Model from '../../Constant/Model';

const Addresspage = () => {
    const [show, setShow] = useState(false);
    const [address, setAddress] = useState({
        name: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
    });
    const [allAddress, setAlladdress] = useState([]);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("task") || "[]");
        setAlladdress(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(allAddress));
    }, [allAddress]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlladdress([...allAddress, address]);
        localStorage.setItem('address', JSON.stringify(address));
        setAddress({
            name: '',
            phone: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
        });
        setShow(true);
    };

    const handleDelete = (index) => {
        const storageDelete = allAddress.filter((task, i) => i !== index);
        localStorage.setItem('address', JSON.stringify(storageDelete));
        setAlladdress(storageDelete);
    }

    const handleSelectTask = (index) => {
        setSelectedTaskIndex(index);
    };

    // const handleClick = () => {
    //     setShow(true);
    // }
    return (
        <div>
            <h2>Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="name"
                        value={address.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    phone number:
                    <input
                        type="number"
                        name="phone"
                        value={address.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Street Address:
                    <input
                        type="text"
                        name="streetAddress"
                        value={address.streetAddress}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Zip Code:
                    <input
                        type="text"
                        name="zipCode"
                        value={address.zipCode}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type='submit' style={{ width: "350px" }} className='button -salmon'>Pay & Order Now </button>
                {show && <Model setShow={setShow} />}
            </form>
            {
                allAddress.map((item, index) => {
                    return <AddressData
                        key={index}
                        task={item}
                        selected={index === selectedTaskIndex}
                        onSelect={() => handleSelectTask(index)}
                        onDelete={() => handleDelete(index)}
                    />
                })
            }
        </div>
    );
};

export default Addresspage;

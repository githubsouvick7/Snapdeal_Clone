import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const Context = (props) => {
    const [filter, setFilter] = useState([]);
    const [data, setData] = useState([]);

    const api = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    const getProduct = () => {
        fetch(api)
            .then(responce => responce.json())
            .then(data => {
                data.forEach(element => {
                    element.quantity = 1;
                });
                setData(data);
                setFilter(data);
                console.log(data);
            })
    }
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <CartContext.Provider value={{ filter, data, setData, setFilter }}>
            {props.children}
        </CartContext.Provider>
    )
}
// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    };
};

// For Delete Item From Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};

// For remove all items from Cart
export const removecart = (product) => {
    return {
        type: "REMOVEALL",
        payload: product
    };
};

// For Increase item on cart
export const increaseitem = (product) => {
    return {
        type: "INCREASE",
        payload: product
    };
};

// For decrease item on cart
export const decreaseitem = (product) => {
    return {
        type: "DECREASE",
        payload: product
    };
};
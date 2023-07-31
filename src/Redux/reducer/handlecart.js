const cart = JSON.parse(localStorage.getItem('cart')) || [];

const handleCart = (state = cart, action) => {

    switch (action.type) {
        case "ADDITEM":
            const tempstate = state.filter((item) => action.payload.id === item.id);
            if (tempstate.length > 0) {
                return state;
            } else {
                return [...state, action.payload];
            }

        case "DECREASE":
            const tempstate2 = state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
            localStorage.setItem("cart", JSON.stringify(tempstate2));
            return tempstate2;

        case "INCREASE":
            const tempstate1 = state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            localStorage.setItem("cart", JSON.stringify(tempstate1));
            return tempstate1;


        case "REMOVEITEM":
            const tempstate3 = state.filter(
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem("cart", JSON.stringify(tempstate3));
            return tempstate3;


        case "REMOVEALL":
            localStorage.clear();
            return [];


        default: return state;
    }
}


export default handleCart;








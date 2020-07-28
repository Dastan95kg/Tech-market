import axios from 'axios';
import {
    ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCTS_TO_LOCAL_STORAGE_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_SUCCESS
} from './actions';

const initialState = {
    cart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return !state.cart.includes(action.payload)
                ? { ...state, cart: [...state.cart, action.payload] }
                : { ...state, cart: [...state.cart] };
        case 'ADD_PRODUCTS_TO_LOCAL_STORAGE':
            localStorage.setItem('cart', JSON.stringify([...state.cart]));
            return {
                ...state,
                cart: [...state.cart]
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(id => id !== action.payload)
            };
        default:
            return state;
    }
};

// Thunk creators
export const addProductToCart = (id) => async (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART_SUCCESS(id));
    dispatch(ADD_PRODUCTS_TO_LOCAL_STORAGE_SUCCESS());
};

export const getProductsFromBasket = () => async () => {
    const storageData = await JSON.parse(localStorage.getItem('cart'));
    const response = await axios
        .post('https://electronics-admin.herokuapp.com/cart-products', storageData);
};

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART_SUCCESS(id));
    const products = JSON.parse(localStorage.getItem('cart'));
    const newProducts = products.filter(product => product !== id);
    localStorage.setItem('cart', JSON.stringify(newProducts));
};

export default reducer;
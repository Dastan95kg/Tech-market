import axios from 'axios';
import { ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCTS_TO_LOCAL_STORAGE_SUCCESS } from './actions';

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
        default:
            return state;
    }
};

// Thunk creators
export const addProductToCart = (id) => async (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART_SUCCESS(id));
    dispatch(ADD_PRODUCTS_TO_LOCAL_STORAGE_SUCCESS());
};

export const getProductsFromBasket = () => async (dispatch) => {
    const storageData = await JSON.parse(localStorage.getItem('cart'));
    const response = await axios.post('https://electronics-admin.herokuapp.com/products_from_basket', storageData);
    console.log(response);
};

export default reducer;
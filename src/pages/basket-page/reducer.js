import axios from 'axios';
import {
    ADD_PRODUCT_TO_LOCAL_STORAGE_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    UPDATE_PRODUCTS_IN_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_SUCCESS
} from './actions';

const initialState = {
    cart: [],
    tempCart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_LOCAL_STORAGE': {
            const storageData = JSON.parse(localStorage.getItem('cart'));
            if (!storageData) {
                localStorage.setItem('cart', JSON.stringify([action.payload]));
            } else {
                if (!storageData.includes(action.payload)) {
                    let storageDataCopy = null;
                    storageDataCopy = [...storageData, action.payload];
                    localStorage.setItem('cart', JSON.stringify(storageDataCopy));
                }
                return state;
            }
            return state;
        }
        case 'ADD_PRODUCT_TO_CART':
            if (!state.tempCart.includes(action.payload)) {
                return {
                    ...state,
                    tempCart: [...state.tempCart, action.payload]
                };
            }
            return {
                ...state,
                tempCart: [...state.tempCart]
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                cart: { ...state.cart, products_list: state.cart.products_list.filter(product => product._id !== action.payload) },
                tempCart: state.tempCart.filter(productId => productId !== action.payload)
            };
        case 'UPDATE_PRODUCTS_IN_CART':
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const addProductToCart = (id) => async (dispatch) => {
    dispatch(ADD_PRODUCT_TO_LOCAL_STORAGE_SUCCESS(id));
    dispatch(ADD_PRODUCT_TO_CART_SUCCESS(id));
};

export const getProductsFromBasket = () => async (dispatch) => {
    const storageData = await JSON.parse(localStorage.getItem('cart'));
    const body = { products: storageData };
    const response = await axios
        .post('https://electronics-admin.herokuapp.com/cart-products', body);
    if (response.status === 200) {
        dispatch(UPDATE_PRODUCTS_IN_CART_SUCCESS(response.data));
    }
};

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART_SUCCESS(id));
    const products = JSON.parse(localStorage.getItem('cart'));
    const newProducts = products.filter(product => product !== id);
    localStorage.setItem('cart', JSON.stringify(newProducts));
};

export default reducer;
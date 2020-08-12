import axios from 'axios';
import {
    ADD_PRODUCT_TO_LOCAL_STORAGE_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    UPDATE_PRODUCTS_IN_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_SUCCESS,
    INCREASE_PRODUCT_QUANTITY_SUCCESS,
    DECREASE_PRODUCT_QUANTITY_SUCCESS,
    SYNC_LOCAL_STORAGE_WITH_STATE_SUCCESS
} from './actions';
import { TOGGLE_IS_LOADING_SUCCESS } from '../search-page/actions';

const initialState = {
    cart: [],
    tempCart: [],
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_LOCAL_STORAGE': {
            const storageData = JSON.parse(localStorage.getItem('cart'));
            if (!storageData) {
                localStorage.setItem('cart', JSON.stringify([action.payload]));
            } else {
                const storageId = storageData.map(item => item.id);
                if (!storageId.includes(action.payload.id)) {
                    let storageDataCopy = null;
                    storageDataCopy = [...storageData, action.payload];
                    localStorage.setItem('cart', JSON.stringify(storageDataCopy));
                }
                return state;
            }
            return state;
        }
        case 'ADD_PRODUCT_TO_CART': {
            const cart = state.tempCart && state.tempCart.map(item => item.id);
            if (!cart.includes(action.payload.id)) {
                return {
                    ...state,
                    tempCart: [...state.tempCart, action.payload]
                };
            }
            return {
                ...state,
                tempCart: [...state.tempCart]
            };
        }
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                cart: { ...state.cart, products_list: state.cart.products_list.filter(product => product._id !== action.payload) },
                tempCart: state.tempCart.filter(product => product.id !== action.payload)
            };
        case 'UPDATE_PRODUCTS_IN_CART':
            return {
                ...state,
                cart: action.payload
            };
        case 'INCREASE_PRODUCT_QUANTITY': {
            const tempProducts = state.tempCart.map(product => {
                if (product.id === action.payload) {
                    // eslint-disable-next-line no-param-reassign
                    product = { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            return {
                ...state,
                tempCart: tempProducts
            };
        }
        case 'DECREASE_PRODUCT_QUANTITY': {
            const tempProducts = state.tempCart.map(product => {
                if (product.id === action.payload) {
                    if (product.quantity > 1) {
                        // eslint-disable-next-line no-param-reassign
                        product = { ...product, quantity: product.quantity - 1 };
                    }
                }
                return product;
            });
            return {
                ...state,
                tempCart: tempProducts
            };
        }
        case 'SYNC_LOCAL_STORAGE_WITH_STATE': {
            const storageData = JSON.parse(localStorage.getItem('cart'));
            return {
                ...state,
                tempCart: storageData
            };
        }
        case 'TOGGLE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const addProductToCart = (obj) => (dispatch) => {
    dispatch(ADD_PRODUCT_TO_LOCAL_STORAGE_SUCCESS(obj));
    dispatch(ADD_PRODUCT_TO_CART_SUCCESS(obj));
};

export const getProductsFromBasket = () => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const storageData = await JSON.parse(localStorage.getItem('cart'));
    const body = { products: storageData };
    const response = await axios
        .post('https://electronics-admin.herokuapp.com/cart-products', body);
    if (response.status === 200) {
        dispatch(UPDATE_PRODUCTS_IN_CART_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART_SUCCESS(id));
    const products = JSON.parse(localStorage.getItem('cart'));
    const newProducts = products.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newProducts));
};

export const increaseProductQuantity = (id) => (dispatch) => {
    dispatch(INCREASE_PRODUCT_QUANTITY_SUCCESS(id));
};

export const decreaseProductQuantity = (id) => (dispatch) => {
    dispatch(DECREASE_PRODUCT_QUANTITY_SUCCESS(id));
};

export const syncLocalStorageWithState = () => (dispatch) => {
    dispatch(SYNC_LOCAL_STORAGE_WITH_STATE_SUCCESS());
};

export default reducer;
import axios from 'axios';
import {
    GET_ALL_PRODUCTS_SUCCESS,
    INCREASE_PRODUCT_AMOUNT_SUCCESS,
    DECREASE_PRODUCT_AMOUNT_SUCCESS
} from './actions';

const initialState = {
    products: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'INCREASE_PRODUCT_AMOUNT': {
            const tempProducts = state.products.map(product => {
                if (product._id === action.payload) {
                    // eslint-disable-next-line no-param-reassign
                    product = { ...product, orders_count: product.orders_count + 1 };
                }
                return product;
            });
            return {
                ...state,
                products: tempProducts
            };
        }
        case 'DECREASE_PRODUCT_AMOUNT': {
            const tempProducts = state.products.map(product => {
                if (product._id === action.payload) {
                    if (product.orders_count > 0) {
                        // eslint-disable-next-line no-param-reassign
                        product = { ...product, orders_count: product.orders_count - 1 };
                    }
                }
                return product;
            });
            return {
                ...state,
                products: tempProducts
            };
        }
        default:
            return state;
    }
};

// Thunk creators
export const getAllProducts = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/all-products');
    if (response.status === 200) {
        dispatch(GET_ALL_PRODUCTS_SUCCESS(response.data.products));
    }
};

export const increaseProductAmount = (id) => (dispatch) => {
    dispatch(INCREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export const decreaseProductAmount = (id) => (dispatch) => {
    dispatch(DECREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export default reducer;
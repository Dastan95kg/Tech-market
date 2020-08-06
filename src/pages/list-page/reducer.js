import axios from 'axios';
import {
    INCREASE_PRODUCT_AMOUNT_SUCCESS,
    DECREASE_PRODUCT_AMOUNT_SUCCESS,
    GET_ALL_CATEGORY_PRODUCTS_SUCCESS,
    GET_ALL_SUBCATEGORY_PRODUCTS_SUCCESS
} from './actions';

const initialState = {
    products: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORY_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'GET_ALL_SUBCATEGORY_PRODUCTS':
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
export const getAllCategoryProducts = (id, page = 1) => async (dispatch) => {
    const response = await axios
        .get(`https://electronics-admin.herokuapp.com/all-products/?category=${id}&page=${page}&limit=2`);
    if (response.status === 200) {
        dispatch(GET_ALL_CATEGORY_PRODUCTS_SUCCESS(response.data));
    }
};

export const getAllSubcategoryProducts = (id, page = 1) => async (dispatch) => {
    const response = await axios
        .get(`https://electronics-admin.herokuapp.com/all-products/?subcategory=${id}&page=${page}`);
    if (response.status === 200) {
        dispatch(GET_ALL_SUBCATEGORY_PRODUCTS_SUCCESS(response.data));
    }
};

export const increaseProductAmount = (id) => (dispatch) => {
    dispatch(INCREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export const decreaseProductAmount = (id) => (dispatch) => {
    dispatch(DECREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export default reducer;
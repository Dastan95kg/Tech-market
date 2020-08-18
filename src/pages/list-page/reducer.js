import axios from 'axios';
import {
    INCREASE_PRODUCT_AMOUNT_SUCCESS,
    DECREASE_PRODUCT_AMOUNT_SUCCESS,
    GET_ALL_CATEGORY_PRODUCTS_SUCCESS,
    GET_ALL_SUBCATEGORY_PRODUCTS_SUCCESS,
    SORTING_BY_INCREASING_PRICE_SUCCESS,
    SORTING_BY_DECREASING_PRICE_SUCCESS,
    SORTING_BY_POPULAR_SUCCESS,
    SORTING_BY_NAME_AZ_SUCCESS,
    SORTING_BY_NAME_ZA_SUCCESS,
    SORTING_BY_DEFAULT_SUCCESS,
    FILTER_PRODUCTS_SUCCESS
} from './actions';
import { TOGGLE_IS_LOADING_SUCCESS } from '../search-page/actions';
import { removeObjectProperty } from '../../utils/helpers';

const initialState = {
    products: '',
    isLoading: false
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
        case 'SORTING_BY':
            return {
                ...state,
                products: action.payload
            };
        case 'FILTER_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getAllCategoryProducts = (id, page = 1, limit = 4) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios
        .get(`https://electronics-admin.herokuapp.com/all-products/?category=${id}&page=${page}&limit=${limit}`);
    if (response.status === 200) {
        dispatch(GET_ALL_CATEGORY_PRODUCTS_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const getAllSubcategoryProducts = (id, page = 1) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios
        .get(`https://electronics-admin.herokuapp.com/all-products/?subcategory=${id}&page=${page}&limit=4`);
    if (response.status === 200) {
        dispatch(GET_ALL_SUBCATEGORY_PRODUCTS_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const increaseProductAmount = (id) => (dispatch) => {
    dispatch(INCREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export const decreaseProductAmount = (id) => (dispatch) => {
    dispatch(DECREASE_PRODUCT_AMOUNT_SUCCESS(id));
};

export const sortingByField = (obj, id, name) => async (dispatch) => {
    if (obj.field === 'price') {
        if (obj.sorting === -1) {
            const response = await axios
                .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}&field=${obj.field}`);
            if (response.status === 200) {
                dispatch(SORTING_BY_INCREASING_PRICE_SUCCESS(response.data));
            }
        }
        if (obj.sorting === 1) {
            const response = await axios
                .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}&field=${obj.field}&sorting=${1}`);
            if (response.status === 200) {
                dispatch(SORTING_BY_DECREASING_PRICE_SUCCESS(response.data));
            }
        }
    } else if (obj.field === 'orders_count') {
        const response = await axios
            .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}&field=${obj.field}`);
        if (response.status === 200) {
            dispatch(SORTING_BY_POPULAR_SUCCESS(response.data));
        }
    } else if (obj.field === 'name') {
        if (obj.sorting === 1) {
            const response = await axios
                .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}&field=${obj.field}&sorting=-1`);
            if (response.status === 200) {
                dispatch(SORTING_BY_NAME_AZ_SUCCESS(response.data));
            }
        }
        if (obj.sorting === -1) {
            const response = await axios
                .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}&field=${obj.field}&sorting=1`);
            if (response.status === 200) {
                dispatch(SORTING_BY_NAME_ZA_SUCCESS(response.data));
            }
        }
    } else {
        const response = await axios
            .get(`https://electronics-admin.herokuapp.com/all-products/?${name}=${id}`);
        if (response.status === 200) {
            dispatch(SORTING_BY_DEFAULT_SUCCESS(response.data));
        }
    }
};

export const filterProducts = (body) => async (dispatch) => {
    const newBody = {
        ...body,
        filters: removeObjectProperty(body.filters)
    };
    const response = await axios.post('https://electronics-admin.herokuapp.com/filter', newBody);
    if (response.status === 200) {
        dispatch(FILTER_PRODUCTS_SUCCESS(response.data));
    }
};

export default reducer;
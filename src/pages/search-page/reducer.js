import axios from 'axios';
import { orderBy } from 'lodash';
import {
    GET_ORDER_STATUS_SUCCESS,
    CLEAR_ORDER_STATUS_SUCCESS,
    FIND_PRODUCTS_SUCCESS,
    CLEAR_SEARCH_RESULTS_SUCCESS,
    TOGGLE_IS_LOADING_SUCCESS,
    SORT_PRODUCTS_SUCCESS
} from './actions';

const initialState = {
    orderStatus: '',
    searchProducts: '',
    redirect: false,
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER_STATUS':
            return {
                ...state,
                orderStatus: action.payload
            };
        case 'CLEAR_ORDER_STATUS':
            return {
                ...state,
                orderStatus: ''
            };
        case 'FIND_PRODUCTS':
            return {
                ...state,
                searchProducts: action.payload,
                redirect: true
            };
        case 'CLEAR_SEARCH_RESULTS':
            return {
                ...state,
                searchProducts: '',
                redirect: false
            };
        case 'TOGGLE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'SORT_PRODUCTS':
            if (action.payload === 'По алфавиту А-Я') {
                return {
                    ...state,
                    searchProducts: {
                        ...state.searchProducts,
                        results: orderBy(state.searchProducts.results, 'name', 'asc')
                    }
                };
            } if (action.payload === 'По алфавиту Я-А') {
                return {
                    ...state,
                    searchProducts: {
                        ...state.searchProducts,
                        results: orderBy(state.searchProducts.results, 'name', 'desc')
                    }
                };
            } if (action.payload === 'По возрастанию цены') {
                return {
                    ...state,
                    searchProducts: {
                        ...state.searchProducts,
                        results: orderBy(state.searchProducts.results, 'price', 'asc')
                    }
                };
            } if (action.payload === 'По убыванию цены') {
                return {
                    ...state,
                    searchProducts: {
                        ...state.searchProducts,
                        results: orderBy(state.searchProducts.results, 'price', 'desc')
                    }
                };
            }
            return state;
        default:
            return state;
    }
};

// Thunk creators
export const findTrackingCode = (code) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios.get(`https://electronics-admin.herokuapp.com/getorder/?tracking_code=${code}`);
    if (response.status === 200) {
        dispatch(GET_ORDER_STATUS_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const clearOrderStatus = () => (dispatch) => {
    dispatch(CLEAR_ORDER_STATUS_SUCCESS());
};

export const findProducts = (body) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios.post('https://electronics-admin.herokuapp.com/search', body);
    if (response.status === 200) {
        dispatch(FIND_PRODUCTS_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const clearSearchResults = () => (dispatch) => {
    dispatch(CLEAR_SEARCH_RESULTS_SUCCESS());
};

export const sortProducts = (value) => (dispatch) => {
    dispatch(SORT_PRODUCTS_SUCCESS(value));
};

export default reducer;
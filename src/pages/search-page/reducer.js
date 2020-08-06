import axios from 'axios';
import {
    GET_ORDER_STATUS_SUCCESS,
    CLEAR_ORDER_STATUS_SUCCESS,
    FIND_PRODUCTS_SUCCESS,
    CLEAR_SEARCH_RESULTS_SUCCESS
} from './actions';

const initialState = {
    orderStatus: '',
    searchProducts: '',
    redirect: false
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
        default:
            return state;
    }
};

// Thunk creators
export const findTrackingCode = (code) => async (dispatch) => {
    const response = await axios.get(`https://electronics-admin.herokuapp.com/getorder/?tracking_code=${code}`);
    if (response.status === 200) {
        dispatch(GET_ORDER_STATUS_SUCCESS(response.data));
    }
};

export const clearOrderStatus = () => (dispatch) => {
    dispatch(CLEAR_ORDER_STATUS_SUCCESS());
};

export const findProducts = (body) => async (dispatch) => {
    const response = await axios.post('https://electronics-admin.herokuapp.com/search', body);
    if (response.status === 200) {
        dispatch(FIND_PRODUCTS_SUCCESS(response.data));
    }
};

export const clearSearchResults = () => (dispatch) => {
    dispatch(CLEAR_SEARCH_RESULTS_SUCCESS());
};

export default reducer;
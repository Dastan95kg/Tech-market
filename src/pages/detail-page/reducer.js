import axios from 'axios';
import {
    GET_PRODUCT_DETAIL_SUCCESS, SUBMIT_FEEDBACK_SUCCESS, CLEAR_FEEDBACK_SUCCESS,
    TOGGLE_MODAL_SUCCESS, SHOW_ERROR_MESSAGE_SUCCESS
} from './actions';
import { TOGGLE_IS_LOADING_SUCCESS } from '../search-page/actions';

const initialState = {
    product: '',
    feedback: '',
    isLoading: false,
    isModalOn: '',
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state,
                product: action.payload
            };
        case 'SUBMIT_FEEDBACK':
            return {
                ...state,
                feedback: action.payload
            };
        case 'CLEAR_FEEDBACK':
            return {
                ...state,
                feedback: ''
            };
        case 'TOGGLE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'TOGGLE_MODAL':
            return {
                ...state,
                isModalOn: action.payload
            };
        case 'SHOW_ERROR_MESSAGE':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getProductDetail = (id) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios.get(`https://electronics-admin.herokuapp.com/product-detail?id=${id}`);
    if (response.status === 200) {
        dispatch(GET_PRODUCT_DETAIL_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export const submitFeedback = (body) => async (dispatch) => {
    const response = await axios.post('https://electronics-admin.herokuapp.com/newfeedback', body);
    if (response.status === 200) {
        if (response.data.feedback) {
            dispatch(TOGGLE_MODAL_SUCCESS(true));
        } else {
            dispatch(SHOW_ERROR_MESSAGE_SUCCESS(true));
        }
        dispatch(SUBMIT_FEEDBACK_SUCCESS(response.data));
    }
};

export const closeFeedbackModal = () => (dispatch) => {
    dispatch(TOGGLE_MODAL_SUCCESS(false));
};

export const clearFeedback = () => (dispatch) => {
    dispatch(CLEAR_FEEDBACK_SUCCESS());
    dispatch(TOGGLE_MODAL_SUCCESS(''));
    dispatch(SHOW_ERROR_MESSAGE_SUCCESS(false));
};

export default reducer;
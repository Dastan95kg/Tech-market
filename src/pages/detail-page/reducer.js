import axios from 'axios';
import {
    GET_PRODUCT_DETAIL_SUCCESS, SUBMIT_FEEDBACK_SUCCESS, CLEAR_FEEDBACK_SUCCESS
} from './actions';

const initialState = {
    product: '',
    feedback: ''
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
        default:
            return state;
    }
};

// Thunk creators
export const getProductDetail = (id) => async (dispatch) => {
    const response = await axios.get(`https://electronics-admin.herokuapp.com/product-detail?id=${id}`);
    if (response.status === 200) {
        dispatch(GET_PRODUCT_DETAIL_SUCCESS(response.data));
    }
};

export const submitFeedback = (body) => async (dispatch) => {
    const response = await axios.post('https://electronics-admin.herokuapp.com/newfeedback', body);
    dispatch(SUBMIT_FEEDBACK_SUCCESS(response.data));
};

export const clearFeedback = () => (dispatch) => {
    dispatch(CLEAR_FEEDBACK_SUCCESS());
};

export default reducer;
import axios from 'axios';
import { GET_ORDER_STATUS_SUCCESS, CLEAR_ORDER_STATUS_SUCCESS } from './actions';

const initialState = {
    orderStatus: ''
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

export default reducer;
import axios from 'axios';
import { DISPATCH_NEW_ORDER_SUCCESS, CHECK_PROMO_CODE_SUCCESS } from './actions';
import { TOGGLE_IS_LOADING_SUCCESS } from '../search-page/actions';

const initialValues = {
    order: '',
    promo_code: '',
    isLoading: false
};

const reducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'DISPATCH_NEW_ORDER':
            return {
                ...state,
                order: action.payload
            };
        case 'CHECK_PROMO_CODE':
            return {
                ...state,
                promo_code: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const dispatchNewOrder = (data) => async (dispatch) => {
    const response = await axios.post('https://electronics-admin.herokuapp.com/neworder', data);
    if (response.status === 200) {
        dispatch(DISPATCH_NEW_ORDER_SUCCESS(response.data));
    }
};

export const checkPromoCode = (code) => async (dispatch) => {
    dispatch(TOGGLE_IS_LOADING_SUCCESS(true));
    const response = await axios.get(`https://electronics-admin.herokuapp.com/check-promo/?code=${code}`);
    if (response.status === 200) {
        dispatch(CHECK_PROMO_CODE_SUCCESS(response.data));
    }
    dispatch(TOGGLE_IS_LOADING_SUCCESS(false));
};

export default reducer;
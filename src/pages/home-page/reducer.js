import axios from 'axios';
import { GET_PROMOTION_PRODUCTS_SUCCESS } from './actions';

const initialState = {
    promotionProducts: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROMOTION_PRODUCTS':
            return {
                ...state, promotionProducts: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getPromotionProducts = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/all-products/?promotion=true');
    if (response.status === 200) {
        dispatch(GET_PROMOTION_PRODUCTS_SUCCESS(response.data));
    }
};

export default homeReducer;
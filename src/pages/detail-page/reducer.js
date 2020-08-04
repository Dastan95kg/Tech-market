import axios from 'axios';
import { GET_PRODUCT_DETAIL_SUCCESS } from './actions';

const initialState = {
    product: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state,
                product: action.payload
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

export default reducer;
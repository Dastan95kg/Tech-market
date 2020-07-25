import axios from 'axios';
import { GET_ALL_PRODUCTS_SUCCESS } from './actions';

const initialState = {
    products: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getAllProducts = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/all-products/1');
    if (response.status === 200) {
        dispatch(GET_ALL_PRODUCTS_SUCCESS(response.data.products));
    }
};

export default reducer;
import axios from 'axios';
import { GET_CATEGORIES_SUCCESS } from './actions';

const initialState = {
    categories: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getCategories = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/all-categories');
    if (response.status === 200) {
        dispatch(GET_CATEGORIES_SUCCESS(response.data.categories));
    }
};

export default reducer;
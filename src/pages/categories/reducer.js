import axios from 'axios';
import { GET_CATEGORIES_SUCCESS, GET_SUBCATEGORIES_SUCCESS } from './actions';

const initialState = {
    categories: '',
    subcategories: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'GET_ALL_SUBCATEGORIES':
            return {
                ...state,
                subcategories: action.payload
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

export const getSubcategories = () => async (dispatch) => {
    const response = await axios.get('http://demo9551996.mockable.io/subcategories');
    dispatch(GET_SUBCATEGORIES_SUCCESS(response.data));
};

export default reducer;
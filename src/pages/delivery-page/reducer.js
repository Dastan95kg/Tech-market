import axios from 'axios';
import { GET_FAQ_SUCCESS } from './actions';

const initialState = {
    faq: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FAQ':
            return {
                ...state,
                faq: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getQuestions = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/get-faq');
    if (response.status === 200) {
        dispatch(GET_FAQ_SUCCESS(response.data.faq));
    }
};

export default reducer;
import axios from 'axios';
import GET_ABOUT_US_INFO_SUCCESS from './actions';

const initialState = {
    aboutUs: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ABOUT_US_INFO':
            return {
                ...state,
                aboutUs: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getAboutUsInfo = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/get-about-us');
    if (response.status === 200) {
        dispatch(GET_ABOUT_US_INFO_SUCCESS(response.data.about_us));
    }
};

export default reducer;
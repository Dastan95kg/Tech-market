import axios from 'axios';
import { GET_PHOTOS_SUCCESS } from './actions';

const initialState = {
    photos: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return {
                ...state,
                photos: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getPhotos = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/slider-photos');
    if (response.status === 200) {
        dispatch(GET_PHOTOS_SUCCESS(response.data.photos));
    }
};

export default reducer;
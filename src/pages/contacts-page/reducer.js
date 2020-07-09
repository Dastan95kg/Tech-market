import axios from 'axios';
import { GET_CONTACTS_SUCCESS } from './actions';

const initialState = {
    contacts: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const getContacts = () => async (dispatch) => {
    const response = await axios.get('https://electronics-admin.herokuapp.com/get-contact-info');
    if (response.status === 200) {
        dispatch(GET_CONTACTS_SUCCESS(response.data.contact_info));
    }
};

export default reducer;
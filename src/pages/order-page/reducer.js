import axios from 'axios';
import { DISPATCH_NEW_ORDER_SUCCESS } from './actions';

const initialValues = {
    order: ''
};

const reducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'DISPATCH_NEW_ORDER':
            return {
                ...state,
                order: action.payload
            };
        default:
            return state;
    }
};

// Thunk creators
export const dispatchNewOrder = (data) => async (dispatch) => {
    const response = await axios.post('https://electronics-admin.herokuapp.com/neworder', data);
    console.log(response.data);
    if (response.status === 200) {
        dispatch(DISPATCH_NEW_ORDER_SUCCESS(response.data));
    }
};

export default reducer;
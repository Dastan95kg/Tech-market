import { DISPATCH_NEW_ORDER_SUCCESS } from './actions';
import axios from 'axios';

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
    console.log(data);
    const response = axios.post('https://electronics-admin.herokuapp.com/neworder', data);
    alert('Заказ успешно оформлен. Пожалуйста, проверьте вашу почту.');
    window.location.href = '/';
};

export default reducer;
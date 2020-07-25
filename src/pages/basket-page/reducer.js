import { ADD_PRODUCT_TO_CART_SUCCESS } from './actions';

const initialState = {
    cart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return !state.cart.includes(action.payload)
                ? { ...state, cart: [...state.cart, action.payload] }
                : { ...state, cart: [...state.cart] };
        default:
            return state;
    }
};

// Thunk creators
export const addProductToCart = (id) => async (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART_SUCCESS(id));
};

export default reducer;
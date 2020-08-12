import { TOGGLE_CHECKBOXES_SUCCESS, FILTER_PRODUCTS_SUCCESS } from './actions';

const initialState = {
    subcategory: '',
    filters: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOXES': {
            const currentIndex = state.filters.indexOf(action.payload);
            const newChecked = [...state.filters];
            if (currentIndex === -1) {
                newChecked.push(action.payload);
            } else {
                newChecked.splice(currentIndex, 1);
            }
            return {
                ...state,
                filters: newChecked
            };
        }
        case 'FILTER_PRODUCTS': {
            // const body = {
            //     subcategory: 
            // };
            // axios.post('https://electronics-admin.herokuapp.com/filter', body);
        }
        default:
            return state;
    }
};

// Thunk creators
export const toggleCheckboxes = (value) => (dispatch) => {
    dispatch(TOGGLE_CHECKBOXES_SUCCESS(value));
};

export const filterProducts = () => (dispatch) => {
    dispatch(FILTER_PRODUCTS_SUCCESS());
};

export default reducer;
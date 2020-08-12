import { TOGGLE_CHECKBOXES_SUCCESS, CLEAR_FILTERS_SUCCESS } from './actions';

const initialState = {
    subcategory: '',
    filters: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOXES': {
            const filterKeys = Object.keys(state.filters);
            if (!filterKeys.includes(action.payload.title)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.payload.title]: [action.payload.value]
                    }
                };
            }
            let list = state.filters[action.payload.title];
            if (!list.includes(action.payload.value)) {
                list = [...list, action.payload.value];
            } else {
                list = list.filter(item => item !== action.payload.value);
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.title]: list
                }
            };
        }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {}
            };
        default:
            return state;
    }
};

// Thunk creators
export const toggleCheckboxes = (obj) => (dispatch) => {
    dispatch(TOGGLE_CHECKBOXES_SUCCESS(obj));
};

export const clearFilters = () => (dispatch) => {
    dispatch(CLEAR_FILTERS_SUCCESS());
};

export default reducer;
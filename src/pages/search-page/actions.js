export const GET_ORDER_STATUS_SUCCESS = (data) => ({
    type: 'GET_ORDER_STATUS', payload: data
});

export const CLEAR_ORDER_STATUS_SUCCESS = () => ({
    type: 'CLEAR_ORDER_STATUS'
});

export const FIND_PRODUCTS_SUCCESS = (data) => ({
    type: 'FIND_PRODUCTS', payload: data
});

export const CLEAR_SEARCH_RESULTS_SUCCESS = () => ({
    type: 'CLEAR_SEARCH_RESULTS'
});

export const TOGGLE_IS_LOADING_SUCCESS = (isLoading) => ({
    type: 'TOGGLE_IS_LOADING', payload: isLoading
});

export const SORT_PRODUCTS_SUCCESS = (value) => ({
    type: 'SORT_PRODUCTS', payload: value
});
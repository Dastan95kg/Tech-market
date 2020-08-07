export const ADD_PRODUCT_TO_LOCAL_STORAGE_SUCCESS = (id) => ({
    type: 'ADD_PRODUCT_TO_LOCAL_STORAGE', payload: id
});

export const ADD_PRODUCT_TO_CART_SUCCESS = (id) => ({
    type: 'ADD_PRODUCT_TO_CART', payload: id
});

export const REMOVE_PRODUCT_FROM_CART_SUCCESS = (id) => ({
    type: 'REMOVE_PRODUCT_FROM_CART', payload: id
});

export const UPDATE_PRODUCTS_IN_CART_SUCCESS = (products) => ({
    type: 'UPDATE_PRODUCTS_IN_CART', payload: products
});

export const INCREASE_PRODUCT_QUANTITY_SUCCESS = (id) => ({
    type: 'INCREASE_PRODUCT_QUANTITY', payload: id
});

export const DECREASE_PRODUCT_QUANTITY_SUCCESS = (id) => ({
    type: 'DECREASE_PRODUCT_QUANTITY', payload: id
});

export const SYNC_LOCAL_STORAGE_WITH_STATE_SUCCESS = () => ({
    type: 'SYNC_LOCAL_STORAGE_WITH_STATE'
});
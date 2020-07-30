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
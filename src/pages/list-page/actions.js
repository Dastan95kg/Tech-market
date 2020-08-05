export const GET_ALL_CATEGORY_PRODUCTS_SUCCESS = (products) => ({
    type: 'GET_ALL_CATEGORY_PRODUCTS', payload: products
});

export const GET_ALL_SUBCATEGORY_PRODUCTS_SUCCESS = (products) => ({
    type: 'GET_ALL_SUBCATEGORY_PRODUCTS', payload: products
});

export const INCREASE_PRODUCT_AMOUNT_SUCCESS = (id) => ({
    type: 'INCREASE_PRODUCT_AMOUNT', payload: id
});

export const DECREASE_PRODUCT_AMOUNT_SUCCESS = (id) => ({
    type: 'DECREASE_PRODUCT_AMOUNT', payload: id
});
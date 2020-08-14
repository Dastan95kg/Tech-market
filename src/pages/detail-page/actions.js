export const GET_PRODUCT_DETAIL_SUCCESS = (id) => ({
    type: 'GET_PRODUCT_DETAIL', payload: id
});

export const SUBMIT_FEEDBACK_SUCCESS = (data) => ({
    type: 'SUBMIT_FEEDBACK', payload: data
});

export const CLEAR_FEEDBACK_SUCCESS = () => ({
    type: 'CLEAR_FEEDBACK'
});

export const TOGGLE_MODAL_SUCCESS = (bool) => ({
    type: 'TOGGLE_MODAL', payload: bool
});

export const SHOW_ERROR_MESSAGE_SUCCESS = (bool) => ({
    type: 'SHOW_ERROR_MESSAGE', payload: bool
});
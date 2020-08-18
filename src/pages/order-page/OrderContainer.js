import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { removeProductFromCart } from '../basket-page/reducer';
import { dispatchNewOrder, checkPromoCode, clearOrder } from './reducer';

class OrderContainer extends Component {
    componentWillUnmount() {
        this.props.clearOrder();
    }

    render() {
        return (
            <Order {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    categories: state.categories.categories,
    tempCart: state.cart.tempCart,
    promo_code: state.order.promo_code,
    isLoading: state.order.isLoading,
    order: state.order.order
});

export default connect(mapStateToProps, {
    removeProductFromCart, dispatchNewOrder, checkPromoCode, clearOrder
})(OrderContainer);

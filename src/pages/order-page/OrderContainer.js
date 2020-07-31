import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { removeProductFromCart } from '../basket-page/reducer';
import { dispatchNewOrder } from './reducer';

class OrderContainer extends Component {
    render() {
        return (
            <Order {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    categories: state.categories.categories,
    tempCart: state.cart.tempCart
});

export default connect(mapStateToProps, { removeProductFromCart, dispatchNewOrder })(OrderContainer);

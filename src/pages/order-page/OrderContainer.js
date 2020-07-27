import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { removeProductFromCart } from '../basket-page/reducer';

class OrderContainer extends Component {
    render() {
        return (
            <Order {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.list.products,
    cart: state.cart.cart
});

export default connect(mapStateToProps, { removeProductFromCart })(OrderContainer);

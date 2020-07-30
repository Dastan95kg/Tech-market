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
    cart: state.cart.cart,
    categories: state.categories.categories
});

export default connect(mapStateToProps, { removeProductFromCart })(OrderContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket, removeProductFromCart } from './reducer';

class CartContainer extends Component {
    componentDidMount() {
        this.props.getProductsFromBasket();
    }

    render() {
        return (
            <Cart {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    categories: state.categories.categories
});

export default connect(mapStateToProps, {
    getProductsFromBasket,
    removeProductFromCart
})(CartContainer);
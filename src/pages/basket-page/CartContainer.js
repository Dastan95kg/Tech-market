import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } from './reducer';

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
    categories: state.categories.categories,
    tempCart: state.cart.tempCart
});

export default connect(mapStateToProps, {
    getProductsFromBasket,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
})(CartContainer);
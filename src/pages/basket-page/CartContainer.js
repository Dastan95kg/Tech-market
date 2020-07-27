import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket, removeProductFromCart } from './reducer';
import { increaseProductAmount, decreaseProductAmount } from '../list-page/reducer';

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
    products: state.list.products,
    cart: state.cart.cart
});

export default connect(mapStateToProps, {
    getProductsFromBasket,
    removeProductFromCart,
    increaseProductAmount,
    decreaseProductAmount
})(CartContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import Preloader from '../preloader/Preloader';
import {
    getProductsFromBasket, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity
} from './reducer';

class CartContainer extends Component {
    componentDidMount() {
        this.props.getProductsFromBasket();
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : <Cart {...this.props} />}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    categories: state.categories.categories,
    tempCart: state.cart.tempCart,
    isLoading: state.cart.isLoading
});

export default connect(mapStateToProps, {
    getProductsFromBasket,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
})(CartContainer);
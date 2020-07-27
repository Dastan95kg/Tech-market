import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket, removeProductFromCart } from './reducer';
import { getAllProducts, increaseProductAmount, decreaseProductAmount } from '../list-page/reducer';

class CartContainer extends Component {
    componentDidMount() {
        this.props.getAllProducts();
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
    products: state.list.products
});

export default connect(mapStateToProps, {
    getProductsFromBasket,
    removeProductFromCart,
    getAllProducts,
    increaseProductAmount,
    decreaseProductAmount
})(CartContainer);
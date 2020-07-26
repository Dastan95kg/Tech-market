import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket, removeProductFromCart } from './reducer';
import { getAllProducts } from '../list-page/reducer';

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
    getAllProducts
})(CartContainer);
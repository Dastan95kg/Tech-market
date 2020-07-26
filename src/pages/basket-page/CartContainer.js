import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { getProductsFromBasket } from './reducer';

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
    products: state.list.products
});

export default connect(mapStateToProps, { getProductsFromBasket })(CartContainer);
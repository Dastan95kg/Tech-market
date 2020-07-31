import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { getPromotionProducts } from './reducer';
import { addProductToCart } from '../basket-page/reducer';

class MainContainer extends Component {
    componentDidMount() {
        this.props.getPromotionProducts();
    }

    render() {
        return (
            <Main {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.tempCart,
    promotionProducts: state.home.promotionProducts
});

export default connect(mapStateToProps, { getPromotionProducts, addProductToCart })(MainContainer);
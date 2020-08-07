import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from './Detail';
import { getProductDetail } from './reducer';
import { addProductToCart } from '../basket-page/reducer';
import { getPromotionProducts } from '../home-page/reducer';

class DetailContainer extends Component {
    componentDidMount() {
        this.props.getPromotionProducts();
        const { id } = this.props.match.params;
        this.props.getProductDetail(id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getProductDetail(this.props.match.params.id)
        }
    }

    render() {
        return (
            <Detail {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.detail.product,
    cart: state.cart.tempCart,
    promotionProducts: state.home.promotionProducts.products
});

export default connect(mapStateToProps, {
    getProductDetail, addProductToCart, getPromotionProducts
})(DetailContainer);
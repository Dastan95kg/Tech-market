import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { addProductToCart } from '../basket-page/reducer';
import { clearSearchResults } from './reducer';

class SearchContainer extends Component {
    componentWillUnmount() {
        this.props.clearSearchResults();
    }

    render() {
        return (
            <Search {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    searchProducts: state.search.searchProducts.results,
    cart: state.cart.tempCart
});

export default connect(mapStateToProps, { addProductToCart, clearSearchResults })(SearchContainer);

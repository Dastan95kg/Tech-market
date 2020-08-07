import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { addProductToCart } from '../basket-page/reducer';
import { clearSearchResults } from './reducer';
import Preloader from '../preloader/Preloader';

class SearchContainer extends Component {
    componentWillUnmount() {
        this.props.clearSearchResults();
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : <Search {...this.props} />}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    searchProducts: state.search.searchProducts.results,
    cart: state.cart.tempCart,
    isLoading: state.search.isLoading
});

export default connect(mapStateToProps, { addProductToCart, clearSearchResults })(SearchContainer);

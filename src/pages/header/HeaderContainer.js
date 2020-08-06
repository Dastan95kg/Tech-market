import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { findProducts } from '../search-page/reducer';

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.tempCart,
    searchProducts: state.search.searhProducts,
    redirect: state.search.redirect
});

export default connect(mapStateToProps, { findProducts })(HeaderContainer);
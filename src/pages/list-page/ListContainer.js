import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { addProductToCart } from '../basket-page/reducer';

class ListContainer extends Component {
    render() {
        return (
            <List {...this.props} />
        );
    }
}


const mapStateToProps = (state) => ({
    products: state.list.products,
    categories: state.categories.categories
});

export default connect(mapStateToProps, { addProductToCart })(ListContainer);
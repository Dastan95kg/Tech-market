import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { getAllProducts } from './reducer';
import { addProductToCart } from '../basket-page/reducer';

class ListContainer extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

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

export default connect(mapStateToProps, { getAllProducts, addProductToCart })(ListContainer);
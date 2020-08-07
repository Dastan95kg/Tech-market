import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { addProductToCart } from '../basket-page/reducer';
import {
    getAllCategoryProducts,
    getAllSubcategoryProducts,
    sortingByField
} from './reducer';
import { getCategoriesAndSubcategories } from '../categories/reducer';
import Preloader from '../preloader/Preloader';

class ListContainer extends Component {
    async componentDidMount() {
        await this.props.getCategoriesAndSubcategories();
        const id = this.props.match.params.category;
        if (this.props.categories.find(category => category._id === id)) {
            this.props.getAllCategoryProducts(id);
        } else {
            this.props.getAllSubcategoryProducts(id);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            const id = this.props.match.params.category;
            if (this.props.categories.find(category => category._id === id)) {
                this.props.getAllCategoryProducts(id);
            } else {
                this.props.getAllSubcategoryProducts(id);
            }
        }
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : <List {...this.props} />}
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    products: state.list.products,
    categories: state.categories.categories,
    subcategories: state.categories.subcategories,
    cart: state.cart.tempCart,
    isLoading: state.search.isLoading
});

export default connect(mapStateToProps, {
    addProductToCart,
    getAllCategoryProducts,
    getAllSubcategoryProducts,
    getCategoriesAndSubcategories,
    sortingByField
})(ListContainer);
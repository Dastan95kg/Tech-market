import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import { getCategoriesAndSubcategories } from './reducer';

class CategoriesContainer extends Component {
    componentDidMount() {
        this.props.getCategoriesAndSubcategories();
    }

    render() {
        return (
            <Categories {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories,
    subcategories: state.categories.subcategories
});

export default connect(mapStateToProps, { getCategoriesAndSubcategories })(CategoriesContainer);
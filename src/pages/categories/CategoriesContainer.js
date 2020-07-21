import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import { getCategories } from './reducer';

class CategoriesContainer extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <Categories {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })(CategoriesContainer);
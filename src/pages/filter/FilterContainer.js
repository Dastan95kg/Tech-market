import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import { toggleCheckboxes, clearFilters } from './reducer';
import { filterProducts } from '../list-page/reducer';

class FilterContainer extends Component {
    componentWillUnmount() {
        this.props.clearFilters();
    }

    render() {
        return (
            <Filter {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters.filters
});

export default connect(mapStateToProps, {
    toggleCheckboxes, clearFilters, filterProducts
})(FilterContainer);

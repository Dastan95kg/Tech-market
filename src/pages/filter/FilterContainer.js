import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import { toggleCheckboxes } from './reducer';

class FilterContainer extends Component {
    render() {
        return (
            <Filter {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters.filters
});

export default connect(mapStateToProps, { toggleCheckboxes })(FilterContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from './Detail';
import { getProductDetail } from './reducer';

class DetailContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProductDetail(id);
    }

    render() {
        return (
            <Detail {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.detail.product
});

export default connect(mapStateToProps, { getProductDetail })(DetailContainer);
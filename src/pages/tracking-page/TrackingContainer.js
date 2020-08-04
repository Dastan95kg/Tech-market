import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tracking from './Tracking';
import { findTrackingCode, clearOrderStatus } from '../search-page/reducer';

class TrackingContainer extends Component {
    componentWillUnmount() {
        this.props.clearOrderStatus();
    }

    render() {
        return (
            <Tracking {...this.props} />
        );
    }
}
const mapStateToProps = (state) => ({
    orderStatus: state.search.orderStatus
});

export default connect(mapStateToProps, { findTrackingCode, clearOrderStatus })(TrackingContainer);
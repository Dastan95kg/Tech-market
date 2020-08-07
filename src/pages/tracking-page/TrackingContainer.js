import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tracking from './Tracking';
import { findTrackingCode, clearOrderStatus } from '../search-page/reducer';
import Preloader from '../preloader/Preloader';

class TrackingContainer extends Component {
    componentWillUnmount() {
        this.props.clearOrderStatus();
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : <Tracking {...this.props} />}
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    orderStatus: state.search.orderStatus,
    isLoading: state.search.isLoading
});

export default connect(mapStateToProps, { findTrackingCode, clearOrderStatus })(TrackingContainer);
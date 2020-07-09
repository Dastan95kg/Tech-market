import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delivery from './Delivery';
import { getQuestions } from './reducer';

class DeliveryContainer extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        return (
            <Delivery questions={this.props.faq} />
        );
    }
}

const mapStateToProps = (state) => ({
    faq: state.delivery.faq
});

export default connect(mapStateToProps, { getQuestions })(DeliveryContainer);
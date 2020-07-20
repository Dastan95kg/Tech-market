import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from './Slider';
import { getPhotos } from './reducer';

class SliderContainer extends Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
            <Slider {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.slider.photos
});

export default connect(mapStateToProps, { getPhotos })(SliderContainer);

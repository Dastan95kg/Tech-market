import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './DetailSlider.scss';
import tv from '../../assets/images/tv.png';
import bg from '../../assets/images/background.png';

class DetailSlider extends Component {
    render() {
        const { photos } = this.props;
        return (
            <Carousel
                showStatus={false}
                showIndicators={false}
                useKeyboardArrows
                autoPlay
                emulateTouch
            >
                {photos && photos.map(photo => (
                    <div key={photo}>
                        <img src={`https://electronics-admin.herokuapp.com/${photo}`} alt="product" />
                    </div>
                ))}
            </Carousel>
        );
    }
};

export default DetailSlider;
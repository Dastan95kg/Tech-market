import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './DetailSlider.scss';
import tv from '../../assets/images/tv.png';
import bg from '../../assets/images/background.png';

class DetailSlider extends Component {
    render() {
        return (
            <Carousel
                showStatus={false}
                showIndicators={false}
                useKeyboardArrows
                autoPlay
                emulateTouch
            >
                <div>
                    <img src={tv} />
                </div>
                <div>
                    <img src={bg} />
                </div>
                <div>
                    <img src={tv} />
                </div>
            </Carousel>
        );
    }
};

export default DetailSlider;
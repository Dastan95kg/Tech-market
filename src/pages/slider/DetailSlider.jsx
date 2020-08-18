import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './DetailSlider.scss';

class DetailSlider extends Component {
    render() {
        // const { photos } = this.props;
        const photos = ["/upload/AbL6cQjUD5.jpg", "/upload/AbL6cQjUD5.jpg", "/upload/AbL6cQjUD5.jpg", "/upload/AbL6cQjUD5.jpg", "/upload/AbL6cQjUD5.jpg", "/upload/AbL6cQjUD5.jpg"];
        return (
            <Carousel
                showStatus={false}
                showIndicators={false}
                useKeyboardArrows
                autoPlay
                emulateTouch
                showArrows
                dynamicHeight
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
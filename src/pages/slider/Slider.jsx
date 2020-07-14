import React from 'react';
import SlickSlider from 'react-slick';
import placeholder from '../../assets/images/background.png';
import '../home-page/Main.scss';

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="slider">
            <SlickSlider {...settings}>
                <div className="slider__image-container">
                    <img src={placeholder} alt="placeholder" />
                </div>
                <div className="slider__image-container">
                    <img src="https://www.tcl.com/content/dam/tcl-dam/product/s-series/s6500/general/productimage/websites_image/S6500-AI%20IN.png" alt="placeholder" />
                </div>
                <div className="slider__image-container">
                    <img src="https://brain-images-ssl.cdn.dixons.com/5/9/10194795/l_10194795_002.jpg" alt="placeholder" />
                </div>
            </SlickSlider>
        </div>
    );
};

export default Slider;
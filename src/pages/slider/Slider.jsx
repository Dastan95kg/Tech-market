import React from 'react';
import SlickSlider from 'react-slick';
import '../home-page/Main.scss';

const Slider = ({ photos }) => {
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
                breakpoint: 500,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="slider">
            <SlickSlider {...settings}>
                {photos && photos.map(obj => (
                    <div className="slider__image-container" key={obj._id}>
                        <img src={`https://electronics-admin.herokuapp.com${obj.photo}`} alt={obj.photo} />
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

export default Slider;
import React from 'react';
import { Rating } from 'semantic-ui-react';
import TV from '../../assets/images/tv.png';

const GoodCart = (props) => {
    const {
        rating,
        photos,
        name,
        price,
        _id,
        addProductToCart
    } = props;

    return (
        <div className="popular__goods-item">
            <div className="content">
                <img
                    className="content__image"
                    src={photos && photos.length > 0 ? `https://electronics-admin.herokuapp.com/${photos[0]}` : TV}
                    alt="TV"
                />
                <p className="content__title">
                    {name}
                </p>
                <Rating maxRating={5} disabled rating={rating} />
                {/* <p className="content__old-price">
                    {features.oldPrice}
                    c
                </p> */}
                <p className="content__price">
                    {price}
                    <span>c</span>
                </p>
            </div>
            <button type="button" onClick={() => addProductToCart(_id)}>Добавить в корзину</button>
        </div>
    );
};

export default GoodCart;
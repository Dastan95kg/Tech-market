import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import TV from '../../assets/images/tv.png';

const GoodCart = (props) => {
    const {
        rating, photos, name,
        price, old_price: oldPrice, _id,
        addProductToCart, cart, discount
    } = props;

    return (
        <div className="popular__goods-item">
            <Link
                className="content"
                to={`/detail/${_id}`}
            >
                <img
                    className="content__image"
                    src={photos && photos.length > 0 ? `https://electronics-admin.herokuapp.com/${photos[0]}` : TV}
                    alt="TV"
                />
                <p className="content__title">
                    {name}
                </p>
                <Rating maxRating={5} disabled rating={rating} />
                {discount > 0 && (
                    <p className="content__old-price">
                        <span>{oldPrice}</span>
                        c
                    </p>
                )}
                <p className={discount > 0 ? 'content__price' : 'content__price margin'}>
                    {price}
                    <span>c</span>
                </p>
            </Link>
            <button
                disabled={cart && cart.map(item => item.id).includes(_id)}
                type="button"
                onClick={() => addProductToCart({ id: _id, quantity: 1 })}
                className={cart && cart.map(item => item.id).includes(_id)
                    ? 'content__cart-added'
                    : 'content__cart-notAdded'}
            >
                {cart && cart.map(item => item.id).includes(_id)
                    ? 'Добавлено в корзину' : 'Добавить в корзину'}
            </button>
        </div>
    );
};

export default GoodCart;
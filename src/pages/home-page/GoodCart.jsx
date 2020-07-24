import React from 'react';
import { Rating } from 'semantic-ui-react';
import TV from '../../assets/images/tv.png';

const GoodCart = () => {
    return (
        <div className="popular__goods-item">
            <div className="content">
                <img className="content__image" src={TV} alt="TV" />
                <p className="content__title">Телевизор &quot;Phillips&quot;</p>
                <p className="content__subtitle">Классный</p>
                <Rating maxRating={5} clearable disabled />
                <p className="content__old-price">12999 c</p>
                <p className="content__price">10999 c</p>
            </div>
            <button type="button">Добавить в корзину</button>
        </div>
    );
};

export default GoodCart;
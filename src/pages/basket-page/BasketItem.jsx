import React from 'react';
import ProductQuantity from '../detail-page/ProductQuantity';
import basketTv from '../../assets/images/basket-tv.png';
import remove from '../../assets/images/close.png';
import './BasketItem.scss';

const BasketItem = () => {
    return (
        <div className="basket__content-item">
            <div className="basket__content-item-image">
                <img src={basketTv} alt="basket item" />
            </div>
            <div className="basket__content-item-details">
                <div className="basket__content-item-title">Телевизор “Philips” КЛАССНЫЙ</div>
                <div className="basket__content-item-detail">
                    <ProductQuantity />
                    <span className="times">&times;</span>
                    <span className="price">12999 сом</span>
                </div>
            </div>
            <div className="basket__content-item-price">
                <button type="button">
                    <img src={remove} alt="remove icon" />
                </button>
                <div className="basket__content-item-final">
                    <span>12999</span>
                    сом
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
import React from 'react';
import ProductQuantity from '../detail-page/ProductQuantity';
import FinalPrice from './FinalPrice';
import basketTv from '../../assets/images/basket-tv.png';
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
            <FinalPrice />
        </div>
    );
};

export default BasketItem;
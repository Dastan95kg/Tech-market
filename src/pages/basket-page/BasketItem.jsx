import React, { useState } from 'react';
import ProductQuantity from '../detail-page/ProductQuantity';
import FinalPrice from './FinalPrice';
import './BasketItem.scss';

const BasketItem = (props) => {
    const { name, price, photos } = props;
    const [totalProductPrice, setTotalProductPrice] = useState(price);

    return (
        <div className="basket__content-item">
            <div className="basket__content-item-image">
                <img src={`https://electronics-admin.herokuapp.com/${photos[0]}`} alt="basket item" />
            </div>
            <div className="basket__content-item-details">
                <div className="basket__content-item-title">{name}</div>
                <div className="basket__content-item-detail">
                    <ProductQuantity />
                    <span className="times">&times;</span>
                    <span className="price">
                        <span>{price}</span>
                        сом
                    </span>
                </div>
            </div>
            <FinalPrice totalPrice={totalProductPrice} />
        </div>
    );
};

export default BasketItem;
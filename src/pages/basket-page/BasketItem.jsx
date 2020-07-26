import React from 'react';
import ProductQuantity from '../detail-page/ProductQuantity';
import FinalPrice from './FinalPrice';
import './BasketItem.scss';

const BasketItem = (props) => {
    const {
        name, price, photos, removeProduct, _id
    } = props;

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
            <FinalPrice totalPrice={price} removeProduct={removeProduct} productId={_id} />
        </div>
    );
};

export default BasketItem;
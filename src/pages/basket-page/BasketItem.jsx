import React from 'react';
import ProductQuantity from '../detail-page/ProductQuantity';
import FinalPrice from './FinalPrice';
import './BasketItem.scss';

const BasketItem = (props) => {
    const {
        name, price, photos, removeProduct, _id,
        increaseProductAmount, orders_count: amount, decreaseProductAmount
    } = props;

    return (
        <div className="basket__content-item">
            <div className="basket__content-item-image">
                <img src={`https://electronics-admin.herokuapp.com/${photos[0]}`} alt="basket item" />
            </div>
            <div className="basket__content-item-details">
                <div className="basket__content-item-title">{name}</div>
                <div className="basket__content-item-detail">
                    <ProductQuantity
                        increaseProductAmount={increaseProductAmount}
                        decreaseProductAmount={decreaseProductAmount}
                        id={_id}
                        amount={amount}
                    />
                    <span className="times">&times;</span>
                    <span className="price">
                        <span>{price}</span>
                        сом
                    </span>
                </div>
            </div>
            <FinalPrice
                price={price}
                removeProduct={removeProduct}
                productId={_id}
                amount={amount}
            />
        </div>
    );
};

export default BasketItem;
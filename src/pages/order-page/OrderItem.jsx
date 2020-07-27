import React from 'react';
import FinalPrice from '../basket-page/FinalPrice';
import './OrderItem.scss';

const OrderItem = (props) => {
    const {
        name,
        orders_count: amount,
        price,
        removeProductFromCart,
        _id: id
    } = props;

    return (
        <div className="order__content-item">
            <div className="order__content-item-details">
                <div className="order__content-item-title">{name}</div>
                <div className="order__content-item-quantity">
                    <span className="order__content-item-number">{amount}</span>
                    <span className="order__content-item-times">&times;</span>
                    <span className="order__content-item-productPrice">
                        <span>{price}</span>
                        сом
                    </span>
                </div>
            </div>
            <FinalPrice
                price={price}
                amount={amount}
                removeProduct={() => removeProductFromCart(id)}
            />
        </div>
    );
};

export default OrderItem;
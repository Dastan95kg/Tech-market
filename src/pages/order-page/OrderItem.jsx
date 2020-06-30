import React from 'react';
import FinalPrice from '../basket-page/FinalPrice';
import './OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="order__content-item">
            <div className="order__content-item-details">
                <div className="order__content-item-title">Телевизор “Philips” КЛАССНЫЙ</div>
                <div className="order__content-item-quantity">
                    <span className="order__content-item-number">1</span>
                    <span className="order__content-item-times">&times;</span>
                    <span className="order__content-item-productPrice">12999 сом</span>
                </div>
            </div>
            <FinalPrice />
        </div>
    );
};

export default OrderItem;
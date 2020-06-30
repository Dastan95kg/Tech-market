import React from 'react';
import './CartTotal.scss';

const CartTotal = () => {
    return (
        <div className="basket__content-total">
            <div className="basket__content-total-quantity">
                Количество:
                <span>3</span>
            </div>
            <div className="basket__content-total-price">
                Сумма заказа:
                <span>100500</span>
                сом
            </div>
        </div>
    );
};

export default CartTotal;
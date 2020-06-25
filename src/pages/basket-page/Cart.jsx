import React from 'react';
import BasketItem from './BasketItem';
import './Cart.scss';

const Cart = () => {
    return (
        <div className="basket__content">
            <div className="basket__content-header">Корзина</div>
            <div className="basket__content-container">
                <BasketItem />
                <BasketItem />
                <BasketItem />
            </div>
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
            <div className="basket__content-buttons">
                <button type="button" className="return">Вернуться</button>
                <button type="button" className="proceed">Перейти к оформлению заказа</button>
            </div>
        </div>
    );
};

export default Cart;
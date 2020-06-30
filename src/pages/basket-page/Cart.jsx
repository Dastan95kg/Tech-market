import React from 'react';
import BasketItem from './BasketItem';
import CartTotal from './CartTotal';
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
            <CartTotal />
            <div className="basket__content-buttons">
                <button type="button" className="return">Вернуться</button>
                <button type="button" className="proceed">Перейти к оформлению заказа</button>
            </div>
        </div>
    );
};

export default Cart;
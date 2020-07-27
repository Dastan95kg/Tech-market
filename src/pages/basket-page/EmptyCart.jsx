import React from 'react';
import './EmptyCart.scss';

const EmptyCart = ({ header }) => {
    return (
        <section className="empty-cart">
            <div className="empty-cart__header">{header}</div>
            <div className="empty-cart__message">Пока в вашей корзине ничего нет!</div>
            <button className="empty-cart__btn" type="button">Вернуться к странице товаров</button>
        </section>
    );
};

export default EmptyCart;
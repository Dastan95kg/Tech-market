import React from 'react';
import './EmptyCart.scss';

const EmptyCart = ({ header, history, categories, text }) => {
    return (
        <section className="empty-cart">
            <div className="empty-cart__header">{header}</div>
            <div className="empty-cart__message">{text}</div>
            <button
                className="empty-cart__btn"
                type="button"
                onClick={() => history.push(`products/${categories && categories[0]._id}`)}
            >
                Вернуться к странице товаров
            </button>
        </section>
    );
};

export default EmptyCart;
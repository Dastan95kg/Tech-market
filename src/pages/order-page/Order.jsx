import React from 'react';
import Categories from '../home-page/Categories';
import OrderItem from './OrderItem';
import CartTotal from '../basket-page/CartTotal';
import OrderForm from './OrderForm';
import './Order.scss';

const Order = () => {
    return (
        <section className="order">
            <div className="order__wrapper">
                <Categories />
                <div className="order__content">
                    <div className="order__content-header">Оформление заказа</div>
                    <div className="order__content-container">
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </div>
                    <div className="order__content-promo">
                        <input type="text" placeholder="Промо-код" className="order__content-promo-data" />
                        <button type="button">Активировать</button>
                    </div>
                    <CartTotal />
                    <OrderForm />
                </div>
            </div>
        </section>
    );
};

export default Order;
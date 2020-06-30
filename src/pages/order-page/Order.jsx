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
                    <div className="order__content-header">Корзина</div>
                    <div className="order__content-container">
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </div>
                    <CartTotal />
                    <OrderForm />
                </div>
            </div>
        </section>
    );
};

export default Order;
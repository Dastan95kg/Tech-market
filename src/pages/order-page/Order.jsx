import React from 'react';
import OrderItem from './OrderItem';
import CartTotal from '../basket-page/CartTotal';
import OrderForm from './OrderForm';
import './Order.scss';
import EmptyCart from '../basket-page/EmptyCart';

const Order = (props) => {
    const { products, removeProductFromCart, cart } = props;
    const cartProducts = products && products.filter(product => cart && cart.includes(product._id));

    return (
        <>
            {
                cartProducts && cartProducts.length ? (
                    <section className="order">
                        <div className="order__content">
                            <div className="order__content-header">Оформление заказа</div>
                            <div className="order__content-container">
                                {cartProducts && cartProducts.map(product => (
                                    <OrderItem
                                        {...product}
                                        key={product._id}
                                        removeProductFromCart={removeProductFromCart}
                                    />
                                ))}
                            </div>
                            <div className="order__content-promo">
                                <input type="text" placeholder="Промо-код" className="order__content-promo-data" />
                                <button type="button">Активировать</button>
                            </div>
                            <CartTotal products={cartProducts} />
                            <OrderForm />
                        </div>
                    </section>
                ) : <EmptyCart header="Оформление заказа" />
            }
        </>
    );
};

export default Order;
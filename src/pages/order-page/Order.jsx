import React from 'react';
import OrderItem from './OrderItem';
import CartTotal from '../basket-page/CartTotal';
import OrderForm from './OrderForm';
import './Order.scss';
import EmptyCart from '../basket-page/EmptyCart';

const Order = (props) => {
    const {
        removeProductFromCart,
        cart: { products_list: cartProducts },
        history,
        categories,
        tempCart,
        dispatchNewOrder,
        order
    } = props;

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
                                        tempCart={tempCart}
                                    />
                                ))}
                            </div>
                            <form className="order__content-promo">
                                <input type="text" placeholder="Промо-код" className="order__content-promo-data" />
                                <button type="button">Активировать</button>
                            </form>
                            <CartTotal
                                products={cartProducts}
                                tempCart={tempCart}
                            />
                            <OrderForm
                                dispatchNewOrder={dispatchNewOrder}
                                tempCart={tempCart}
                                products={cartProducts}
                                order={order}
                            />
                        </div>
                    </section>
                ) : (
                        <EmptyCart
                            header="Оформление заказа"
                            history={history}
                            categories={categories}
                        />
                    )
            }
        </>
    );
};

export default Order;
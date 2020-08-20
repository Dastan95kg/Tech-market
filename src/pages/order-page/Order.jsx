import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Message } from 'semantic-ui-react';
import OrderItem from './OrderItem';
import CartTotal from '../basket-page/CartTotal';
import OrderForm from './OrderForm';
import './Order.scss';
import EmptyCart from '../basket-page/EmptyCart';

const Order = (props) => {
    const {
        removeProductFromCart,
        cart: { products_list: cartProducts },
        cart: { total_discount: totalDiscount },
        history,
        categories,
        tempCart,
        dispatchNewOrder,
        checkPromoCode,
        promo_code: promoCode,
        order
    } = props;

    const [message, showMessage] = useState(false);

    const formik = useFormik({
        initialValues: {
            promo_code: ''
        },
        onSubmit: values => {
            checkPromoCode(values.promo_code);
            showMessage(true);
        }
    });

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
                            <form
                                className="order__content-promo"
                                onSubmit={formik.handleSubmit}
                            >
                                <input
                                    id="promo_code"
                                    name="promo_code"
                                    type="text"
                                    placeholder="Промо-код"
                                    className="order__content-promo-data"
                                    onChange={formik.handleChange}
                                />
                                <button type="submit">Активировать</button>
                            </form>
                            {message && (promoCode.promocode ? (
                                <Message positive size="small">
                                    <Message.Header>
                                        {`Промокод "${promoCode.promocode.code}" действителен`}
                                    </Message.Header>
                                    <p>
                                        Размер скидки составляет
                                        <b className="discount-num">
                                            {`${promoCode.promocode.discount}%`}
                                        </b>
                                    </p>
                                </Message>
                            )
                                : (
                                    <Message negative>
                                        <Message.Header>
                                            Промо-код не существует или был использован
                                        </Message.Header>
                                    </Message>
                                ))}
                            <div className="order__content-saved">
                                Вы сэкономили:
                                <span className="order__content-saved-num">
                                    {totalDiscount}
                                </span>
                                сом
                            </div>
                            <CartTotal
                                products={cartProducts}
                                tempCart={tempCart}
                            />
                            <OrderForm
                                dispatchNewOrder={dispatchNewOrder}
                                tempCart={tempCart}
                                products={cartProducts}
                                promoCode={promoCode}
                                history={history}
                                order={order}
                            />
                        </div>
                    </section>
                ) : (
                        <EmptyCart
                            header="Оформление заказа"
                            history={history}
                            categories={categories}
                            text="Перейдите на страницу корзины пожалуйста"
                        />
                    )
            }
        </>
    );
};

export default Order;
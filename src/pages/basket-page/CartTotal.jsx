import React from 'react';
import './CartTotal.scss';

const CartTotal = (props) => {
    const { products } = props;
    const totalPrice = products
        && products.reduce((counter, product) => counter + (product.price * product.orders_count), 0);

    return (
        <div className="basket__content-total">
            <div className="basket__content-total-quantity">
                Количество:
                <span>{products.length}</span>
            </div>
            <div className="basket__content-total-price">
                Сумма заказа:
                <span>{totalPrice}</span>
                сом
            </div>
        </div>
    );
};

export default CartTotal;
import React from 'react';
import './CartTotal.scss';

const CartTotal = (props) => {
    const { products, tempCart } = props;
    const priceList = [];
    products.forEach(product => {
        tempCart.forEach(item => {
            return item.id === product._id && priceList.push(item.quantity * product.price);
        });
    });
    const totalPrice = priceList.reduce((counter, price) => counter + price, 0);

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
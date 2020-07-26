import React from 'react';
import './CartTotal.scss';

const CartTotal = (props) => {
    const { products } = props;
    const finalPrice = products && products.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="basket__content-total">
            <div className="basket__content-total-quantity">
                Количество:
                <span>{products.length}</span>
            </div>
            <div className="basket__content-total-price">
                Сумма заказа:
                <span>{finalPrice}</span>
                сом
            </div>
        </div>
    );
};

export default CartTotal;
import React from 'react';
import './CartTotal.scss';

const CartTotal = (props) => {
    const { products } = props;

    return (
        <div className="basket__content-total">
            <div className="basket__content-total-quantity">
                Количество:
                <span>{products.length}</span>
            </div>
            <div className="basket__content-total-price">
                Сумма заказа:
                <span>{100}</span>
                сом
            </div>
        </div>
    );
};

export default CartTotal;
import React from 'react';
import FinalPrice from '../basket-page/FinalPrice';
import './OrderItem.scss';

const OrderItem = (props) => {
    const {
        name,
        price,
        removeProductFromCart,
        _id: id,
        tempCart,
        old_price: oldPrice,
        discount
    } = props;
    const quantity = tempCart && tempCart.find(item => item.id === id).quantity;
    const cartItem = tempCart && tempCart.find(item => item.id === id);

    return (
        <div className="order__content-item">
            <div className="order__content-item-details">
                <div className="order__content-item-title">{name}</div>
                <div className="order__content-item-quantity">
                    <span className="order__content-item-number">{quantity && quantity}</span>
                    <span className="order__content-item-times">&times;</span>
                    <span className="order__content-item-productPrice">
                        <span>{price}</span>
                        сом
                    </span>
                </div>
            </div>
            <div className="order__content-item-price">
                {discount > 0 && (
                    <div className="order__content-item-discount-wrapper">
                        <div className="order__content-item-oldPrice">
                            <span className="order__content-item-oldPrice-content">{oldPrice}</span>
                            сом
                        </div>
                        <span className="order__content-item-minus">-</span>
                        <div className="order__content-item-discount">
                            {discount}
                            %
                        </div>
                        <span className="order__content-item-equal">=</span>
                    </div>
                )}
                <FinalPrice
                    price={price}
                    removeProduct={() => removeProductFromCart(id)}
                    productId={id}
                    cartItem={cartItem}
                />
            </div>
        </div>
    );
};

export default OrderItem;
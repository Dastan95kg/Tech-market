import React from 'react';
import remove from '../../assets/images/close.png';
import './FinalPrice.scss';

const FinalPrice = (props) => {
    const {
        removeProduct,
        productId,
        price,
        cartItem
    } = props;

    return (
        <div className="basket__content-item-price">
            <button type="button" onClick={() => removeProduct(productId)}>
                <img src={remove} alt="remove icon" />
            </button>
            <div className="basket__content-item-final">
                <span>{cartItem && price * cartItem.quantity}</span>
                сом
            </div>
        </div>
    );
};

export default FinalPrice;
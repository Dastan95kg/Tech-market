import React from 'react';
import './ProductQuantity.scss';

const ProductQuantity = (props) => {
    const {
        id,
        cartItem,
        increaseProductQuantity,
        decreaseProductQuantity
    } = props;

    const handleDecreasingAmount = () => {
        decreaseProductQuantity(id);
    };

    const handleIncreasingAmount = () => {
        increaseProductQuantity(id);
    };

    return (
        <div className="container">
            <button type="button" className="container-btn" onClick={handleDecreasingAmount}>
                <span>-</span>
            </button>
            <span className="container-quantity">{cartItem && cartItem.quantity}</span>
            <button type="button" className="container-btn" onClick={handleIncreasingAmount}>
                <span>+</span>
            </button>
        </div>
    );
};

export default ProductQuantity;
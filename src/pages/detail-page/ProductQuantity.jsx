import React from 'react';
import './ProductQuantity.scss';

const ProductQuantity = (props) => {
    const {
        increaseProductAmount, id,
        amount, decreaseProductAmount
    } = props;

    return (
        <div className="container">
            <button type="button" className="container-btn" onClick={() => decreaseProductAmount(id)}>
                <span>-</span>
            </button>
            <span className="container-quantity">{amount}</span>
            <button type="button" className="container-btn" onClick={() => increaseProductAmount(id)}>
                <span>+</span>
            </button>
        </div>
    );
};

export default ProductQuantity;
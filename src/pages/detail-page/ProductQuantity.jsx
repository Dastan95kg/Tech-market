import React from 'react';
import './ProductQuantity.scss';

const ProductQuantity = (props) => {
    const {
        amount,
        setAmount
    } = props;

    const handleDecreasingAmount = () => {
        return amount > 1 && setAmount(amount - 1);
    };

    const handleIncreasingAmount = () => {
        setAmount(amount + 1);
    };

    return (
        <div className="container">
            <button type="button" className="container-btn" onClick={handleDecreasingAmount}>
                <span>-</span>
            </button>
            <span className="container-quantity">{amount}</span>
            <button type="button" className="container-btn" onClick={handleIncreasingAmount}>
                <span>+</span>
            </button>
        </div>
    );
};

export default ProductQuantity;
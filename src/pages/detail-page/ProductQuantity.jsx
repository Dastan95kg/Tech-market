import React from 'react';
import './ProductQuantity.scss';

const ProductQuantity = () => {
    return (
        <div className="container">
            <button type="button" className="container-btn">
                <span>-</span>
            </button>
            <span className="container-quantity">1</span>
            <button type="button" className="container-btn">
                <span>+</span>
            </button>
        </div>
    );
};

export default ProductQuantity;
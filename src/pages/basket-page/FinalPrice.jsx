import React from 'react';
import remove from '../../assets/images/close.png';
import './FinalPrice.scss';

const FinalPrice = () => {
    return (
        <div className="basket__content-item-price">
            <button type="button">
                <img src={remove} alt="remove icon" />
            </button>
            <div className="basket__content-item-final">
                <span>12999</span>
                сом
            </div>
        </div>
    );
};

export default FinalPrice;
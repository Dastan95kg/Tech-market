import React from 'react';
import './PriceFilter.scss';

const PriceFilter = () => {
    return (
        <div className="list__content-filter">
            <div className="list__content-filter-title">Цена (сом)</div>
            <div className="list__content-inputs">
                <input type="number" />
                <span className="dash" />
                <input type="number" />
            </div>
            <button type="button">Фильтровать</button>
        </div>
    );
};

export default PriceFilter;
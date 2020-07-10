import React from 'react';
import line from '../../assets/images/Line.png';

const CatalogItem = ({ name }) => {
    return (
        <div className="catalog__item">
            <div className="catalog__item-content">
                <div className="catalog__item-text">
                    {name}
                </div>
                <div className="catalog__item-line">
                    <img src={line} alt="line" />
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
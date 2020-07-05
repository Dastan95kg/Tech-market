import React from 'react';
import line from '../../assets/images/Line.png';

const CatalogItem = ({ image, title }) => {
    return (
        <div className="catalog__item">
            <div className="catalog__item-content">
                <div className="catalog__item-text">
                    {title}
                </div>
                <div className="catalog__item-line">
                    <img src={line} alt="line" />
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
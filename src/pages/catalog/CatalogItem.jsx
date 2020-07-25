import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../assets/images/Line.png';

const CatalogItem = (props) => {
    const { name, setSubcategoriesActive } = props;
    const activateSubcategories = () => {
        setSubcategoriesActive(true);
    };

    const disactivateSubcategories = () => {
        setSubcategoriesActive(false);
    };

    return (
        <Link
            to={`/products/${name}`}
            className="catalog__item"
            onMouseEnter={activateSubcategories}
            onMouseLeave={disactivateSubcategories}
        >
            <div className="catalog__item-content">
                <div className="catalog__item-text">
                    {name}
                </div>
                <div className="catalog__item-line">
                    <img src={line} alt="line" />
                </div>
            </div>
        </Link>
    );
};

export default CatalogItem;
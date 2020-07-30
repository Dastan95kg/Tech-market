import React from 'react';
import './Subcategories.scss';
import { Link } from 'react-router-dom';

const Subcategories = (props) => {
    const {
        subcategoriesActive,
        setSubcategoriesActive,
        subcategories
    } = props;

    return (
        <div
            className={subcategoriesActive ? 'subcategories active' : 'subcategories'}
            onMouseEnter={() => setSubcategoriesActive(true)}
            onMouseLeave={() => setSubcategoriesActive(false)}
        >
            {subcategories && subcategories.map(item => (
                <div
                    className="subcategories__item"
                    key={item._id}
                // to={`/products/${item._id}`}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default Subcategories;
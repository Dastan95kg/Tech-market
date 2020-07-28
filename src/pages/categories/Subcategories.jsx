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
                <Link
                    className="subcategories__item"
                    key={item._id}
                    to={`/products/${item.name}`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default Subcategories;
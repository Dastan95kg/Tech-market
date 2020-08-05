import React from 'react';
import { Link } from 'react-router-dom';
import './Subcategories.scss';

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
                    to={`/products/${item._id}`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default Subcategories;
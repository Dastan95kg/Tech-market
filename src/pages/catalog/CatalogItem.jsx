import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Subcategories from '../categories/Subcategories';
import line from '../../assets/images/Line.png';

const CatalogItem = (props) => {
    const { name, subcategories, _id: categoryId } = props;
    const [subcategoriesActive, setSubcategoriesActive] = useState(false);
    const subcategoriesList = subcategories && subcategories.filter(item => item.category === categoryId);

    const activateSubcategories = () => {
        setSubcategoriesActive(true);
    };

    const disactivateSubcategories = () => {
        setSubcategoriesActive(false);
    };

    return (
        <>
            <Link
                to={`/products/${categoryId}`}
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
            <Subcategories
                subcategoriesActive={subcategoriesActive}
                setSubcategoriesActive={setSubcategoriesActive}
                subcategories={subcategoriesList}
            />
        </>
    );
};

export default CatalogItem;
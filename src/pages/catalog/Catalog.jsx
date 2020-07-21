import React, { useState } from 'react';
import CatalogItem from './CatalogItem';
import Subcategories from '../categories/Subcategories';
import './Catalog.scss';

const Catalog = ({ isActive, categories }) => {
    const [subcategoriesActive, setSubcategoriesActive] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('');

    return (
        <div className={isActive ? 'catalog active' : 'catalog'}>
            <div className="catalog__header">
                Каталог товаров
            </div>
            <div className="catalog__content">
                {categories && categories.map(item => (
                    <CatalogItem
                        key={item.name}
                        {...item}
                        setSubcategoriesActive={setSubcategoriesActive}
                    />
                ))}
            </div>
            <Subcategories subcategoriesActive={subcategoriesActive} />
        </div>
    );
};

export default Catalog;
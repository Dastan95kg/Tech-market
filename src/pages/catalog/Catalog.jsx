import React from 'react';
import CatalogItem from './CatalogItem';
import './Catalog.scss';

const Catalog = ({ isActive, categories }) => {
    return (
        <div className={isActive ? 'catalog active' : 'catalog'}>
            <div className="catalog__header">
                Каталог товаров
            </div>
            <div className="catalog__content">
                {categories && categories.map(item => <CatalogItem key={item.name} {...item} />)}
            </div>
        </div>
    );
};

export default Catalog;
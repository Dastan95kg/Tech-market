import React from 'react';
import CatalogItem from './CatalogItem';
import './Catalog.scss';

const Catalog = (props) => {
    const { isActive, categories, subcategories } = props;

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
                        subcategories={subcategories}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
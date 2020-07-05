import React from 'react';
import CatalogItem from './CatalogItem';
import './Catalog.scss';
import images from '../../assets';

const Catalog = ({ isActive }) => {
    return (
        <div className={isActive ? 'catalog active' : 'catalog'}>
            <div className="catalog__header">
                <div className="catalog__header-title">Каталог товаров</div>
            </div>
            <div className="catalog__content">
                {images.map(item => <CatalogItem key={item.id} image={item.image} title={item.title} />)}
            </div>
        </div>
    );
};

export default Catalog;
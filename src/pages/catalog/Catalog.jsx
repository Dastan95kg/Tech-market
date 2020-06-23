import React from 'react';
import CatalogItem from './CatalogItem';
import './Catalog.scss';
import images from '../../assets';

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="catalog__header">
                <svg className="catalog__header-burger" viewBox="0 -53 384 384">
                    <path fill="#1D97F0" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
                <div className="catalog__header-title">Каталог товаров</div>
            </div>
            <div className="catalog__content">
                {images.map(item => <CatalogItem key={item.id} image={item.image} title={item.title} />)}
            </div>
        </div>
    );
};

export default Catalog;
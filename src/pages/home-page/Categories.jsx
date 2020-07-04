import React, { useState } from 'react';
import MainCategory from './MainCategory';
import Catalog from '../catalog/Catalog';
import images from '../../assets';

const Categories = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="categories">
            <Catalog />
            <div className="categories__burger">
                <svg viewBox="0 -53 384 384">
                    <path fill="#1D97F0" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
            </div>
            {images.map((obj) => <MainCategory image={obj.image} key={obj.id} />)}
        </div>
    );
};

export default Categories;
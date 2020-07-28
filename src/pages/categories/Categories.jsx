import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import Catalog from '../catalog/Catalog';
import './Categories.scss';

const Categories = (props) => {
    const { categories, subcategories } = props;
    const [isActive, setIsActive] = useState(false);

    const activateMenu = () => {
        setIsActive(true);
    };

    const disactivateMenu = () => {
        setIsActive(false);
    };

    return (
        <div className="categories" onMouseEnter={activateMenu} onMouseLeave={disactivateMenu}>
            <Catalog
                isActive={isActive}
                categories={categories}
                subcategories={subcategories}
            />
            <div className="categories__burger">
                <svg viewBox="0 -53 384 384">
                    <path fill="#1D97F0" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path fill="#1D97F0" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
            </div>
            {categories && categories.map(obj => <CategoryItem {...obj} key={obj.name} />)}
        </div>
    );
};

export default Categories;
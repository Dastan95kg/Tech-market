import React from 'react';
import './Categories.scss';

const CategoryItem = ({ name, photo }) => {
    return (
        <div className="categories__item">
            <img src={`${photo}`} alt={name} />
        </div>
    );
};

export default CategoryItem;
import React from 'react';
import './Main.scss';

const MainCategory = ({ image }) => {
    return (
        <div className="categories__item">
            <img src={image} alt={image} />
            <div />
        </div>
    );
};

export default MainCategory;
import React from 'react';
import './Subcategories.scss';

const Subcategories = (props) => {
    const { subcategoriesActive } = props;

    return (
        <div className={subcategoriesActive ? 'subcategories active' : 'subcategories'}>
            <div className="subcategories__item">
                Смартфоны
            </div>
            <div className="subcategories__item">
                Мобильные телефоны
            </div>
            <div className="subcategories__item">
                Планшеты
            </div>
            <div className="subcategories__item">
                Электронные книги
            </div>
            <div className="subcategories__item">
                Прочие гаджеты
            </div>
        </div>
    );
};

export default Subcategories;
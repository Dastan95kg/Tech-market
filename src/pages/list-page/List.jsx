import React from 'react';
import { Select } from 'semantic-ui-react';
import Categories from '../home-page/Categories';
import arrow from '../../assets/images/list-arrow.png';
import './List.scss';

const List = () => {
    const options = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' }
    ];

    return (
        <section className="list">
            <div className="list__wrapper">
                <Categories />
                <div className="list__content">
                    <div className="list__content-filterContainer">
                        <div className="list__content-categories">
                            <div className="list__content-category">Смартфоны и гаджеты</div>
                            <img src={arrow} alt="arrow" className="list__content-arrow" />
                            <div className="list__content-subcategory">Смартфоны</div>
                        </div>
                        <div className="list__content-logic">
                            <div className="list__content-sort">
                                <span className="list__content-sort-title">Сортировка</span>
                                <Select placeholder="По умолчанию" options={options} />
                            </div>
                            <div className="list__content-filter">
                                <div className="list__content-filter-title">Цена (сом)</div>
                                <div className="list__content-inputs">
                                    <input type="number" />
                                    <span className="dash" />
                                    <input type="number" />
                                </div>
                                <button type="button">Фильтровать</button>
                            </div>
                        </div>
                        <div className="list__content-pages">
                            Выводить результаты по
                            <input type="number" value="12" />
                            на страницу
                        </div>
                        <div className="list__content-results">
                            Показано
                            <span>12344</span>
                            результатов
                        </div>
                    </div>
                    <div className="list__content-products">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default List;
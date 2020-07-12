import React from 'react';
import { Select, Pagination, Checkbox } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import arrow from '../../assets/images/list-arrow.png';
import downArrow from '../../assets/images/dowт-arrow.png';
import './List.scss';
import PriceRunner from './PriceRunner';

const List = () => {
    const options = [
        { key: 'af', value: 'af', text: 'По умолчанию' },
        { key: 'ax', value: 'ax', text: 'По алфавиту А-Я' },
        { key: 'ay', value: 'ay', text: 'По алфавиту Я-А' },
        { key: 'az', value: 'az', text: 'По возрастанию цены' },
        { key: 'ac', value: 'ac', text: 'По убыванию цены' }
    ];

    return (
        <section className="list">
            <div className="list__content">
                <div className="list__content-filterContainer">
                    <div className="list__content-categories">
                        <div className="list__content-category">Смартфоны и гаджеты</div>
                        <img src={arrow} alt="arrow" className="list__content-arrow" />
                        <div className="list__content-subcategory">Смартфоны</div>
                    </div>
                    <div className="list__content-sort">
                        <span className="list__content-sort-title">Сортировка</span>
                        <Select placeholder="По умолчанию" options={options} />
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
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <div className="list__content-filters">
                        <div className="list__content-filter">
                            <div className="list__content-filters-label">
                                <span>Бренд</span>
                                <button type="button" className="list__content-filters-label-btn">
                                    <img src={downArrow} alt="down arrow" />
                                </button>
                            </div>
                            <div className="list__content-filters-checkboxes">
                                <Checkbox label="Samsung" />
                                <Checkbox label="Panasonic" />
                                <Checkbox label="LG" />
                                <Checkbox label="Huawei" />
                            </div>
                        </div>
                        <div className="list__content-filter">
                            <div className="list__content-filters-label">
                                <span>Цена</span>
                                <button type="button" className="list__content-filters-label-btn">
                                    <img src={downArrow} alt="down arrow" />
                                </button>
                            </div>
                            <PriceRunner />
                        </div>
                    </div>
                </div>
                <div className="list__content-pagination">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </div>
            </div>
        </section>
    );
};

export default List;
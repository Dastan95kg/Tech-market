import React from 'react';
import { Dropdown, Checkbox, Pagination } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import PriceRunner from '../list-page/PriceRunner';
import './Search.scss';
import filterImg from '../../assets/images/filter.png';

const Search = () => {
    const options = [
        { key: 'af', value: 'af', text: 'По умолчанию' },
        { key: 'ax', value: 'ax', text: 'По алфавиту А-Я' },
        { key: 'ay', value: 'ay', text: 'По алфавиту Я-А' },
        { key: 'az', value: 'az', text: 'По возрастанию цены' },
        { key: 'ac', value: 'ac', text: 'По убыванию цены' }
    ];

    const categories = [
        { key: 'af', value: 'af', text: 'Холодильники' },
        { key: 'ax', value: 'ax', text: 'Мобильные телефоны' },
        { key: 'ay', value: 'ay', text: 'Стиральные машины' },
        { key: 'az', value: 'az', text: 'Телевизоры' }
    ];

    return (
        <section className="search">
            <div className="search__content">
                <nav className="search__content-navbar">
                    <div className="search__content-navbar-title">Поиск</div>
                    <div className="search__content-navbar-sort">
                        Сортировка
                        <Dropdown search selection options={options} />
                    </div>
                    <div className="search__content-navbar-filter">
                        <div>Фильтрация</div>
                        <img src={filterImg} alt="filter" />
                    </div>
                    <div className="search__content-navbar-results">Показано 12344 результатов</div>
                </nav>
                <div className="search__content-wrapper">
                    <div className="search__content-products-wrapper">
                        <div className="search__content-products">
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                            <GoodCart />
                        </div>
                        <div className="search__content-products-pagination">
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
                    <nav className="search__content-categories">
                        <div className="search__content-categories-title">Категории</div>
                        <Dropdown search selection options={categories} />
                        <div className="search__content-categories-subtitle">Подкатегории</div>
                        <div className="search__content-categories-checkboxes">
                            <Checkbox label="подкатегория" />
                            <Checkbox label="подкатегория" />
                            <Checkbox label="подкатегория" />
                            <Checkbox label="подкатегория" />
                            <Checkbox label="подкатегория" />
                            <Checkbox label="подкатегория" />
                        </div>
                        <PriceRunner />
                        <div className="search__content-categories-results">
                            <div className="search__content-categories-results-title">Выводить результаты:</div>
                            <div className="search__content-categories-results-pages">
                                По
                                <input type="number" value="9" />
                                на страницу
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Search;
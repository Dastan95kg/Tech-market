import React from 'react';
import { Dropdown, Checkbox, Pagination } from 'semantic-ui-react';
import GoodCart from '../home-page/GoodCart';
import Categories from '../home-page/Categories';
import PriceFilter from '../list-page/PriceFilter';
import SearchForm from './SearchForm';
import './Search.scss';

const Search = () => {
    const options = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' }
    ];

    return (
        <section className="search">
            <div className="search__wrapper">
                <Categories />
                <div className="search__content">
                    <nav className="search__content-navbar">
                        <div className="search__content-navbar-title">Поиск</div>
                        <div className="search__content-navbar-container">
                            <SearchForm placeholder="Введите название товара" />
                            <div className="search__content-navbar-sort">
                                Сортировка
                                <Dropdown search selection options={options} />
                            </div>
                        </div>
                        <PriceFilter />
                        <div className="search__content-navbar-results">Показано 12344 результатов</div>
                    </nav>
                    <div className="search__content-wrapper">
                        <nav className="search__content-categories">
                            <div className="search__content-categories-title">Категории</div>
                            <Dropdown search selection options={options} />
                            <div className="search__content-categories-subtitle">Подкатегории</div>
                            <div className="search__content-categories-checkboxes">
                                <Checkbox label="подкатегория" />
                                <Checkbox label="подкатегория" />
                                <Checkbox label="подкатегория" />
                                <Checkbox label="подкатегория" />
                                <Checkbox label="подкатегория" />
                                <Checkbox label="подкатегория" />
                            </div>
                            <div className="search__content-categories-results">
                                <div className="search__content-categories-results-title">Выводить результаты:</div>
                                <div className="search__content-categories-results-pages">
                                    По
                                    <input type="number" value="9" />
                                    на страницу
                                </div>
                            </div>
                        </nav>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
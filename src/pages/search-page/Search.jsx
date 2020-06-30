import React from 'react';
import { Dropdown, Checkbox } from 'semantic-ui-react';
import Categories from '../home-page/Categories';
import PriceFilter from '../list-page/PriceFilter';
import searchIcon from '../../assets/images/IconSearch.png';
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
                            <form className="search__content-navbar-form">
                                <input type="text" placeholder="Введите название товара" />
                                <button type="submit">
                                    <img src={searchIcon} alt="search icon" />
                                </button>
                            </form>
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
                        <div className="search__content-products">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import './MobileMenu.scss';

const MobileMenu = (props) => {
    const { categories, cart, subcategories } = props;
    const [burgerOpen, setBurgerOpen] = useState(false);

    const burger = (
        <svg viewBox="0 -53 384 384">
            <path fill="#1D97F0" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path fill="#1D97F0" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path fill="#1D97F0" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
    );

    const close = (
        <svg viewBox="0 0 492 492">
            <path
                fill="#1D97F0"
                d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
            />
        </svg>
    );

    return (
        <div className="header-menu">
            <button
                type="button"
                className="header-menu__burger"
                onClick={() => setBurgerOpen(!burgerOpen)}
            >
                {burgerOpen ? close : burger}
            </button>
            <Link to="/basket" className="header-menu__cart">
                <svg viewBox="0 0 426.667 426.667" className="header-menu__cart-icon">
                    <path d="M128,341.333c-23.573,0-42.453,19.093-42.453,42.667s18.88,42.667,42.453,42.667c23.573,0,42.667-19.093,42.667-42.667
                            S151.573,341.333,128,341.333z"
                    />
                    <path d="M151.467,234.667H310.4c16,0,29.973-8.853,37.333-21.973L424,74.24c1.707-2.987,2.667-6.507,2.667-10.24
                            c0-11.84-9.6-21.333-21.333-21.333H89.92L69.653,0H0v42.667h42.667L119.36,204.48l-28.8,52.267
                            c-3.307,6.187-5.227,13.12-5.227,20.587C85.333,300.907,104.427,320,128,320h256v-42.667H137.067
                            c-2.987,0-5.333-2.347-5.333-5.333c0-0.96,0.213-1.813,0.64-2.56L151.467,234.667z"
                    />
                    <path d="M341.333,341.333c-23.573,0-42.453,19.093-42.453,42.667s18.88,42.667,42.453,42.667
                            C364.907,426.667,384,407.573,384,384S364.907,341.333,341.333,341.333z"
                    />
                </svg>
                <p className="goods-num">
                    {cart && cart.length}
                </p>
            </Link>
            <div className={burgerOpen ? 'header-menu__content show' : 'header-menu__content hide'}>
                <Link
                    className="header-menu__content-link"
                    to="/"
                    onClick={() => setBurgerOpen(false)}
                >
                    Главная страница
                </Link>
                <div className="header-menu__content-link">
                    Каталог товаров
                </div>
                <div className="header-menu__content-subcategories">
                    {categories && categories.map(item => (
                        <div
                            key={item._id}
                            className="header-menu__content-subcategories-item"
                        >
                            <Link
                                className="header-menu__content-subcategory"
                                onClick={() => setBurgerOpen(false)}
                                key={item._id}
                                to={`/products/${item._id}`}
                            >
                                {item.name}
                            </Link>
                            <List bulleted horizontal>
                                {subcategories && subcategories
                                    .filter(subcategory => subcategory.category === item._id)
                                    .map(subcategory => (
                                        <List.Item
                                            onClick={() => setBurgerOpen(false)}
                                            key={subcategory._id}
                                        >
                                            <Link to={`/products/${subcategory._id}`}>
                                                {subcategory.name}
                                            </Link>
                                        </List.Item>
                                    ))}
                            </List>
                        </div>
                    ))}
                </div>
                <Link
                    className="header-menu__content-link"
                    to="/tracking"
                    onClick={() => setBurgerOpen(false)}
                >
                    Отслеживание товара
                </Link>
                <Link
                    className="header-menu__content-link"
                    onClick={() => setBurgerOpen(false)}
                    to="/about"
                >
                    О нас
                </Link>
                <Link
                    className="header-menu__content-link"
                    onClick={() => setBurgerOpen(false)}
                    to="/delivery"
                >
                    Доставка и оплата
                </Link>
                <Link
                    className="header-menu__content-link"
                    onClick={() => setBurgerOpen(false)}
                    to="/contacts"
                >
                    Контакты
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
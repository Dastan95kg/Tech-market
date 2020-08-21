import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import './Header.scss';

const Header = ({
    cart, findProducts, searchProducts,
    redirect
}) => {
    return (
        <div className="header">
            <Link to="/" className="header__logo">
                <div className="tech">
                    <span className="t">T</span>
                    E
                    <br />
                    C
                    <span>H</span>
                </div>
                <div className="market">market</div>
            </Link>
            <nav className="header__nav">
                <div className="header__nav-links">
                    <div className="title">Онлайн-магазин электроники №1 в Бишкеке!</div>
                    <div className="container">
                        <Link to="/about">О нас</Link>
                        <Link to="/delivery">Вопросы и ответы</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                </div>
                <div className="header__nav-search">
                    <Link to="/tracking" className="track">Отслеживание товара</Link>
                    <HeaderSearch
                        findProducts={findProducts}
                        searchProducts={searchProducts}
                        redirect={redirect}
                    />
                    <Link className="cart" to="/basket">
                        <svg viewBox="0 0 426.667 426.667" className="cart__icon">
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
                        <div className="cart__data">
                            <p className="goods-num">
                                {cart && cart.length}
                            </p>
                            <p className="goods-label">Товаров в корзине</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;

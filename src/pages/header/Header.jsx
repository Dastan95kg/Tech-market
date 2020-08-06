import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import './Header.scss';
import cartImg from '../../assets/images/supermarket.png';

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
                        <img src={cartImg} alt="cart" />
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

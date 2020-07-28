import React from 'react';
import { Link } from 'react-router-dom';
import { Select, Input } from 'semantic-ui-react';
import './Header.scss';
import cartImg from '../../assets/images/supermarket.png';

const options = [
    { key: 'all', text: 'По всем категориям', value: 'all' },
    { key: 'articles', text: 'По цене', value: 'articles' },
    { key: 'products', text: 'По популярности', value: 'products' }
];

const Header = (props) => {
    const { cart } = props;

    const getCartLength = () => {
        return;
    };

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
                    <form className="search-form">
                        <div className="search-container">
                            <Input type="text" placeholder="Поиск..." action>
                                <input className="search-field" />
                                <Select compact options={options} defaultValue="all" />
                            </Input>
                        </div>
                        <a className="searchSvg" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" xmlSpace="preserve" width="512px" height="512px">
                                <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732    c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667    c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z" dataoriginal="#000000" className="active-path" dataoldcolor="#000000" fill="#FFFFFF" />
                            </svg>
                        </a>
                    </form>
                    <Link className="cart" to="/basket">
                        <img src={cartImg} alt="cart" />
                        <div className="cart__data">
                            <p className="goods-num">
                                {localStorage.getItem('cart')
                                    ? JSON.parse(localStorage.getItem('cart')).length
                                    : 0}
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

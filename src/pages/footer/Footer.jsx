import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__col">
                    <Link to="/about">О нас</Link>
                    <Link to="/delivery">Доставка и оплата</Link>
                </div>
                <div className="footer__col">
                    <Link to="/basket">Корзина</Link>
                    <Link to="/tracking">Отслеживание товара</Link>
                </div>
                <div className="footer__col">
                    <Link to="/contacts">Контакты</Link>
                    <a href="/">Служба поддержки</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
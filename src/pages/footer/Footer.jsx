import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__col">
                    <a href="/">О нас</a>
                    <a href="/">Доставка и оплата</a>
                </div>
                <div className="footer__col">
                    <a href="/">Корзина</a>
                    <a href="/">Отслеживание товара</a>
                </div>
                <div className="footer__col">
                    <a href="/">Контакты</a>
                    <a href="/">Служба поддержки</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
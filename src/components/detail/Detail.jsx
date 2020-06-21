import React from 'react';
import { Rating } from 'semantic-ui-react';
import Categories from '../categories/Categories';
import DetailSlider from '../slider/DetailSlider';
import GoodCart from '../mainPage/GoodCart';
import './Detail.scss';

const Detail = () => {
    return (
        <section className="detail">
            <div className="detail__warehouse">Нет на складе</div>
            <div className="detail__wrapper">
                <Categories />
                <div className="detail__main">
                    <DetailSlider />
                    <div className="detail__main-content">
                        <div className="secondary-info">
                            <div className="code">Код товара: 12345678</div>
                            <div className="is-present">В наличии</div>
                        </div>
                        <div className="title">Телевизор Philips ABC123QZ9</div>
                        <div className="detail__main-rating">
                            <Rating maxRating={5} clearable size="massive" disabled />
                            <div className="votes">28 голосов</div>
                        </div>
                        <div className="detail__main-price">
                            Цена
                            <span className="price">12999</span>
                            сом
                        </div>
                        <div className="detail__main-quantity">
                            Количество:
                            <div className="container">
                                <button type="button" className="container-btn">
                                    <span>-</span>
                                </button>
                                <span className="container-quantity">1</span>
                                <button type="button" className="container-btn">
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                        <button type="button" className="add-to-cart">Добавить в корзину</button>
                    </div>
                </div>
            </div>
            <div className="detail__info">
                <div className="detail__info-buttons">
                    <a href="/detail" className="detail__info-btn">Характеристики</a>
                    <a href="/detail" className="detail__info-btn">
                        Отзывы (
                        <span>12</span>
                        )
                    </a>
                </div>
                <div className="detail__info-content">
                    <p className="text">
                        — Славная она, — говорил он, — у ней всегда можно денег достать. Богата как жид, может сразу пять тысяч выдать, а и рублевым закладом не брезгает. Наших много у ней перебывало. Только стерва ужасная...
                        И он стал рассказывать, какая она злая, капризная, что стоит только одним днем просрочить заклад, и пропала вещь. Дает вчетверо меньше, чем стоит вещь, а процентов по пяти и даже по семи берет в месяц и т. д. Студент разболтался и сообщил, кроме того, что у старухи есть сестра, Лизавета, которую она, такая маленькая и гаденькая, бьет поминутно и держит в совершенном порабощении, как маленького ребенка, тогда как Лизавета, по крайней мере, восьми вершков росту...
                    </p>
                    <p className="text">Таблица характеристик: самая простая, прямоугольная, обводка 1рх черная.</p>
                </div>
            </div>
            <div className="detail__similar">
                <h3 className="detail__similar-title">Похожее</h3>
                <div className="detail__similar-content">
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                </div>
            </div>
        </section>
    );
};

export default Detail;
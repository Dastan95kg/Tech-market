import React from 'react';
import { Rating } from 'semantic-ui-react';
import Categories from '../home-page/Categories';
import DetailSlider from '../slider/DetailSlider';
import GoodCart from '../home-page/GoodCart';
import './Detail.scss';
// import Characteristics from './Characteristics';
import Feedbacks from './Feedbacks';
import ProductQuantity from './ProductQuantity';

const Detail = () => {
    return (
        <section className="detail">
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
                            <ProductQuantity />
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
                    <Feedbacks />
                </div>
            </div>
            <div className="detail__similar">
                <h3 className="detail__similar-title">Акционные товары</h3>
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
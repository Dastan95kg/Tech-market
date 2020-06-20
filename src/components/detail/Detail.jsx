import React from 'react';
import { Rating } from 'semantic-ui-react';
import Categories from '../categories/Categories';
import DetailSlider from '../slider/DetailSlider';
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
                            <Rating maxRating={5} clearable />
                            <div className="votes">28 голосов</div>
                        </div>
                        <div className="detail__main-price">
                            <span>12999</span>
                        </div>
                        <div className="detail__main-quantity">
                            Количество:
                            <div className="container">
                                <button type="button">
                                    <span>-</span>
                                </button>
                                <span>1</span>
                                <button type="button">
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import DetailSlider from '../slider/DetailSlider';
import GoodCart from '../home-page/GoodCart';
import './Detail.scss';
import Characteristics from './Characteristics';
import Feedbacks from './Feedbacks';
import FeedbackForm from './FeedbackForm';

const Detail = (props) => {
    const {
        count, name, rating, old_price: oldPrice,
        price, discount, photos, features, _id: productId
    } = props.product;
    const { addProductToCart, cart } = props;

    const [characteristics, showCharacteristics] = useState(true);
    const [feedbacks, showFeedbacks] = useState(false);
    const [feedbackForm, showFeedbackForm] = useState(false);

    const setCharacteristics = () => {
        showCharacteristics(true);
        showFeedbacks(false);
        showFeedbackForm(false);
    };

    const setFeedbacks = () => {
        showCharacteristics(false);
        showFeedbacks(true);
        showFeedbackForm(false);
    };

    const setForm = () => {
        showCharacteristics(false);
        showFeedbacks(false);
        showFeedbackForm(true);
    };

    return (
        <section className="detail">
            <div className="detail__main">
                <DetailSlider photos={photos} />
                <div className="detail__main-content">
                    <div className="is-present">
                        {count > 0 ? 'В наличии' : 'Нет на складе'}
                    </div>
                    <div className="title">{name}</div>
                    <div className="detail__main-rating">
                        <Rating
                            maxRating={5}
                            clearable
                            size="massive"
                            disabled
                            rating={rating}
                        />
                    </div>
                    {discount > 0 ? (
                        <div className="detail__main-price">
                            <div className="detail__main-price-label">Цена:</div>
                            <div className="detail__main-price-content">
                                <div className="detail__main-price-oldPrice">
                                    <span>{oldPrice}</span>
                                    сом
                                </div>
                                <div className="detail__main-price-newPrice">
                                    <span className="price">{price}</span>
                                    сом
                                </div>
                            </div>
                            <div className="detail__main-price-discount">
                                -
                                <span>{discount}</span>
                                %
                            </div>
                        </div>
                    ) : (
                            <div className="detail__main-price">
                                <div className="detail__main-price-label">Цена:</div>
                                <div className="detail__main-price-newPrice">
                                    <span className="price">10999</span>
                                    сом
                                </div>
                            </div>
                        )}
                    {/* <button
                        type="button"
                        className="add-to-cart"
                        onClick={() => addProductToCart({ id: productId, quantity: 1 })}
                    >
                        Добавить в корзину
                    </button> */}
                    {cart && cart.map(item => item.id).includes(productId)
                        ? (
                            <button
                                disabled
                                type="button"
                                className="content__cart-added"
                            >
                                Добавлено в корзину
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="add-to-cart"
                                onClick={() => addProductToCart({ id: productId, quantity: 1 })}
                            >
                                Добавить в корзину
                            </button>
                        )}
                </div>
            </div>
            <div className="detail__info">
                <div className="detail__info-buttons">
                    <button
                        type="button"
                        onClick={setCharacteristics}
                        className={characteristics ? 'detail__info-btn active' : 'detail__info-btn'}
                    >
                        Характеристики
                    </button>
                    <button
                        type="button"
                        onClick={setFeedbacks}
                        className={feedbacks ? 'detail__info-btn active' : 'detail__info-btn'}
                    >
                        Отзывы
                        <span>(12)</span>
                    </button>
                    <button
                        onClick={setForm}
                        type="button"
                        className={feedbackForm ? 'detail__info-btn active' : 'detail__info-btn'}
                    >
                        Оставить отзыв
                    </button>
                </div>
                <div className="detail__info-content">
                    {characteristics && <Characteristics features={features} />}
                    {feedbacks && <Feedbacks />}
                    {feedbackForm && <FeedbackForm />}
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
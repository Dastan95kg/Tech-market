import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DetailSlider from '../slider/DetailSlider';
import GoodCart from '../home-page/GoodCart';
import './Detail.scss';
import Characteristics from './Characteristics';
import Feedbacks from './Feedbacks';
import FeedbackForm from './FeedbackForm';
import ProductQuantity from './ProductQuantity';

const Detail = (props) => {
    const { count, name, rating } = props.product;
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
                <DetailSlider />
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
                        {/* <div className="votes">28 голосов</div> */}
                    </div>
                    <div className="detail__main-price">
                        Цена:
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
            <div className="detail__info">
                <div className="detail__info-buttons">
                    <Link onClick={setCharacteristics} href="/detail" className={characteristics ? 'detail__info-btn active' : 'detail__info-btn'}>Характеристики</Link>
                    <Link onClick={setFeedbacks} href="/detail" className={feedbacks ? 'detail__info-btn active' : 'detail__info-btn'}>
                        Отзывы
                        <span>(12)</span>
                    </Link>
                    <Link onClick={setForm} href="/detail" className={feedbackForm ? 'detail__info-btn active' : 'detail__info-btn'}>Оставить отзыв</Link>
                </div>
                <div className="detail__info-content">
                    {characteristics && <Characteristics />}
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
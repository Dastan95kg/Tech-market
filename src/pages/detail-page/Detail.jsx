import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import DetailSlider from '../slider/DetailSlider';
import GoodCart from '../home-page/GoodCart';
import Characteristics from './Characteristics';
import Feedbacks from './Feedbacks';
import FeedbackForm from './FeedbackForm';
import Preloader from '../preloader/Preloader';
import './Detail.scss';

const Detail = (props) => {
    const {
        product: { product, feedbacks: feedbacksList },
        cart,
        addProductToCart,
        promotionProducts,
        submitFeedback,
        match,
        isModalOn,
        closeFeedbackModal,
        error
    } = props;

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

    if (!product) {
        return <Preloader />;
    }

    return (
        <section className="detail">
            <div className="detail__main">
                <DetailSlider photos={product.photos} />
                <div className="detail__main-content">
                    <div className="is-present">
                        {product.count > 0 ? 'В наличии' : 'Нет на складе'}
                    </div>
                    <div className="title">{product.name}</div>
                    <div className="detail__main-rating">
                        <Rating
                            maxRating={5}
                            clearable
                            size="massive"
                            disabled
                            rating={product.rating}
                        />
                    </div>
                    {product.discount > 0 ? (
                        <div className="detail__main-price">
                            <div className="detail__main-price-label">Цена:</div>
                            <div className="detail__main-price-content">
                                <div className="detail__main-price-oldPrice">
                                    <span>{product.old_price}</span>
                                    сом
                                </div>
                                <div className="detail__main-price-newPrice">
                                    <span className="price">{product.price}</span>
                                    сом
                                </div>
                            </div>
                            <div className="detail__main-price-discount">
                                -
                                <span>{product.discount}</span>
                                %
                            </div>
                        </div>
                    ) : (
                            <div className="detail__main-price">
                                <div className="detail__main-price-label">Цена:</div>
                                <div className="detail__main-price-newPrice">
                                    <span className="price">{product.price}</span>
                                    сом
                                </div>
                            </div>
                        )}
                    <button
                        disabled={cart && cart.map(item => item.id).includes(product._id)}
                        type="button"
                        onClick={() => addProductToCart({ id: product._id, quantity: 1 })}
                        className={cart && cart.map(item => item.id).includes(product._id)
                            ? 'content__cart added'
                            : 'content__cart notAdded'}
                    >
                        {cart && cart.map(item => item.id).includes(product._id)
                            ? 'Добавлено в корзину' : 'Добавить в корзину'}
                    </button>
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
                        <span>{`(${feedbacksList.length})`}</span>
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
                    {characteristics && <Characteristics features={product.features} />}
                    {feedbacks && <Feedbacks feedbacks={feedbacksList} />}
                    {feedbackForm && (
                        <FeedbackForm
                            submitFeedback={submitFeedback}
                            id={match.params.id}
                            isModalOn={isModalOn}
                            closeFeedbackModal={closeFeedbackModal}
                            showFeedbacks={showFeedbacks}
                            showFeedbackForm={showFeedbackForm}
                            error={error}
                        />
                    )}
                </div>
            </div>
            <div className="detail__similar">
                <h3 className="detail__similar-title">Акционные товары</h3>
                <div className="detail__similar-content">
                    {promotionProducts
                        && promotionProducts.filter(item => item._id !== product._id)
                            .map(item => (
                                <GoodCart
                                    key={item._id}
                                    {...item}
                                    addProductToCart={addProductToCart}
                                    cart={cart}
                                />
                            ))}
                </div>
            </div>
        </section>
    );
};

export default Detail;
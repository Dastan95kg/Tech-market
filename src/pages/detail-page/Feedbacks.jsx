import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Rating } from 'semantic-ui-react';
import Feedback from './Feedback';
import arrow from '../../assets/images/Arrow.png';

const Feedbacks = () => {
    return (
        <>
            <Form />
        </>
    );
};

const Form = () => {
    const [stars, setStars] = useState(0);

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            feedback: '',
            rating: stars
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    const handleRate = (e, { rating }) => {
        setStars(rating);
    };

    return (
        <>
            <form className="form" onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    placeholder="Ваше имя"
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Ваш электронный адрес"
                />
                <textarea
                    type="text"
                    id="feedback"
                    name="feedback"
                    onChange={formik.handleChange}
                    value={formik.values.feedback}
                    placeholder="Оставьте ваш отзыв"
                />
                <div className="form__rating">
                    Оцените товар:
                    <Rating
                        maxRating={5}
                        value={formik.values.rating}
                        onRate={handleRate}
                        onChange={formik.handleChange}
                    />
                </div>
                <button className="form__btn" type="submit">Оставить комментарий</button>
            </form>
            <span className="line" />
            <div className="feedbacks">
                <Feedback />
                <Feedback />
                <Feedback />
                <div className="feedbacks__more">
                    <a href="/detail" className="feedbacks__more-content">
                        Показать больше отзывов
                        <img className="arrow" src={arrow} alt="arrow" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Feedbacks;
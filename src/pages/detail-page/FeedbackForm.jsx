import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Rating, Message } from 'semantic-ui-react';

const FeedbackForm = ({ submitFeedback, id, feedback }) => {
    const [rating, setRating] = useState(1);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            content: ''
        },
        onSubmit: values => {
            const body = {
                ...values,
                rating,
                product_id: id
            };
            submitFeedback(body);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Заполните это поле'),
            email: Yup.string()
                .email('Неверный формат электронной почты')
                .required('Заполните это поле')
        })
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Ваше имя"
            />
            {formik.errors.name && formik.touched.name && (
                <p className="order-form__error">{formik.errors.name}</p>
            )}
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Ваш электронный адрес"
            />
            {formik.errors.email && formik.touched.email && (
                <p className="order-form__error">{formik.errors.email}</p>
            )}
            <textarea
                type="text"
                id="content"
                name="content"
                onChange={formik.handleChange}
                value={formik.values.content}
                placeholder="Оставьте ваш отзыв"
            />
            <div className="form__rating">
                Оцените товар:
                <Rating
                    name="rating"
                    maxRating={5}
                    value={rating}
                    defaultRating={1}
                    onRate={(event, data) => setRating(data.rating)}
                />
            </div>
            <button className="form__btn" type="submit">Оставить комментарий</button>
            {feedback && feedback.message && (
                <Message
                    content="Вам нужно купить товар, чтобы оставить отзыв о нем"
                    negative
                />
            )}
        </form>
    );
};

export default FeedbackForm;
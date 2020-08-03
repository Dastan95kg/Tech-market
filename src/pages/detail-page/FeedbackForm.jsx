import React from 'react';
import { useFormik, Field } from 'formik';
import RatingComponent from './Rating';

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            feedback: '',
            rating: 0,
            content: ''
        },
        onSubmit: values => {
            console.log(values);
        }
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
                id="content"
                name="content"
                onChange={formik.handleChange}
                value={formik.values.content}
                placeholder="Оставьте ваш отзыв"
            />
            <div className="form__rating">
                Оцените товар:
                <Field
                    maxRating={5}
                    name="rating"
                    component={RatingComponent}
                />
            </div>
            <button className="form__btn" type="submit">Оставить комментарий</button>
        </form>
    );
};

export default FeedbackForm;
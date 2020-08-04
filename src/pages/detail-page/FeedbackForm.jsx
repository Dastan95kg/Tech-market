import React from 'react';
import { useFormik } from 'formik';
import { Rating } from 'semantic-ui-react';

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            feedback: '',
            rating: 0
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
                id="feedback"
                name="feedback"
                onChange={formik.handleChange}
                value={formik.values.feedback}
                placeholder="Оставьте ваш отзыв"
            />
            <div className="form__rating">
                Оцените товар:
                <Rating
                    name="rating"
                    maxRating={5}
                    value={formik.values.rating}
                />
            </div>
            <button className="form__btn" type="submit">Оставить комментарий</button>
        </form>
    );
};

export default FeedbackForm;
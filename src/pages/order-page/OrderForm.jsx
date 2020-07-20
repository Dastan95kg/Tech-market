import React from 'react';
import { useFormik } from 'formik';
import { Dropdown } from 'semantic-ui-react';
import './OrderForm.scss';

const OrderForm = () => {
    const options = [
        { key: 1, text: 'ул. Юнусалиева 46', value: 1 },
        { key: 2, text: 'ул. Абдрахманова 120', value: 2 },
        { key: 3, text: 'ул. Горького 12', value: 3 },
    ];

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: null,
            delivery: 'courier',
            deliveryAddress: '',
            comment: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form className="order-form" onSubmit={formik.handleSubmit}>
            <div className="order-form__title">Ваши данные</div>
            <div className="order-form__subtitle">Все поля обязательны для заполнения!</div>
            <div className="order-form__userData">
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    placeholder="ФИО"
                />
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Электронный адрес"
                    className="email"
                />
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder="Номер телефона"
                />
            </div>
            <div className="order-form__title">Доставка</div>
            {/* <div className="order-form__delivery-radio">
                <label htmlFor="courier">
                    <input id="courier" type="radio" name="delivery" checked />
                    Курьер
                </label>
                <label htmlFor="self-pickup">
                    <input id="self-pickup" type="radio" name="delivery" />
                    Самовывоз
                </label>
            </div> */}
            <div className="order-form__container">
                <div className="order-form__container-content">
                    <label htmlFor="courier" className="order-form__container-radio">
                        <input id="courier" type="radio" name="delivery" checked />
                        Курьер
                    </label>
                    <div className="order-form__delivery-city">Город: Бишкек</div>
                    <input
                        className="order-form__delivery-address"
                        name="deliveryAddress"
                        placeholder="Адрес доставки"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.deliveryAddress}
                    />
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        className="order-form__delivery-comment"
                    />
                </div>
                <div className="order-form__container-content">
                    <label htmlFor="self-pickup" className="order-form__container-radio">
                        <input id="self-pickup" type="radio" name="delivery" />
                        Самовывоз
                    </label>
                    <div className="order-form__delivery-city">Город: Бишкек</div>
                    <div className="order-form__container-shopAddress">
                        <span>Адрес магазина</span>
                        <Dropdown
                            disabled
                            selection
                            options={options}
                        />
                    </div>
                    <textarea
                        disabled
                        name="comment"
                        id="comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        className="order-form__delivery-comment"
                    />
                </div>
            </div>
            <div className="order-form__payment">
                <div className="order-form__title">Оплата</div>
                <div className="order-form__subtitle">Оплата наличными при получении!</div>
                <div className="order-form__payment-total">
                    К оплате:
                    <span>100500 сом</span>
                </div>
                <div className="order-form__change">
                    Сдача с:
                    <input type="number" />
                    сом
                </div>
            </div>
            <div className="order-form__buttons">
                <button type="button">Вернуться</button>
                <button type="submit">Оформить заказ</button>
            </div>
        </form>
    );
};

export default OrderForm;
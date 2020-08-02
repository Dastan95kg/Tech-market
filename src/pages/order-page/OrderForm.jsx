import React from 'react';
import { useFormik } from 'formik';
import { Dropdown } from 'semantic-ui-react';
import './OrderForm.scss';

const OrderForm = (props) => {
    const { dispatchNewOrder, tempCart, products } = props;
    const priceList = [];
    products.forEach(product => {
        tempCart.forEach(item => {
            return item.id === product._id && priceList.push(item.quantity * product.price);
        });
    });
    const totalPrice = priceList.reduce((counter, price) => counter + price, 0);

    const options = [
        { key: 1, text: 'ул. Юнусалиева 46', value: 1 },
        { key: 2, text: 'ул. Абдрахманова 120', value: 2 },
        { key: 3, text: 'ул. Горького 12', value: 3 }
    ];

    const formik = useFormik({
        initialValues: {
            delivery: true,
            name: '',
            email: '',
            phone_number: null,
            adress: '',
            products: [],
            give_money_count: 0,
            comment: ''
        },
        onSubmit: values => {
            const body = {
                ...values,
                products: tempCart,
                promo_code: '5f24aaaa7f9b5639ecf76449'
            };
            dispatchNewOrder(body);
        }
    });

    return (
        <form className="order-form" onSubmit={formik.handleSubmit}>
            <div className="order-form__title">Ваши данные</div>
            <div className="order-form__subtitle">Все поля обязательны для заполнения!</div>
            <div className="order-form__userData">
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
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
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                    placeholder="Номер телефона"
                />
            </div>
            <div className="order-form__title">Доставка</div>
            <div className="order-form__container">
                <div className="order-form__container-content">
                    <label htmlFor="courier" className="order-form__container-radio">
                        <input
                            id="courier"
                            type="radio"
                            name="delivery"
                            checked
                            value="true"
                        />
                        Курьер
                    </label>
                    <div className="order-form__delivery-city">Город: Бишкек</div>
                    <input
                        className="order-form__delivery-address"
                        name="adress"
                        placeholder="Адрес доставки"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.adress}
                    />
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        className="order-form__delivery-comment"
                    />
                </div>
                <div className="order-form__container-content">
                    <label htmlFor="self-pickup" className="order-form__container-radio">
                        <input
                            id="self-pickup"
                            type="radio"
                            name="delivery"
                            value="false"
                        />
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
                        id="self-pickup__comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        onChange={formik.handleChange}
                        className="order-form__delivery-comment"
                    />
                </div>
            </div>
            <div className="order-form__payment">
                <div className="order-form__title">Оплата</div>
                <div className="order-form__subtitle">Оплата наличными при получении!</div>
                <div className="order-form__payment-total">
                    К оплате:
                    <div>
                        <span>{totalPrice}</span>
                        сом
                    </div>
                </div>
                <div className="order-form__change">
                    Сдача с:
                    <input
                        type="number"
                        name="give_money_count"
                        value={formik.values.give_money_count}
                        onChange={formik.handleChange}
                    />
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
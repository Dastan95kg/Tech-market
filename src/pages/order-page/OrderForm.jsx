import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Dropdown, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './OrderForm.scss';

const OrderForm = (props) => {
    const {
        dispatchNewOrder, tempCart, products,
        promoCode, history
    } = props;

    const defineFinalPrice = (productsList, cart, discount = 0) => {
        const priceList = [];
        productsList.forEach(product => {
            cart.forEach(item => {
                return item.id === product._id && priceList.push(item.quantity * product.price);
            });
        });
        let totalPrice = priceList.reduce((counter, price) => counter + price, 0);
        if (discount > 0) {
            totalPrice -= (totalPrice / 100) * discount;
        }
        return totalPrice;
    };

    const [isOpen, open] = useState(true);

    const options = [
        { key: 1, text: 'ул. Юнусалиева 46', value: 1 },
        { key: 2, text: 'ул. Абдрахманова 120', value: 2 },
        { key: 3, text: 'ул. Горького 12', value: 3 }
    ];

    const formik = useFormik({
        initialValues: {
            delivery: '',
            name: '',
            email: '',
            phone_number: null,
            adress: '',
            products: [],
            give_money_count: '',
            comment: ''
        },
        onSubmit: values => {
            const body = {
                ...values,
                products: tempCart,
                promo_code: promoCode && promoCode.promocode.code
            };
            console.log(body);
            open(true);
            // dispatchNewOrder(body);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Минимум 3 буквы*')
                .max(15, 'Максимум 15 букв*')
                .required('Обязателен к заполнению!'),
            email: Yup.string()
                .email('Неверный формат электронной почты*')
                .required('Обязателен к заполнению!'),
            phone_number: Yup.string()
                .required('Обязателен к заполнению!')
                .typeError('Укажите номер телефона пожалуйста*')
                .length(9, 'Должно быть 10 цифр. Например: 0700123456'),
            delivery: Yup.boolean()
                .required('Выберите вид доставки*'),
            give_money_count: Yup.number()
                .required('Укажите сумму оплаты для сдачи*')
        })
    });

    return (
        <form
            className="order-form"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
        >
            <div className="order-form__title">Ваши данные</div>
            <div className="order-form__subtitle">Все поля обязательны для заполнения!</div>
            <div className="order-form__userData">
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="ФИО"
                    className={formik.errors.name && formik.touched.name && 'error'}
                />
                {formik.errors.name && formik.touched.name && (
                    <p className="order-form__error">{formik.errors.name}</p>
                )}
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Электронный адрес"
                    className={formik.errors.email && formik.touched.email && 'error'}
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="order-form__error">{formik.errors.email}</p>
                )}
                <input
                    id="phone_number"
                    name="phone_number"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                    placeholder="Номер телефона"
                    className={formik.errors.phone_number && formik.touched.phone_number && 'error'}
                />
                {formik.errors.phone_number && formik.touched.phone_number && (
                    <p className="order-form__error">{formik.errors.phone_number}</p>
                )}
            </div>
            <div className="order-form__title">Доставка</div>
            {formik.errors.delivery && formik.touched.delivery && (
                <p className="order-form__error">{formik.errors.delivery}</p>
            )}
            {/* DELIVERY RADIO OPTIONS */}
            <div className="order-form__container">
                <div className="order-form__container-content">
                    <label htmlFor="courier" className="order-form__container-radio">
                        <input
                            id="courier"
                            type="radio"
                            name="delivery"
                            checked={formik.values.delivery === 'true'}
                            onChange={formik.handleChange}
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
                        disabled={formik.values.delivery === 'false'}
                    />
                    <textarea
                        id="delivery__comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        className="order-form__delivery-comment"
                        name={formik.values.delivery === 'true' && 'comment'}
                        disabled={formik.values.delivery === 'false'}
                    />
                </div>
                <div className="order-form__container-content">
                    <label htmlFor="self-pickup" className="order-form__container-radio">
                        <input
                            id="self-pickup"
                            type="radio"
                            name="delivery"
                            value="false"
                            onChange={formik.handleChange}
                            checked={formik.values.delivery === 'false'}
                        />
                        Самовывоз
                    </label>
                    <div className="order-form__delivery-city">Город: Бишкек</div>
                    <div className="order-form__container-shopAddress">
                        <span>Адрес магазина</span>
                        <Dropdown
                            disabled={formik.values.delivery === 'true'}
                            selection
                            options={options}
                        />
                    </div>
                    <textarea
                        id="self-pickup__comment"
                        placeholder="Комментарий к заказу"
                        type="text"
                        onChange={formik.handleChange}
                        className="order-form__delivery-comment"
                        name={formik.values.delivery === 'false' && 'comment'}
                        disabled={formik.values.delivery === 'true'}
                    />
                </div>
            </div>
            {/* PAYMENT */}
            <div className="order-form__payment">
                <div className="order-form__title">Оплата</div>
                <div className="order-form__subtitle">Оплата наличными при получении!</div>
                <div className="order-form__payment-total">
                    К оплате:
                    {promoCode && promoCode.promocode && (
                        <div>
                            <span>
                                {defineFinalPrice(products, tempCart, promoCode.promocode.discount)}
                            </span>
                            сом
                        </div>
                    )}
                    {!promoCode && (
                        <div>
                            <span>
                                {defineFinalPrice(products, tempCart)}
                            </span>
                            сом
                        </div>
                    )}
                </div>
                <div className="order-form__change">
                    Сдача с:
                    <input
                        type="number"
                        name="give_money_count"
                        value={formik.values.give_money_count}
                        onChange={formik.handleChange}
                        onBlur={formik.onBlur}
                        className={formik.errors.give_money_count && formik.touched.give_money_count && 'error'}
                    />
                    сом
                    {formik.errors.give_money_count && formik.touched.give_money_count && (
                        <p className="order-form__error">{formik.errors.give_money_count}</p>
                    )}
                </div>
            </div>
            <div className="order-form__buttons">
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="goBack"
                >
                    Вернуться
                </button>
                <button type="submit">Оформить заказ</button>
                <Modal
                    centered={false}
                    open={isOpen}
                    onClose={() => open(false)}
                    onOpen={() => open(true)}
                >
                    <Modal.Header>Благодарим за заказ!</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            Заказ успешно оформлен. Проверьте вашу почту, пожалуйста.
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Link to="/" onClick={() => open(false)}>На главную</Link>
                    </Modal.Actions>
                </Modal>
            </div>
        </form>
    );
};

export default OrderForm;
import React from 'react';
import BasketItem from './BasketItem';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import './Cart.scss';

const Cart = (props) => {
    const { products } = props;
    const storageData = JSON.parse(localStorage.getItem('cart'));
    const cartProducts = products && products.filter(product => storageData && storageData.includes(product._id));

    return (
        <>
            {
                storageData && storageData.length ? (
                    <div className="basket__content">
                        <div className="basket__content-header">Корзина</div>
                        <div className="basket__content-container">
                            {cartProducts && cartProducts.map(product => (
                                <BasketItem {...product} key={product._id} />
                            ))}
                        </div>
                        <CartTotal products={cartProducts} />
                        <div className="basket__content-buttons">
                            <button type="button" className="return">Вернуться</button>
                            <button type="button" className="proceed">Перейти к оформлению заказа</button>
                        </div>
                    </div>
                )
                    : <EmptyCart />
            }
        </>
    );
};

export default Cart;
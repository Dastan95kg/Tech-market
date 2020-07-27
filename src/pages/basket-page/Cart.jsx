import React from 'react';
import BasketItem from './BasketItem';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import './Cart.scss';

const Cart = (props) => {
    const {
        products,
        removeProductFromCart,
        increaseProductAmount,
        decreaseProductAmount,
        history,
        cart
    } = props;
    const cartProducts = products && products.filter(product => cart && cart.includes(product._id));

    return (
        <>
            {
                cartProducts && cartProducts.length ? (
                    <div className="basket__content">
                        <div className="basket__content-header">Корзина</div>
                        <div className="basket__content-container">
                            {cartProducts && cartProducts.map(product => (
                                <BasketItem
                                    {...product}
                                    key={product._id}
                                    removeProduct={removeProductFromCart}
                                    increaseProductAmount={increaseProductAmount}
                                    decreaseProductAmount={decreaseProductAmount}
                                />
                            ))}
                        </div>
                        <CartTotal products={cartProducts} />
                        <div className="basket__content-buttons">
                            <button
                                type="button"
                                className="return"
                                onClick={() => history.goBack()}
                            >
                                Вернуться
                            </button>
                            <button
                                type="button"
                                className="proceed"
                                onClick={() => history.push('/order')}
                            >
                                Перейти к оформлению заказа
                            </button>
                        </div>
                    </div>
                )
                    : <EmptyCart header="Корзина" />
            }
        </>
    );
};

export default Cart;
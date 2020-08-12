import React from 'react';
import BasketItem from './BasketItem';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import './Cart.scss';

const Cart = (props) => {
    const {
        removeProductFromCart,
        history,
        cart,
        categories,
        increaseProductQuantity,
        decreaseProductQuantity,
        tempCart
    } = props;
    const { products_list: cartProducts, total_price: totalPrice } = cart;

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
                                    increaseProductQuantity={increaseProductQuantity}
                                    decreaseProductQuantity={decreaseProductQuantity}
                                    tempCart={tempCart}
                                />
                            ))}
                        </div>
                        <CartTotal
                            products={cartProducts}
                            totalPrice={totalPrice}
                            tempCart={tempCart}
                        />
                        <div className="basket__content-buttons">
                            <button
                                type="button"
                                className="goBack"
                                onClick={() => history.push('/')}
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
                    : (
                        <EmptyCart
                            header="Корзина"
                            history={history}
                            categories={categories}
                        />
                    )
            }
        </>
    );
};

export default Cart;
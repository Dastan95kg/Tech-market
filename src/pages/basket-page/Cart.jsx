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
        categories
    } = props;
    const { products_list: cartProducts } = cart;

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
                                />
                            ))}
                        </div>
                        <CartTotal products={cartProducts} />
                        <div className="basket__content-buttons">
                            <button
                                type="button"
                                className="return"
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
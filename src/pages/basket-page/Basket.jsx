import React from 'react';
import Categories from '../home-page/Categories';
import './Basket.scss';
// import Cart from './Cart';
import EmptyCart from './EmptyCart';

const Basket = () => {
    return (
        <section className="basket">
            <div className="basket__wrapper">
                <Categories />
                {/* <Cart /> */}
                <EmptyCart />
            </div>
        </section>
    );
};

export default Basket;
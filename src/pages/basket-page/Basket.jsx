import React from 'react';
import Cart from './Cart';
// import EmptyCart from './EmptyCart';

const Basket = () => {
    return (
        <section className="basket">
            <Cart />
            {/* <EmptyCart /> */}
        </section>
    );
};

export default Basket;
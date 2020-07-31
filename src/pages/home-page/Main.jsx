import React from 'react';
import GoodCart from './GoodCart';
import SliderContainer from '../slider/SliderContainer';
import './Main.scss';

const Main = (props) => {
    const {
        promotionProducts: { products },
        addProductToCart,
        cart
    } = props;

    return (
        <>
            <SliderContainer />
            <section className="popular">
                <h2>Акционные товары</h2>
                <div className="popular__goods">
                    {products && products.map(product => (
                        <GoodCart
                            {...product}
                            key={product._id}
                            addProductToCart={addProductToCart}
                            cart={cart}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Main;
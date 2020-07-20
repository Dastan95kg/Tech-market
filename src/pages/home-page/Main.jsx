import React from 'react';
import GoodCart from './GoodCart';
import SliderContainer from '../slider/SliderContainer';
import './Main.scss';

const Main = () => {
    return (
        <>
            <SliderContainer />
            <section className="popular">
                <h2>Акционные товары</h2>
                <div className="popular__goods">
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                    <GoodCart />
                </div>
            </section>
        </>
    );
};

export default Main;
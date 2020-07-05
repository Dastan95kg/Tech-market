import React from 'react';
import GoodCart from './GoodCart';
import Slider from '../slider/Slider';
import './Main.scss';

const Main = () => {
    return (
        <>
            <section className="slider-section">
                <Slider />
            </section>

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
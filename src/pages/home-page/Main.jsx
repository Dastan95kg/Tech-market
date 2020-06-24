import React from 'react';
import GoodCart from './GoodCart';
import Slider from '../slider/Slider';
import Categories from './Categories';
import './Main.scss';

const Main = () => {
    return (
        <div className="main-page">
            <section className="slider-section">
                <Categories />
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
        </div>
    );
};

export default Main;
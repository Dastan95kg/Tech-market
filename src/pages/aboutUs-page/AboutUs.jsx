import React from 'react';
import Categories from '../home-page/Categories';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <section className="about">
            <div className="about__wrapper">
                <Categories />
                <div className="about__content">
                    <div className="about__content-title">О нас</div>
                    <div className="about__content-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, suscipit aut. Id suscipit distinctio dolore laborum magni animi ipsum placeat fugiat neque doloribus exercitationem, nesciunt qui, accusamus quidem cumque aliquid?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
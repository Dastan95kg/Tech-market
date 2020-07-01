import React from 'react';
import Categories from '../home-page/Categories';
import './Delivery.scss';

const Delivery = () => {
    return (
        <section className="delivery">
            <div className="delivery__wrapper">
                <Categories />
                <div className="delivery__content">
                    <div className="delivery__content-title">Доставка и оплата</div>
                    <div className="delivery__content-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, suscipit aut. Id suscipit distinctio dolore laborum magni animi ipsum placeat fugiat neque doloribus exercitationem, nesciunt qui, accusamus quidem cumque aliquid?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
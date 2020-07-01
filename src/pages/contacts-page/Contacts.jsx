import React from 'react';
import Categories from '../home-page/Categories';
import './Contacts.scss';

const Delivery = () => {
    return (
        <section className="contacts">
            <div className="contacts__wrapper">
                <Categories />
                <div className="contacts__content">
                    <div className="contacts__content-title">Контакты</div>
                    <div className="contacts__content-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, suscipit aut. Id suscipit distinctio dolore laborum magni animi ipsum placeat fugiat neque doloribus exercitationem, nesciunt qui, accusamus quidem cumque aliquid?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
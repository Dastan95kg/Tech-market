import React from 'react';
import './Delivery.scss';

const Delivery = ({ questions }) => {
    return (
        <section className="delivery">
            <div className="delivery__content">
                <div className="delivery__content-title">Доставка и оплата</div>
                {questions && questions.map(obj => (
                    <div className="delivery__content-text" key={obj.id}>
                        <div className="delivery__content-text-question">{obj.question}</div>
                        <div className="delivery__content-text-answer">{obj.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Delivery;
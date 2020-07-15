import React from 'react';
import Feedback from './Feedback';
import arrow from '../../assets/images/Arrow.png';
import './Feedbacks.scss';

const Feedbacks = () => {
    return (
        <div className="feedbacks">
            <Feedback />
            <Feedback />
            <Feedback />
            <div className="feedbacks__more">
                <a href="/detail" className="feedbacks__more-content">
                    Показать больше отзывов
                        <img className="arrow" src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    );
};

export default Feedbacks;
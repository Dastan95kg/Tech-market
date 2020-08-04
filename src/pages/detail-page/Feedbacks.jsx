import React from 'react';
import Feedback from './Feedback';
import arrow from '../../assets/images/Arrow.png';
import './Feedbacks.scss';

const Feedbacks = ({ feedbacks }) => {
    return (
        <div className="feedbacks">
            {feedbacks.length ? feedbacks.map(feedback => (
                <Feedback {...feedback} key={feedback._id} />
            ))
                : <div>Нет отзывов</div>}
            {/* <div className="feedbacks__more">
                <a href="/detail" className="feedbacks__more-content">
                    Показать больше отзывов
                    <img className="arrow" src={arrow} alt="arrow" />
                </a>
            </div> */}
        </div>
    );
};

export default Feedbacks;
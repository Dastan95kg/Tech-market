import React from 'react';
import Feedback from './Feedback';
import './Feedbacks.scss';

const Feedbacks = ({ feedbacks }) => {
    return (
        <div className="feedbacks">
            {feedbacks.length ? feedbacks.map(feedback => (
                <Feedback {...feedback} key={feedback._id} />
            ))
                : <div>Нет отзывов</div>}
        </div>
    );
};

export default Feedbacks;
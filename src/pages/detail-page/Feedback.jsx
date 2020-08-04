import React from 'react';
import { Rating } from 'semantic-ui-react';

const Feedback = ({ content, name, rating }) => {
    return (
        <div className="feedbacks__card">
            <div className="feedbacks__card-title">
                <div className="feedbacks__card-name">{name}</div>
                <Rating
                    maxRating={5}
                    disabled
                    rating={rating}
                />
                <div className="feedbacks__card-date">
                    <span className="date">14.09.2019</span>
                    <span className="time">22:12</span>
                </div>
            </div>
            <p className="feedbacks__card-text">{content}</p>
        </div>
    );
};

export default Feedback;
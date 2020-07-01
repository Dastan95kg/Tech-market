import React from 'react';
import question from '../../assets/images/question.png';
import './TrackingStatus.scss';

const TrackingStatus = () => {
    return (
        <div className="tracking-status">
            <div className="tracking-status__image">
                <img src={question} alt="status icon" />
            </div>
            <div className="tracking-status__content">
                <p className="tracking-status__message">Товар в пути</p>
                <p className="tracking-status__address">к адресу г.Бишкек, 4 м-н 46</p>
                <p className="tracking-status__date">Ожидается 3.04.2019</p>
            </div>
        </div>
    );
};

export default TrackingStatus;
import React from 'react';
import question from '../../assets/images/question.png';
import './TrackingStatus.scss';

const TrackingStatus = (props) => {
    const {
        orderStatus: { order: { status } },
        orderStatus: { order: { adress } }
    } = props;

    return (
        <div className="tracking-status">
            <div className="tracking-status__image">
                <img src={question} alt="status icon" />
            </div>
            <div className="tracking-status__content">
                <p className="tracking-status__message">{status}</p>
                <p className="tracking-status__address">
                    {`к адресу ${adress}`}
                </p>
                <p className="tracking-status__date">Ожидается 3.04.2019</p>
            </div>
        </div>
    );
};

export default TrackingStatus;
import React from 'react';
import { Message } from 'semantic-ui-react';
import TrackingStatus from './TrackingStatus';
import searchIcon from '../../assets/images/IconSearch.png';
import './TrackingResult.scss';

const TrackingResult = (props) => {
    const {
        orderStatus
    } = props;

    if (orderStatus && orderStatus.message) {
        return (
            <Message negative size="large">
                <Message.Header>Такого трекинг кода не существует</Message.Header>
                <p>Проверьте трекинг код на почте</p>
            </Message>
        );
    }
    const {
        orderStatus: { order: { tracking_code: trackingCode } },
        orderStatus: { order: { status } }
    } = props;

    return (
        <div className="tracking__results-wrapper">
            <div className="tracking__results-code">
                <img src={searchIcon} alt="search icon" />
                <span>{trackingCode}</span>
            </div>
            <TrackingStatus orderStatus={orderStatus} />
            <div className="tracking__results-statuses">
                <div className="tracking__results-radio">
                    <label htmlFor="handle">
                        <input
                            id="handle"
                            type="radio"
                            checked={status === 'В обработке'}
                        />
                        В обработке
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="received">
                        <input
                            id="received"
                            type="radio"
                            checked={status === 'Принято'}
                        />
                        Принято
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="atCourier">
                        <input
                            id="atCourier"
                            type="radio"
                            checked={status === 'У курьера'}
                        />
                        У курьера
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="delivered">
                        <input
                            id="delivered"
                            type="radio"
                            checked={status === 'Доставлено'}
                        />
                        Доставлено
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="cancelled">
                        <input
                            id="cancelled"
                            type="radio"
                            checked={status === 'Отмена'}
                        />
                        Отмена
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TrackingResult;
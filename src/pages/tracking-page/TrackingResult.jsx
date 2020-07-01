import React from 'react';
import TrackingStatus from './TrackingStatus';
import searchIcon from '../../assets/images/IconSearch.png';
import './TrackingResult.scss';

const TrackingResult = () => {
    return (
        <div className="tracking__results-wrapper">
            <div className="tracking__results-code">
                <img src={searchIcon} alt="search icon" />
                <span>123456888</span>
            </div>
            <TrackingStatus />
            <div className="tracking__results-statuses">
                <div className="tracking__results-radio">
                    <label htmlFor="handle">
                        <input id="handle" type="radio" checked />
                        В обработке
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="received">
                        <input id="received" type="radio" disabled />
                        Принято
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="atCourier">
                        <input id="atCourier" type="radio" disabled />
                        У курьера
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="delivered">
                        <input id="delivered" type="radio" disabled />
                        Доставлено
                    </label>
                </div>
                <div className="tracking__results-radio">
                    <label htmlFor="cancelled">
                        <input id="cancelled" type="radio" disabled />
                        Отмена
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TrackingResult;
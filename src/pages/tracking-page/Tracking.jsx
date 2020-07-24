import React from 'react';
import SearchForm from '../search-page/SearchForm';
import TrackingResult from './TrackingResult';
import searchIcon from '../../assets/images/IconSearch.png';
import './Tracking.scss';

const Tracking = () => {
    return (
        <section className="tracking">
            <div className="tracking__content">
                <div className="tracking__search">
                    <div className="tracking__search-title">Отслеживание товара</div>
                    <SearchForm placeholder="Введите номер заказа" />
                </div>
                <div className="tracking__results">
                    <div className="tracking__results-code">
                        <img src={searchIcon} alt="search icon" />
                    </div>
                    <div className="tracking__results-content">
                        Тут будет отслеживание вашего товара
                    </div>
                    {/* <TrackingResult /> */}
                </div>
            </div>
        </section>
    );
};

export default Tracking;
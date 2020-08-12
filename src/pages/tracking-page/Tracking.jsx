import React from 'react';
import { Message } from 'semantic-ui-react';
import SearchForm from '../search-page/SearchForm';
import TrackingResult from './TrackingResult';
import searchIcon from '../../assets/images/IconSearch.png';
import './Tracking.scss';

const Tracking = ({ findTrackingCode, orderStatus }) => {
    const statuses = [
        { id: 1, name: 'В обработке', description: 'Заказ в обработке' },
        { id: 2, name: 'Принято', description: 'Заказ принят' },
        { id: 3, name: 'У курьера', description: 'Заказ передан курьеру' },
        { id: 4, name: 'Доставлено', description: 'Заказ доставлен' },
        { id: 5, name: 'Отмена', description: 'Заказ отменен' }
    ];

    return (
        <section className="tracking">
            <div className="tracking__content">
                <div className="tracking__search">
                    <div className="tracking__search-title">Отслеживание товара</div>
                    <SearchForm placeholder="Введите номер заказа" findTrackingCode={findTrackingCode} />
                    <Message info>
                        <Message.Header>Статусы заказов:</Message.Header>
                        {statuses.map(status => (
                            <React.Fragment key={status.id}>
                                <div>{`${status.id}) ${status.name}`}</div>
                                <p className="tracking__search-status-description">{status.description}</p>
                            </React.Fragment>
                        ))}
                    </Message>
                </div>
                <div className="tracking__results">
                    {orderStatus
                        ? <TrackingResult orderStatus={orderStatus} />
                        : (
                            <>
                                <div className="tracking__results-code">
                                    <img src={searchIcon} alt="search icon" />
                                </div>
                                <div className="tracking__results-content">
                                    Тут будет отслеживание вашего товара
                                </div>
                            </>
                        )}
                </div>
            </div>
        </section>
    );
};

export default Tracking;